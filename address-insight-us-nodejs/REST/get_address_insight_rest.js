import axios from 'axios';
import querystring from 'querystring';
import { AINResponse } from './ain_response.js';

/**
 * @constant
 * @type {string}
 * @description The base URL for the live ServiceObjects AddressInsight (AIN) API service.
 */
const LiveBaseUrl = 'https://sws.serviceobjects.com/ain/api.svc/json/';

/**
 * @constant
 * @type {string}
 * @description The base URL for the backup ServiceObjects AddressInsight (AIN) API service.
 */
const BackupBaseUrl = 'https://swsbackup.serviceobjects.com/ain/api.svc/json/';

/**
 * @constant
 * @type {string}
 * @description The base URL for the trial ServiceObjects AddressInsight (AIN) API service.
 */
const TrialBaseUrl = 'https://trial.serviceobjects.com/ain/api.svc/json/';

/**
 * <summary>
 * Checks if a response from the API is valid by verifying that it either has no Error object
 * or the Error.TypeCode is not equal to '3'.
 * </summary>
 * <param name="response" type="Object">The API response object to validate.</param>
 * <returns type="boolean">True if the response is valid, false otherwise.</returns>
 */
const isValid = (response) => !response?.Error || response.Error.TypeCode !== '3';

/**
 * <summary>
 * Constructs a full URL for the GetAddressInsight API endpoint by combining the base URL
 * with query parameters derived from the input parameters.
 * </summary>
 * <param name="params" type="Object">An object containing all the input parameters.</param>
 * <param name="baseUrl" type="string">The base URL for the API service (live, backup, or trial).</param>
 * <returns type="string">The constructed URL with query parameters.</returns>
 */
const buildUrl = (params, baseUrl) =>
    `${baseUrl}GetAddressInsight?${querystring.stringify(params)}`;

/**
 * <summary>
 * Performs an HTTP GET request to the specified URL with a given timeout.
 * </summary>
 * <param name="url" type="string">The URL to send the GET request to.</param>
 * <param name="timeoutSeconds" type="number">The timeout duration in seconds for the request.</param>
 * <returns type="Promise<AINResponse>">A promise that resolves to a AINResponse object containing the API response data.</returns>
 * <exception cref="Error">Thrown if the HTTP request fails, with a message detailing the error.</exception>
 */
const httpGet = async (url, timeoutSeconds) => {
    try {
        const response = await axios.get(url, { timeout: timeoutSeconds * 1000 });
        return new AINResponse(response.data);
    } catch (error) {
        throw new Error(`HTTP request failed: ${error.message}`);
    }
};

/**
 * <summary>
 * Provides functionality to call the ServiceObjects AddressInsight (AIN) API's GetAddressInsight endpoint,
 * retrieving address validation, geocoding, and demographic information for a given US address
 * with fallback to a backup endpoint for reliability in live mode.
 * </summary>
 */
const GetAddressInsightClient = {
    /**
     * <summary>
     * Asynchronously invokes the GetAddressInsight API endpoint, attempting the primary endpoint
     * first and falling back to the backup if the response is invalid (Error.TypeCode == '3') in live mode.
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
     * @returns {Promise<AINResponse>} - A promise that resolves to a AINResponse object.
     */
    async invokeAsync(BusinessName, Address1, Address2, City, State, Zip, TestType, LicenseKey, isLive = true, timeoutSeconds = 15) {
        const params = {
            BusinessName,
            Address1,
            Address2,
            City,
            State,
            Zip,
            TestType,
            LicenseKey
        };

        const url = buildUrl(params, isLive ? LiveBaseUrl : TrialBaseUrl);
        let response = await httpGet(url, timeoutSeconds);

        if (isLive && !isValid(response)) {
            const fallbackUrl = buildUrl(params, BackupBaseUrl);
            const fallbackResponse = await httpGet(fallbackUrl, timeoutSeconds);
            return fallbackResponse;
        }
        return response;
    },

    /**
     * <summary>
     * Synchronously invokes the GetAddressInsight API endpoint by wrapping the async call
     * and awaiting its result immediately.
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
     * @returns {AINResponse} - A AINResponse object with address insight details or an error.
     */
    invoke(BusinessName, Address1, Address2, City, State, Zip, TestType, LicenseKey, isLive = true, timeoutSeconds = 15) {
        return (async () => await this.invokeAsync(
            BusinessName, Address1, Address2, City, State, Zip, TestType, LicenseKey, isLive, timeoutSeconds
        ))();
    }
};

export { GetAddressInsightClient, AINResponse };