# Payment library #

## Installing ##

## npm ##

```bash
npm install git+ssh://git@github.com/CHIPAsia/chip-nodejs-sdk.git#v1.0.0
```

## Getting Started ##

Simple usage looks like:


```javascript
var PublicRestApi = require('Chip').default;

PublicRestApi.ApiClient.instance.basePath = "https://gate.chip-in.asia/api/v1/";
PublicRestApi.ApiClient.instance.token = "TOKEN"

let apiInstance = new PublicRestApi.PaymentApi();
let brandId = "BRAND_ID";
let callback = (error, data, response) => {
  if (error) {
    console.log('API call failed. Error:');
    console.error(error);
  } else {
    console.log('API called successfully. Returned data:');
    console.log(data);
  }
}

apiInstance.paymentMethods(brandId, "EUR", {}, callback);
```

## Examples ##

See `example.js` for more examples

## Testing ##

```bash
npm run test
```