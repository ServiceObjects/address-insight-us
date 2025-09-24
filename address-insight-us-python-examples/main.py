from get_address_insight_rest_sdk_example import get_address_insight_rest_sdk_go
from get_address_insight_soap_sdk_example import get_address_insight_soap_sdk_go

if __name__ =="__main__":

    # Your license key from Service Objects.  
    # Trial license keys will only work on the trial environments and production  
    # license keys will only work on production environments.
    #   
    license_key = "LICENSE KEY"
    is_live = True

    # Address Insight - US - GetAddressInsight - REST SDK
    get_address_insight_rest_sdk_go(is_live, license_key)

    # Address Insight - US - GetAddressInsight - SOAP SDK
    get_address_insight_soap_sdk_go(is_live, license_key)