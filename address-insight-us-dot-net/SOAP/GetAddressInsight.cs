using AIUSReference;

namespace address_insight_us_dot_net.SOAP
{
    /// <summary>
    /// Provides functionality to call the ServiceObjects AddressInsight (AIN) SOAP service's GetAddressInsight operation,
    /// retrieving address validation, geocoding, and demographic information for a given US address
    /// with fallback to a backup endpoint for reliability in live mode.
    /// </summary>
    public class GetAddressInsightValidation
    {
        private const string LiveBaseUrl = "https://sws.serviceobjects.com/AIN/SOAP.svc/SOAP";
        private const string BackupBaseUrl = "https://swsbackup.serviceobjects.com/AIN/SOAP.svc/SOAP";
        private const string TrialBaseUrl = "https://trial.serviceobjects.com/AIN/SOAP.svc/SOAP";

        private readonly string _primaryUrl;
        private readonly string _backupUrl;
        private readonly int _timeoutMs;
        private readonly bool _isLive;

        /// <summary>
        /// Initializes URLs, timeout, and IsLive.
        /// </summary>
        public GetAddressInsightValidation(bool isLive)
        {
            _timeoutMs = 10000;
            _isLive = isLive;

            _primaryUrl = isLive ? LiveBaseUrl : TrialBaseUrl;
            _backupUrl = isLive ? BackupBaseUrl : TrialBaseUrl;

            if (string.IsNullOrWhiteSpace(_primaryUrl))
                throw new InvalidOperationException("Primary URL not set.");
            if (string.IsNullOrWhiteSpace(_backupUrl))
                throw new InvalidOperationException("Backup URL not set.");
        }

        /// <summary>
        /// This operation returns the best available address insight data for a given US address, including
        /// address validation, geocoding, and demographic information.
        /// </summary>
        /// <param name="BusinessName">A company name for a business, can provide additional insight or append a SuiteLink value. Optional.</param>
        /// <param name="Address1">Address line 1 of the contact or business address (e.g., "123 Main Street").</param>
        /// <param name="Address2">Address line 2 of the contact or business address (e.g., "Apt 4B"). Optional.</param>
        /// <param name="City">The city of the address (e.g., "New York"). Optional if zip is provided.</param>
        /// <param name="State">The state of the address (e.g., "NY"). Optional if zip is provided.</param>
        /// <param name="Zip">The ZIP code of the address. Optional if city and state are provided.</param>
        /// <param name="TestType">The test type, either empty or "census_loose" for best possible match based on census data. Optional.</param>
        /// <param name="LicenseKey">The license key to authenticate the API request.</param>
        public async Task<ResponseObject> GetAddressInsight(string BusinessName, string Address1, string Address2, string City, string State, string Zip, string TestType, string LicenseKey)
        {
            SOAPClient clientPrimary = null;
            SOAPClient clientBackup = null;

            try
            {
                // Attempt Primary
                clientPrimary = new SOAPClient();
                clientPrimary.Endpoint.Address = new System.ServiceModel.EndpointAddress(_primaryUrl);
                clientPrimary.InnerChannel.OperationTimeout = TimeSpan.FromMilliseconds(_timeoutMs);

                ResponseObject response = await clientPrimary.GetAddressInsightAsync(
                    BusinessName, Address1, Address2, City, State, Zip, TestType, LicenseKey).ConfigureAwait(false);

                if (_isLive && !IsValid(response))
                {
                    throw new InvalidOperationException("Primary endpoint returned null or a fatal TypeCode=3 error for GetAddressInsight");
                }
                return response;
            }
            catch (Exception primaryEx)
            {
                try
                {
                    clientBackup = new SOAPClient();
                    clientBackup.Endpoint.Address = new System.ServiceModel.EndpointAddress(_backupUrl);
                    clientBackup.InnerChannel.OperationTimeout = TimeSpan.FromMilliseconds(_timeoutMs);

                    return await clientBackup.GetAddressInsightAsync(
                        BusinessName, Address1, Address2, City, State, Zip, TestType, LicenseKey).ConfigureAwait(false);
                }
                catch (Exception backupEx)
                {
                    throw new InvalidOperationException(
                        $"Both primary and backup endpoints failed.\n" +
                        $"Primary error: {primaryEx.Message}\n" +
                        $"Backup error: {backupEx.Message}");
                }
                finally
                {
                    clientBackup.Close();
                }
            }
            finally
            {
                clientPrimary.Close();
            }
        }
        private static bool IsValid(ResponseObject response)
        {
            if (response.TryGetValue("Error", out var resultObject) && resultObject != null)
            {
                var errorField = resultObject.FirstOrDefault()?.FirstOrDefault(f => f.Key == "TypeCode");
                if (errorField != null && errorField.Value.Value == "3")
                    return false;
            }
            return true;
        }
    }
}