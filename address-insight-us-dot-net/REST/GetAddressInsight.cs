using System.Web;

namespace address_insight_us_dot_net.REST
{
    /// <summary>
    /// Provides functionality to call the ServiceObjects AddressInsight (AIN) REST API's GetAddressInsight endpoint,
    /// retrieving address validation, geocoding, and demographic information for a given US address
    /// with fallback to a backup endpoint for reliability in live mode.
    /// </summary>
    public class GetAddressInsightClient
    {
        // Base URL constants: production, backup, and trial
        private const string LiveBaseUrl = "https://sws.serviceobjects.com/ain/api.svc/json/";
        private const string BackupBaseUrl = "https://swsbackup.serviceobjects.com/ain/api.svc/json/";
        private const string TrialBaseUrl = "https://trial.serviceobjects.com/ain/api.svc/json/";

        /// <summary>
        /// Synchronously calls the GetAddressInsight REST endpoint to retrieve address insight information,
        /// attempting the primary endpoint first and falling back to the backup if the response is invalid
        /// (Error.TypeCode == "3") in live mode.
        /// </summary>
        /// <param name="input">The input parameters including business name, address, city, state, zip, test type, and license key.</param>
        /// <returns>Deserialized <see cref="AINResponse"/> containing address insight data or an error.</returns>
        public static AINResponse Invoke(GetAddressInsightInput input)
        {
            // Use query string parameters so missing/optional fields don't break the URL
            string url = BuildUrl(input, input.IsLive ? LiveBaseUrl : TrialBaseUrl);
            AINResponse response = Helper.HttpGet<AINResponse>(url, input.TimeoutSeconds);

            // Fallback on error in live mode
            if (input.IsLive && !IsValid(response))
            {
                string fallbackUrl = BuildUrl(input, BackupBaseUrl);
                AINResponse fallbackResponse = Helper.HttpGet<AINResponse>(fallbackUrl, input.TimeoutSeconds);
                return fallbackResponse;
            }

            return response;
        }

        /// <summary>
        /// Asynchronously calls the GetAddressInsight REST endpoint to retrieve address insight information,
        /// attempting the primary endpoint first and falling back to the backup if the response is invalid
        /// (Error.TypeCode == "3") in live mode.
        /// </summary>
        /// <param name="input">The input parameters including business name, address, city, state, zip, test type, and license key.</param>
        /// <returns>Deserialized <see cref="AINResponse"/> containing address insight data or an error.</returns>
        public static async Task<AINResponse> InvokeAsync(GetAddressInsightInput input)
        {
            // Use query string parameters so missing/optional fields don't break the URL
            string url = BuildUrl(input, input.IsLive ? LiveBaseUrl : TrialBaseUrl);
            AINResponse response = await Helper.HttpGetAsync<AINResponse>(url, input.TimeoutSeconds).ConfigureAwait(false);

            // Fallback on error in live mode
            if (input.IsLive && !IsValid(response))
            {
                string fallbackUrl = BuildUrl(input, BackupBaseUrl);
                AINResponse fallbackResponse = await Helper.HttpGetAsync<AINResponse>(fallbackUrl, input.TimeoutSeconds).ConfigureAwait(false);
                return fallbackResponse;
            }

            return response;
        }

        // Build the full request URL, including URL-encoded query string
        private static string BuildUrl(GetAddressInsightInput input, string baseUrl)
        {
            // Construct query string with URL-encoded parameters
            string qs = $"GetAddressInsight?" +
                        $"BusinessName={Helper.UrlEncode(input.BusinessName)}" +
                        $"&Address1={Helper.UrlEncode(input.Address1)}" +
                        $"&Address2={Helper.UrlEncode(input.Address2)}" +
                        $"&City={Helper.UrlEncode(input.City)}" +
                        $"&State={Helper.UrlEncode(input.State)}" +
                        $"&Zip={Helper.UrlEncode(input.Zip)}" +
                        $"&TestType={Helper.UrlEncode(input.TestType)}" +
                        $"&LicenseKey={Helper.UrlEncode(input.LicenseKey)}";
            return baseUrl + qs;
        }

        private static bool IsValid(AINResponse response) => response?.Error == null || response.Error.TypeCode != "3";

        /// <summary>
        /// Input parameters for the GetAddressInsight API call. Represents a US address to retrieve address insights
        /// with cascading logic for partial matches.
        /// </summary>
        /// <param name="BusinessName">A company name for a business, can provide additional insight or append a SuiteLink value. Optional.</param>
        /// <param name="Address1">Address line 1 of the contact or business address (e.g., "123 Main Street").</param>
        /// <param name="Address2">Address line 2 of the contact or business address (e.g., "Apt 4B"). Optional.</param>
        /// <param name="City">The city of the address (e.g., "New York"). Optional if zip is provided.</param>
        /// <param name="State">The state of the address (e.g., "NY"). Optional if zip is provided.</param>
        /// <param name="Zip">The ZIP code of the address. Optional if city and state are provided.</param>
        /// <param name="TestType">The test type, either empty or "census_loose" for best possible match based on census data. Optional.</param>
        /// <param name="LicenseKey">The license key to authenticate the API request.</param>
        /// <param name="IsLive">Indicates whether to use the live service (true) or trial service (false).</param>
        /// <param name="TimeoutSeconds">Timeout duration for the API call, in seconds.</param>
        public record GetAddressInsightInput(
            string BusinessName = "",
            string Address1 = "",
            string Address2 = "",
            string City = "",
            string State = "",
            string Zip = "",
            string TestType = "",
            string LicenseKey = "",
            bool IsLive = true,
            int TimeoutSeconds = 15
        );
    }
}