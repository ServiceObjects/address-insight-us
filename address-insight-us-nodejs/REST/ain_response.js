/**
 * Error object for API responses.
 */
export class Error {
    constructor(data = {}) {
        this.Type = data.Type;
        this.TypeCode = data.TypeCode;
        this.Desc = data.Desc;
        this.DescCode = data.DescCode;
    }

    toString() {
        return `Error: Type = ${this.Type}, TypeCode = ${this.TypeCode}, Desc = ${this.Desc}, DescCode = ${this.DescCode}`;
    }
}

/**
 * Response from GetAddressInsight API, containing address validation, geocoding, and demographic information.
 */
export class AINResponse {
    constructor(data = {}) {
        this.Status = data.Status;
        this.StatusScore = data.StatusScore;
        this.AddressStatus = data.AddressStatus;
        this.DPV = data.DPV;
        this.DPVDesc = data.DPVDesc;
        this.Address = data.Address;
        this.AddressExtra = data.AddressExtra;
        this.City = data.City;
        this.State = data.State;
        this.Zip = data.Zip;
        this.BarcodeDigits = data.BarcodeDigits;
        this.CarrierRoute = data.CarrierRoute;
        this.CongressCode = data.CongressCode;
        this.CountyCode = data.CountyCode;
        this.CountyName = data.CountyName;
        this.FragmentHouse = data.FragmentHouse;
        this.FragmentPreDir = data.FragmentPreDir;
        this.FragmentStreet = data.FragmentStreet;
        this.FragmentSuffix = data.FragmentSuffix;
        this.FragmentPostDir = data.FragmentPostDir;
        this.FragmentUnit = data.FragmentUnit;
        this.FragmentUnitNumber = data.FragmentUnitNumber;
        this.Fragment = data.Fragment;
        this.FragmentPMBPrefix = data.FragmentPMBPrefix;
        this.FragmentPMBNumber = data.FragmentPMBNumber;
        this.Corrections = data.Corrections;
        this.CorrectionsDesc = data.CorrectionsDesc;
        this.AddressNotes = data.AddressNotes;
        this.AddressNotesCodes = data.AddressNotesCodes;
        this.GeocodeStatus = data.GeocodeStatus;
        this.LocationLatitude = data.LocationLatitude;
        this.LocationLongitude = data.LocationLongitude;
        this.CensusTract = data.CensusTract;
        this.CensusBlock = data.CensusBlock;
        this.PlaceName = data.PlaceName;
        this.ClassFP = data.ClassFP;
        this.SLDUST = data.SLDUST;
        this.SLDLST = data.SLDLST;
        this.CountyFIPS = data.CountyFIPS;
        this.StateFIPS = data.StateFIPS;
        this.GeocodeNotes = data.GeocodeNotes;
        this.GeocodeNotesCodes = data.GeocodeNotesCodes;
        this.ZipStatus = data.ZipStatus;
        this.ZipLatitude = data.ZipLatitude;
        this.ZipLongitude = data.ZipLongitude;
        this.CityType = data.CityType;
        this.CityAliasName = data.CityAliasName;
        this.AreaCode = data.AreaCode;
        this.TimeZone = data.TimeZone;
        this.DaylightSaving = data.DaylightSaving;
        this.MSA = data.MSA;
        this.CBSA = data.CBSA;
        this.CBSA_Div = data.CBSA_Div;
        this.PMSA = data.PMSA;
        this.DMA = data.DMA;
        this.ZipHouseholdValue = data.ZipHouseholdValue;
        this.ZipPersonsPerHousehold = data.ZipPersonsPerHousehold;
        this.ZipHouseholdIncome = data.ZipHouseholdIncome;
        this.CountyHouseholdIncome = data.CountyHouseholdIncome;
        this.StateHouseholdIncome = data.StateHouseholdIncome;
        this.ZipNotes = data.ZipNotes;
        this.ZipNotesCodes = data.ZipNotesCodes;
        this.Debug = data.Debug || [];
        this.Error = data.Error ? new Error(data.Error) : null;
    }

    toString() {
        const debugString = this.Debug.length ? this.Debug.join(', ') : 'null';
        return `AINResponse: Status = ${this.Status}, StatusScore = ${this.StatusScore}, AddressStatus = ${this.AddressStatus}, ` +
            `DPV = ${this.DPV}, DPVDesc = ${this.DPVDesc}, Address = ${this.Address}, AddressExtra = ${this.AddressExtra}, ` +
            `City = ${this.City}, State = ${this.State}, Zip = ${this.Zip}, BarcodeDigits = ${this.BarcodeDigits}, ` +
            `CarrierRoute = ${this.CarrierRoute}, CongressCode = ${this.CongressCode}, CountyCode = ${this.CountyCode}, ` +
            `CountyName = ${this.CountyName}, FragmentHouse = ${this.FragmentHouse}, FragmentPreDir = ${this.FragmentPreDir}, ` +
            `FragmentStreet = ${this.FragmentStreet}, FragmentSuffix = ${this.FragmentSuffix}, FragmentPostDir = ${this.FragmentPostDir}, ` +
            `FragmentUnit = ${this.FragmentUnit}, FragmentUnitNumber = ${this.FragmentUnitNumber}, Fragment = ${this.Fragment}, ` +
            `FragmentPMBPrefix = ${this.FragmentPMBPrefix}, FragmentPMBNumber = ${this.FragmentPMBNumber}, ` +
            `Corrections = ${this.Corrections}, CorrectionsDesc = ${this.CorrectionsDesc}, AddressNotes = ${this.AddressNotes}, ` +
            `AddressNotesCodes = ${this.AddressNotesCodes}, GeocodeStatus = ${this.GeocodeStatus}, LocationLatitude = ${this.LocationLatitude}, ` +
            `LocationLongitude = ${this.LocationLongitude}, CensusTract = ${this.CensusTract}, CensusBlock = ${this.CensusBlock}, ` +
            `PlaceName = ${this.PlaceName}, ClassFP = ${this.ClassFP}, SLDUST = ${this.SLDUST}, SLDLST = ${this.SLDLST}, ` +
            `CountyFIPS = ${this.CountyFIPS}, StateFIPS = ${this.StateFIPS}, GeocodeNotes = ${this.GeocodeNotes}, ` +
            `GeocodeNotesCodes = ${this.GeocodeNotesCodes}, ZipStatus = ${this.ZipStatus}, ZipLatitude = ${this.ZipLatitude}, ` +
            `ZipLongitude = ${this.ZipLongitude}, CityType = ${this.CityType}, CityAliasName = ${this.CityAliasName}, ` +
            `AreaCode = ${this.AreaCode}, TimeZone = ${this.TimeZone}, DaylightSaving = ${this.DaylightSaving}, ` +
            `MSA = ${this.MSA}, CBSA = ${this.CBSA}, CBSA_Div = ${this.CBSA_Div}, PMSA = ${this.PMSA}, DMA = ${this.DMA}, ` +
            `ZipHouseholdValue = ${this.ZipHouseholdValue}, ZipPersonsPerHousehold = ${this.ZipPersonsPerHousehold}, ` +
            `ZipHouseholdIncome = ${this.ZipHouseholdIncome}, CountyHouseholdIncome = ${this.CountyHouseholdIncome}, ` +
            `StateHouseholdIncome = ${this.StateHouseholdIncome}, ZipNotes = ${this.ZipNotes}, ZipNotesCodes = ${this.ZipNotesCodes}, ` +
            `Debug = [${debugString}], Error = ${this.Error ? this.Error.toString() : 'null'}`;
    }
}

export default AINResponse;