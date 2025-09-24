/**
 * Error object for API responses.
 */
export class Error {
    constructor(data = {}) {
        this.Type = data.Type || null;
        this.TypeCode = data.TypeCode || null;
        this.Desc = data.Desc || null;
        this.DescCode = data.DescCode || null;
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
        this.Status = data.Status || null;
        this.StatusScore = data.StatusScore || null;
        this.AddressStatus = data.AddressStatus || null;
        this.DPV = data.DPV || null;
        this.DPVDesc = data.DPVDesc || null;
        this.Address = data.Address || null;
        this.AddressExtra = data.AddressExtra || null;
        this.City = data.City || null;
        this.State = data.State || null;
        this.Zip = data.Zip || null;
        this.BarcodeDigits = data.BarcodeDigits || null;
        this.CarrierRoute = data.CarrierRoute || null;
        this.CongressCode = data.CongressCode || null;
        this.CountyCode = data.CountyCode || null;
        this.CountyName = data.CountyName || null;
        this.FragmentHouse = data.FragmentHouse || null;
        this.FragmentPreDir = data.FragmentPreDir || null;
        this.FragmentStreet = data.FragmentStreet || null;
        this.FragmentSuffix = data.FragmentSuffix || null;
        this.FragmentPostDir = data.FragmentPostDir || null;
        this.FragmentUnit = data.FragmentUnit || null;
        this.FragmentUnitNumber = data.FragmentUnitNumber || null;
        this.Fragment = data.Fragment || null;
        this.FragmentPMBPrefix = data.FragmentPMBPrefix || null;
        this.FragmentPMBNumber = data.FragmentPMBNumber || null;
        this.Corrections = data.Corrections || null;
        this.CorrectionsDesc = data.CorrectionsDesc || null;
        this.AddressNotes = data.AddressNotes || null;
        this.AddressNotesCodes = data.AddressNotesCodes || null;
        this.GeocodeStatus = data.GeocodeStatus || null;
        this.LocationLatitude = data.LocationLatitude || null;
        this.LocationLongitude = data.LocationLongitude || null;
        this.CensusTract = data.CensusTract || null;
        this.CensusBlock = data.CensusBlock || null;
        this.PlaceName = data.PlaceName || null;
        this.ClassFP = data.ClassFP || null;
        this.SLDUST = data.SLDUST || null;
        this.SLDLST = data.SLDLST || null;
        this.CountyFIPS = data.CountyFIPS || null;
        this.StateFIPS = data.StateFIPS || null;
        this.GeocodeNotes = data.GeocodeNotes || null;
        this.GeocodeNotesCodes = data.GeocodeNotesCodes || null;
        this.ZipStatus = data.ZipStatus || null;
        this.ZipLatitude = data.ZipLatitude || null;
        this.ZipLongitude = data.ZipLongitude || null;
        this.CityType = data.CityType || null;
        this.CityAliasName = data.CityAliasName || null;
        this.AreaCode = data.AreaCode || null;
        this.TimeZone = data.TimeZone || null;
        this.DaylightSaving = data.DaylightSaving || null;
        this.MSA = data.MSA || null;
        this.CBSA = data.CBSA || null;
        this.CBSA_Div = data.CBSA_Div || null;
        this.PMSA = data.PMSA || null;
        this.DMA = data.DMA || null;
        this.ZipHouseholdValue = data.ZipHouseholdValue || null;
        this.ZipPersonsPerHousehold = data.ZipPersonsPerHousehold || null;
        this.ZipHouseholdIncome = data.ZipHouseholdIncome || null;
        this.CountyHouseholdIncome = data.CountyHouseholdIncome || null;
        this.StateHouseholdIncome = data.StateHouseholdIncome || null;
        this.ZipNotes = data.ZipNotes || null;
        this.ZipNotesCodes = data.ZipNotesCodes || null;
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