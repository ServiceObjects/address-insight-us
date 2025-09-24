using address_insight_us_dot_net_examples;

//Your license key from Service Objects.
//Trial license keys will only work on the
//trail environments and production license
//keys will only work on production environments.
string LicenseKey = "LICENSE KEY";

bool IsProductionKey = false;

// Address Insight – US - GetAddressInsight - REST SDK
GetAddressInsightRestSdkExample.Go(LicenseKey, IsProductionKey);

// Address Insight – US - GetAddressInsight - SOAP SDK
GetAddressInsightSoapSdkExample.Go(LicenseKey, IsProductionKey);
