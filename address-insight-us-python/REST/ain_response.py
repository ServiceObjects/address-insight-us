
from dataclasses import dataclass
from typing import Optional, List

@dataclass
class Error:
    Type: Optional[str] = None
    TypeCode: Optional[str] = None
    Desc: Optional[str] = None
    DescCode: Optional[str] = None

    def __str__(self) -> str:
        return f"Error: Type={self.Type}, TypeCode={self.TypeCode}, Desc={self.Desc}, DescCode={self.DescCode}"

@dataclass
class AINResponse:
    Status: Optional[str] = None
    StatusScore: Optional[str] = None
    AddressStatus: Optional[str] = None
    DPV: Optional[str] = None
    DPVDesc: Optional[str] = None
    Address: Optional[str] = None
    AddressExtra: Optional[str] = None
    City: Optional[str] = None
    State: Optional[str] = None
    Zip: Optional[str] = None
    BarcodeDigits: Optional[str] = None
    CarrierRoute: Optional[str] = None
    CongressCode: Optional[str] = None
    CountyCode: Optional[str] = None
    CountyName: Optional[str] = None
    FragmentHouse: Optional[str] = None
    FragmentPreDir: Optional[str] = None
    FragmentStreet: Optional[str] = None
    FragmentSuffix: Optional[str] = None
    FragmentPostDir: Optional[str] = None
    FragmentUnit: Optional[str] = None
    FragmentUnitNumber: Optional[str] = None
    Fragment: Optional[str] = None
    FragmentPMBPrefix: Optional[str] = None
    FragmentPMBNumber: Optional[str] = None
    Corrections: Optional[str] = None
    CorrectionsDesc: Optional[str] = None
    AddressNotes: Optional[str] = None
    AddressNotesCodes: Optional[str] = None
    GeocodeStatus: Optional[str] = None
    LocationLatitude: Optional[str] = None
    LocationLongitude: Optional[str] = None
    CensusTract: Optional[str] = None
    CensusBlock: Optional[str] = None
    PlaceName: Optional[str] = None
    ClassFP: Optional[str] = None
    SLDUST: Optional[str] = None
    SLDLST: Optional[str] = None
    CountyFIPS: Optional[str] = None
    StateFIPS: Optional[str] = None
    GeocodeNotes: Optional[str] = None
    GeocodeNotesCodes: Optional[str] = None
    ZipStatus: Optional[str] = None
    ZipLatitude: Optional[str] = None
    ZipLongitude: Optional[str] = None
    CityType: Optional[str] = None
    CityAliasName: Optional[str] = None
    AreaCode: Optional[str] = None
    TimeZone: Optional[str] = None
    DaylightSaving: Optional[str] = None
    MSA: Optional[str] = None
    CBSA: Optional[str] = None
    CBSA_Div: Optional[str] = None
    PMSA: Optional[str] = None
    DMA: Optional[str] = None
    ZipHouseholdValue: Optional[str] = None
    ZipPersonsPerHousehold: Optional[str] = None
    ZipHouseholdIncome: Optional[str] = None
    CountyHouseholdIncome: Optional[str] = None
    StateHouseholdIncome: Optional[str] = None
    ZipNotes: Optional[str] = None
    ZipNotesCodes: Optional[str] = None
    Debug: Optional[List[str]] = None
    Error: Optional['Error'] = None

    def __post_init__(self):
        if self.Debug is None:
            self.Debug = []

    def __str__(self) -> str:
        debug_string = ', '.join(self.Debug) if self.Debug else 'None'
        error = str(self.Error) if self.Error else 'None'
        return (f"AINResponse: Status={self.Status}, StatusScore={self.StatusScore}, AddressStatus={self.AddressStatus}, "
                f"DPV={self.DPV}, DPVDesc={self.DPVDesc}, Address={self.Address}, AddressExtra={self.AddressExtra}, "
                f"City={self.City}, State={self.State}, Zip={self.Zip}, BarcodeDigits={self.BarcodeDigits}, "
                f"CarrierRoute={self.CarrierRoute}, CongressCode={self.CongressCode}, CountyCode={self.CountyCode}, "
                f"CountyName={self.CountyName}, FragmentHouse={self.FragmentHouse}, FragmentPreDir={self.FragmentPreDir}, "
                f"FragmentStreet={self.FragmentStreet}, FragmentSuffix={self.FragmentSuffix}, FragmentPostDir={self.FragmentPostDir}, "
                f"FragmentUnit={self.FragmentUnit}, FragmentUnitNumber={self.FragmentUnitNumber}, Fragment={self.Fragment}, "
                f"FragmentPMBPrefix={self.FragmentPMBPrefix}, FragmentPMBNumber={self.FragmentPMBNumber}, "
                f"Corrections={self.Corrections}, CorrectionsDesc={self.CorrectionsDesc}, AddressNotes={self.AddressNotes}, "
                f"AddressNotesCodes={self.AddressNotesCodes}, GeocodeStatus={self.GeocodeStatus}, LocationLatitude={self.LocationLatitude}, "
                f"LocationLongitude={self.LocationLongitude}, CensusTract={self.CensusTract}, CensusBlock={self.CensusBlock}, "
                f"PlaceName={self.PlaceName}, ClassFP={self.ClassFP}, SLDUST={self.SLDUST}, SLDLST={self.SLDLST}, "
                f"CountyFIPS={self.CountyFIPS}, StateFIPS={self.StateFIPS}, GeocodeNotes={self.GeocodeNotes}, "
                f"GeocodeNotesCodes={self.GeocodeNotesCodes}, ZipStatus={self.ZipStatus}, ZipLatitude={self.ZipLatitude}, "
                f"ZipLongitude={self.ZipLongitude}, CityType={self.CityType}, CityAliasName={self.CityAliasName}, "
                f"AreaCode={self.AreaCode}, TimeZone={self.TimeZone}, DaylightSaving={self.DaylightSaving}, "
                f"MSA={self.MSA}, CBSA={self.CBSA}, CBSA_Div={self.CBSA_Div}, PMSA={self.PMSA}, DMA={self.DMA}, "
                f"ZipHouseholdValue={self.ZipHouseholdValue}, ZipPersonsPerHousehold={self.ZipPersonsPerHousehold}, "
                f"ZipHouseholdIncome={self.ZipHouseholdIncome}, CountyHouseholdIncome={self.CountyHouseholdIncome}, "
                f"StateHouseholdIncome={self.StateHouseholdIncome}, ZipNotes={self.ZipNotes}, ZipNotesCodes={self.ZipNotesCodes}, "
                f"Debug=[{debug_string}], Error={error}")