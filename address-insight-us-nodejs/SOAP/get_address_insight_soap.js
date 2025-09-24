import { soap } from 'strong-soap';

/**
 * <summary>
 * A class that provides functionality to call the ServiceObjects AddressInsight (AIN) SOAP service's GetAddressInsight endpoint,
 * retrieving address validation, geocoding, and demographic information for a given US address with fallback to a backup endpoint for reliability in live mode.
 * </summary>
 */
class GetAddressInsightSoap {
    /**
     * <summary>
     * Initializes a new instance of the GetAddressInsightSoap class with the provided input parameters,
     * setting up primary and backup WSDL URLs based on the live/trial mode.
     * </summary>
     * @param {string} BusinessName - A company name for a business, can provide additional insight or append a SuiteLink value. Optional.
     * @param {string} Address1 - Address line 1 of the contact or business address (e.g., "123 Main Street").
     * @param {string} Address2 - Address line 2 of the contact or business address (e.g., "Apt 4B"). Optional.
     * @param {string} City - The city of the address (e.g., "New York"). Optional if zip is provided.
     * @param {string} State - The state of the address (e.g., "NY"). Optional if zip is provided.
     * @param {string} Zip - The ZIP code of the address. Optional if city and state are provided.
     * @param {string} TestType - The test type, either empty or "census_loose" for best possible match based on census data. Optional.
     * @param {string} LicenseKey - Your license key to use the service.
     * @param {boolean} isLive - Value to determine whether to use the live or trial servers.
     * @param {number} timeoutSeconds - Timeout, in seconds, for the call to the service.
     * @throws {Error} Thrown if LicenseKey is empty or null.
     */
    constructor(BusinessName, Address1, Address2, City, State, Zip, TestType, LicenseKey, isLive = true, timeoutSeconds = 15) {
        this.args = {
            BusinessName,
            Address1,
            Address2,
            City,
            State,
            Zip,
            TestType,
            LicenseKey
        };

        this.isLive = isLive;
        this.timeoutSeconds = timeoutSeconds;

        this.LiveBaseUrl = 'https://sws.serviceobjects.com/AIN/SOAP.svc?wsdl';
        this.BackupBaseUrl = 'https://swsbackup.serviceobjects.com/AIN/SOAP.svc?wsdl';
        this.TrialBaseUrl = 'https://trial.serviceobjects.com/AIN/SOAP.svc?wsdl';

        this._primaryWsdl = this.isLive ? this.LiveBaseUrl : this.TrialBaseUrl;
        this._backupWsdl = this.isLive ? this.BackupBaseUrl : this.TrialBaseUrl;
    }

    /**
     * <summary>
     * Asynchronously calls the GetAddressInsight SOAP endpoint, attempting the primary endpoint
     * first and falling back to the backup if the response is invalid (Error.TypeCode == '3') in live mode
     * or if the primary call fails.
     * </summary>
     * @returns {Promise<Object>} A promise that resolves to an object containing address insight details or an error.
     * @throws {Error} Thrown if both primary and backup calls fail, with detailed error messages.
     */
    async invokeAsync() {
        try {
            const primaryResult = await this._callSoap(this._primaryWsdl, this.args);

            if (this.isLive && !this._isValid(primaryResult)) {
                console.warn("Primary returned Error.TypeCode == '3', falling back to backup...");
                const backupResult = await this._callSoap(this._backupWsdl, this.args);
                return backupResult;
            }

            return primaryResult;
        } catch (primaryErr) {
            try {
                const backupResult = await this._callSoap(this._backupWsdl, this.args);
                return backupResult;
            } catch (backupErr) {
                throw new Error(`Both primary and backup calls failed:\nPrimary: ${primaryErr.message}\nBackup: ${backupErr.message}`);
            }
        }
    }

    /**
     * <summary>
     * Performs a SOAP service call to the specified WSDL URL with the given arguments,
     * creating a client and processing the response into an object.
     * </summary>
     * @param {string} wsdlUrl - The WSDL URL of the SOAP service endpoint (primary or backup).
     * @param {Object} args - The arguments to pass to the GetAddressInsight method.
     * @returns {Promise<Object>} A promise that resolves to an object containing the SOAP response data.
     * @throws {Error} Thrown if the SOAP client creation fails, the service call fails, or the response cannot be parsed.
     */
    _callSoap(wsdlUrl, args) {
        return new Promise((resolve, reject) => {
            soap.createClient(wsdlUrl, { timeout: this.timeoutSeconds * 1000 }, (err, client) => {
                if (err) return reject(err);

                client.GetAddressInsight(args, (err, result) => {
                    const response = result?.GetAddressInsightResult;
                    try {
                        if (!response) {
                            return reject(new Error("SOAP response is empty or undefined."));
                        }
                        resolve(response);
                    } catch (parseErr) {
                        reject(new Error(`Failed to parse SOAP response: ${parseErr.message}`));
                    }
                });
            });
        });
    }

    /**
     * <summary>
     * Checks if a SOAP response is valid by verifying that it exists and either has no Error object
     * or the Error.TypeCode is not equal to '3'.
     * </summary>
     * @param {Object} response - The response object to validate.
     * @returns {boolean} True if the response is valid, false otherwise.
     */
    _isValid(response) {
        if (!response) return false;
        if (response.Error) {
            const errorFields = response.Error.Result?.[0]?.Field || [];
            const typeCode = errorFields.find(field => field.Key === 'TypeCode')?.Value;
            return typeCode !== '3';
        }
        return true;
    }
}

export { GetAddressInsightSoap };