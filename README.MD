# Chip NodeJS library

## Prerequisite
Before you start, make sure you already have created `Brand ID` and `API Key` from your developer dashboard by logging-in into [merchant portal](https://gate.chip-in.asia/login).

## Installation

### npm
```bash
npm install git+ssh://git@github.com/CHIPAsia/chip-nodejs-sdk.git#v1.0.0
```

### yarn
```bash
yarn add git+ssh://git@github.com/CHIPAsia/chip-nodejs-sdk.git#v1.0.0
```

## Getting Started

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

## Testing

```bash
npm run test
```

## Example
Check our examples [here](./examples).