using address_insight_us_dot_net.REST;

namespace address_insight_us_dot_net_examples
{
    public class GetAddressInsightRestSdkExample
    {
        public static void Go(string licenseKey, bool isLive)
        {
            Console.WriteLine("\r\n---------------------------------------------------");
            Console.WriteLine("Address Insight – US - GetAddressInsight - REST SDK");
            Console.WriteLine("---------------------------------------------------");

            GetAddressInsightClient.GetAddressInsightInput getAddressInsightInput = new(
                BusinessName: "Service Objects",
                Address1: "136 W Canon Perdido St, Suite D",
                Address2: "",
                City: "Santa Barbara",
                State: "CA",
                Zip: "93101",
                TestType: "census_loose",
                LicenseKey: licenseKey,
                IsLive: isLive,
                TimeoutSeconds: 15
            );

            Console.WriteLine("\r\n* Input *\r\n");
            Console.WriteLine($"Business Name: {getAddressInsightInput.BusinessName}");
            Console.WriteLine($"Address1     : {getAddressInsightInput.Address1}");
            Console.WriteLine($"Address2     : {getAddressInsightInput.Address2}");
            Console.WriteLine($"City         : {getAddressInsightInput.City}");
            Console.WriteLine($"State        : {getAddressInsightInput.State}");
            Console.WriteLine($"Zip          : {getAddressInsightInput.Zip}");
            Console.WriteLine($"Test Type    : {getAddressInsightInput.TestType}");
            Console.WriteLine($"License Key  : {getAddressInsightInput.LicenseKey}");
            Console.WriteLine($"Is Live      : {getAddressInsightInput.IsLive}");

            AINResponse response = GetAddressInsightClient.Invoke(getAddressInsightInput);
            if (response.Error is null)
            {
                Console.WriteLine("\r\n* Address Insight *\r\n");
                Console.WriteLine($"Status                 : {response.Status}");
                Console.WriteLine($"Status Score           : {response.StatusScore}");
                Console.WriteLine($"Address Status         : {response.AddressStatus}");
                Console.WriteLine($"DPV                    : {response.DPV}");
                Console.WriteLine($"DPV Description        : {response.DPVDesc}");
                Console.WriteLine($"Address                : {response.Address}");
                Console.WriteLine($"Address Extra          : {response.AddressExtra}");
                Console.WriteLine($"City                   : {response.City}");
                Console.WriteLine($"State                  : {response.State}");
                Console.WriteLine($"Zip                    : {response.Zip}");
                Console.WriteLine($"Barcode Digits         : {response.BarcodeDigits}");
                Console.WriteLine($"Carrier Route          : {response.CarrierRoute}");
                Console.WriteLine($"Congress Code          : {response.CongressCode}");
                Console.WriteLine($"County Name            : {response.CountyName}");
                Console.WriteLine($"Fragment House         : {response.FragmentHouse}");
                Console.WriteLine($"Fragment PreDir        : {response.FragmentPreDir}");
                Console.WriteLine($"Fragment Street        : {response.FragmentStreet}");
                Console.WriteLine($"Fragment Suffix        : {response.FragmentSuffix}");
                Console.WriteLine($"Fragment PostDir       : {response.FragmentPostDir}");
                Console.WriteLine($"Fragment Unit          : {response.FragmentUnit}");
                Console.WriteLine($"Fragment Unit Num      : {response.FragmentUnitNumber}");
                Console.WriteLine($"Fragment PMB Prefix    : {response.FragmentPMBPrefix}");
                Console.WriteLine($"Fragment PMB Number    : {response.FragmentPMBNumber}");
                Console.WriteLine($"Corrections            : {response.Corrections}");
                Console.WriteLine($"Corrections Desc       : {response.CorrectionsDesc}");
                Console.WriteLine($"Address Notes          : {response.AddressNotes}");
                Console.WriteLine($"Address Notes Codes    : {response.AddressNotesCodes}");
                Console.WriteLine($"Geocode Status         : {response.GeocodeStatus}");
                Console.WriteLine($"Latitude               : {response.LocationLatitude}");
                Console.WriteLine($"Longitude              : {response.LocationLongitude}");
                Console.WriteLine($"Census Tract           : {response.CensusTract}");
                Console.WriteLine($"Census Block           : {response.CensusBlock}");
                Console.WriteLine($"Place Name             : {response.PlaceName}");
                Console.WriteLine($"Class FP               : {response.ClassFP}");
                Console.WriteLine($"SLDUST                 : {response.SLDUST}");
                Console.WriteLine($"SLDLST                 : {response.SLDLST}");
                Console.WriteLine($"County FIPS            : {response.CountyFIPS}");
                Console.WriteLine($"State FIPS             : {response.StateFIPS}");
                Console.WriteLine($"Geocode Notes          : {response.GeocodeNotes}");
                Console.WriteLine($"Geocode Notes Codes    : {response.GeocodeNotesCodes}");
                Console.WriteLine($"Zip Status             : {response.ZipStatus}");
                Console.WriteLine($"Zip Latitude           : {response.ZipLatitude}");
                Console.WriteLine($"Zip Longitude          : {response.ZipLongitude}");
                Console.WriteLine($"City Type              : {response.CityType}");
                Console.WriteLine($"City Alias Name        : {response.CityAliasName}");
                Console.WriteLine($"Area Code              : {response.AreaCode}");
                Console.WriteLine($"Time Zone              : {response.TimeZone}");
                Console.WriteLine($"Daylight Saving        : {response.DaylightSaving}");
                Console.WriteLine($"MSA                    : {response.MSA}");
                Console.WriteLine($"CBSA                   : {response.CBSA}");
                Console.WriteLine($"CBSA Div               : {response.CBSA_Div}");
                Console.WriteLine($"PMSA                   : {response.PMSA}");
                Console.WriteLine($"DMA                    : {response.DMA}");
                Console.WriteLine($"Zip Household Value    : {response.ZipHouseholdValue}");
                Console.WriteLine($"Persons Per Household  : {response.ZipPersonsPerHousehold}");
                Console.WriteLine($"Zip Household Income   : {response.ZipHouseholdIncome}");
                Console.WriteLine($"County Household Income: {response.CountyHouseholdIncome}");
                Console.WriteLine($"State Household Income : {response.StateHouseholdIncome}");
                Console.WriteLine($"Zip Notes              : {response.ZipNotes}");
                Console.WriteLine($"Zip Notes Codes        : {response.ZipNotesCodes}");
            }
            else
            {
                Console.WriteLine("\r\n* Error *\r\n");
                Console.WriteLine($"Error Type        : {response.Error.Type}");
                Console.WriteLine($"Error Type Code   : {response.Error.TypeCode}");
                Console.WriteLine($"Error Desc        : {response.Error.Desc}");
                Console.WriteLine($"Error Desc Code   : {response.Error.DescCode}");
            }
        }
    }
}