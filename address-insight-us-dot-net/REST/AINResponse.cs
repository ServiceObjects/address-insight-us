
    /// <summary>
    /// This is the return from the AIN endpoint
    /// </summary>
    ///
    public class AINResponse
    {
        public string Status { get; set; }
        public string StatusScore { get; set; }
        public string AddressStatus { get; set; }
        public string DPV { get; set; }
        public string DPVDesc { get; set; }
        public string Address { get; set; }
        public string AddressExtra { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string BarcodeDigits { get; set; }
        public string CarrierRoute { get; set; }
        public string CongressCode { get; set; }
        public string CountyCode { get; set; }
        public string CountyName { get; set; }
        public string FragmentHouse { get; set; }
        public string FragmentPreDir { get; set; }
        public string FragmentStreet { get; set; }
        public string FragmentSuffix { get; set; }
        public string FragmentPostDir { get; set; }
        public string FragmentUnit { get; set; }
        public string FragmentUnitNumber { get; set; }
        public string Fragment { get; set; }
        public string FragmentPMBPrefix { get; set; }
        public string FragmentPMBNumber { get; set; }
        public string Corrections { get; set; }
        public string CorrectionsDesc { get; set; }
        public string AddressNotes { get; set; }
        public string AddressNotesCodes { get; set; }
        public string GeocodeStatus { get; set; }
        public string LocationLatitude { get; set; }
        public string LocationLongitude { get; set; }
        public string CensusTract { get; set; }
        public string CensusBlock { get; set; }
        public string PlaceName { get; set; }
        public string ClassFP { get; set; }
        public string SLDUST { get; set; }
        public string SLDLST { get; set; }
        public string CountyFIPS { get; set; }
        public string StateFIPS { get; set; }
        public string GeocodeNotes { get; set; }
        public string GeocodeNotesCodes { get; set; }
        public string ZipStatus { get; set; }
        public string ZipLatitude { get; set; }
        public string ZipLongitude { get; set; }
        public string CityType { get; set; }
        public string CityAliasName { get; set; }
        public string AreaCode { get; set; }
        public string TimeZone { get; set; }
        public string DaylightSaving { get; set; }
        public string MSA { get; set; }
        public string CBSA { get; set; }
        public string CBSA_Div { get; set; }
        public string PMSA { get; set; }
        public string DMA { get; set; }
        public string ZipHouseholdValue { get; set; }
        public string ZipPersonsPerHousehold { get; set; }
        public string ZipHouseholdIncome { get; set; }
        public string CountyHouseholdIncome { get; set; }
        public string StateHouseholdIncome { get; set; }
        public string ZipNotes { get; set; }
        public string ZipNotesCodes { get; set; }
        public string Debug { get; set; }
        public Error Error { get; set; }
        public override string ToString()
        {
            return $"\n{{\n\tStatus: {Status}\n\t" +
                $"StatusScore: {StatusScore}\n\t" +
                $"AddressStatus: {AddressStatus}\n\t" +
                $"DPV: {DPV}\n\t" +
                $"DPVDesc: {DPVDesc}\n\t" +
                $"Address: {Address}\n\t" +
                $"AddressExtra: {AddressExtra}\n\t" +
                $"City: {City}\n\t" +
                $"State: {State}\n\t" +
                $"Zip: {Zip}\n\t" +
                $"BarcodeDigits: {BarcodeDigits}\n\t" +
                $"CarrierRoute: {CarrierRoute}\n\t" +
                $"CongressCode: {CongressCode}\n\t" +
                $"CountyCode: {CountyCode}\n\t" +
                $"CountyName: {CountyName}\n\t" +
                $"FragmentHouse: {FragmentHouse}\n\t" +
                $"FragmentPreDir: {FragmentPreDir}\n\t" +
                $"FragmentStreet: {FragmentStreet}\n\t" +
                $"FragmentSuffix: {FragmentSuffix}\n\t" +
                $"FragmentPostDir: {FragmentPostDir}\n\t" +
                $"FragmentUnit: {FragmentUnit}\n\t" +
                $"FragmentUnitNumber: {FragmentUnitNumber}\n\t" +
                $"FragmentPMBPrefix: {FragmentPMBPrefix}\n\t" +
                $"FragmentPMBNumber: {FragmentPMBNumber}\n\t" +
                $"Corrections: {Corrections}\n\t" +
                $"CorrectionsDesc: {CorrectionsDesc}\n\t" +
                $"AddressNotes: {AddressNotes}\n\t" +
                $"AddressNotesCodes: {AddressNotesCodes}\n\t" +
                $"GeocodeStatus: {GeocodeStatus}\n\t" +
                $"LocationLatitude: {LocationLatitude}\n\t" +
                $"LocationLongitude: {LocationLongitude}\n\t" +
                $"CensusTract: {CensusTract}\n\t" +
                $"CensusBlock: {CensusBlock}\n\t" +
                $"PlaceName: {PlaceName}\n\t" +
                $"ClassFP: {ClassFP}\n\t" +
                $"SLDUST: {SLDUST}\n\t" +
                $"SLDLST: {SLDLST}\n\t" +
                $"CountyFIPS: {CountyFIPS}\n\t" +
                $"StateFIPS: {StateFIPS}\n\t" +
                $"GeocodeNotes: {GeocodeNotes}\n\t" +
                $"GeocodeNotesCodes: {GeocodeNotesCodes}\n\t" +
                $"ZipStatus: {ZipStatus}\n\t" +
                $"ZipLatitude: {ZipLatitude}\n\t" +
                $"ZipLongitude: {ZipLongitude}\n\t" +
                $"CityType: {CityType}\n\t" +
                $"CityAliasName: {CityAliasName}\n\t" +
                $"AreaCode: {AreaCode}\n\t" +
                $"TimeZone: {TimeZone}\n\t" +
                $"DaylightSaving: {DaylightSaving}\n\t" +
                $"MSA: {MSA}\n\t" +
                $"CBSA: {CBSA}\n\t" +
                $"CBSA_Div: {CBSA_Div}\n\t" +
                $"PMSA: {PMSA}\n\t" +
                $"DMA: {DMA}\n\t" +
                $"ZipHouseholdValue: {ZipHouseholdValue}\n\t" +
                $"ZipPersonsPerHousehold: {ZipPersonsPerHousehold}\n\t" +
                $"ZipHouseholdIncome: {ZipHouseholdIncome}\n\t" +
                $"CountyHouseholdIncome: {CountyHouseholdIncome}\n\t" +
                $"StateHouseholdIncome: {StateHouseholdIncome}\n\t" +
                $"ZipNotes: {ZipNotes}\n\t" +
                $"ZipNotesCodes: {ZipNotesCodes}\n\t" +
                $"Error: {{{Error}}}\n}}";
        }
    }

    public class Error
    {
        public string Type { get; set; }
        public string TypeCode { get; set; }
        public string Desc { get; set; }
        public string DescCode { get; set; }
        public override string ToString()
        {
            return $"Type: {Type} " +
                $"TypeCode: {TypeCode} " +
                $"Desc: {Desc} " +
                $"DescCode: {DescCode} ";
        }
    }

