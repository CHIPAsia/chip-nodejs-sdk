<div align="center">
    <a href="https://nodejs.org">
        <img
            alt="NodeJS"
            src="https://en.wikipedia.org/wiki/Node.js#/media/File:Node.js_logo.svg"
            width="150"
            style="background-color:black;padding:15px;border-radius:5px">
    </a>
</div>

---

## Requirements
* It is required `Node` version >= 14
* `yarn` or `npm` to run scripts/install dependencies

## Prerequisite
You will need to replace the value on file [config.js](./config.js) with the configuration on your Developer section by logging-in to Merchant Portal with your account.

```javascript
// config.js
const config = {
  brandId: '<<BRAND_ID>>',
  apiKey: '<<API_KEY>>',
  endpoint: 'https://gate.chip-in.asia/api/v1',
  basedUrl: '<<DOMAIN_URL>>',
  webhookPublicKey: '<<WEBHOOK_PUBLIC_KEY>>'
}

module.exports = config
```

**BRAND_ID**

Obtain your BRAND_ID from Developer section.

---
**API_KEY**

Obtain your API_KEY from Developer section.

---

**WEBHOOK_PUBLIC_KEY**

Obtain your `WEBHOOK_PUBLIC_KEY` from Developer section. You can register the URL from [API](https://developer.chip-in.asia/api) or from Merchant Portal on Developer section.

---

**DOMAIN_URL**

It is your domain URL

## Run Example
1. Install dependencies:
```bash
npm i 

# OR

yarn
```

2. Run application locally:
```bash
node run start

# OR

yarn start
```

and visit [localhost:7001](http://localhost:7001) on your browser.
To test `/api/callback` & `/api/webhook` to be called from our server, make sure it is connected to internet (exposed to outside). 

We recommend to use [ngrok](https://ngrok.com/) if you want to run locally for debugging. Then You can replace `DOMAIN_URL` with generated URL by `ngrok`. 

`NB: Use it at your own risk. Make sure do not expose your critical port.`
