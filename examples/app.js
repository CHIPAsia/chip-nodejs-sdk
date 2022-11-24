const https = require('https')
// const bodyParser = require('body-parser') 

const express = require('express')
const fs = require('fs')
const Chip = require('Chip').default

const { brandId, apiKey, endpoint, basedUrl, webhookPublicKey } = require('./config')

const app = express()
const port = 7001

app.use(function(req, res, next) {
  req.rawBody = ''
  req.setEncoding('utf8')

  req.on('data', function(chunk) { 
    if (chunk) req.rawBody += chunk
  })

  req.on('end', function() {
    next()
  })
})

/**
 * IF YOU'RE USING PLUGIN: body-parse
 */
// app.use(bodyParser.json({
//   verify: (req, res, buf) => {
//     req.rawBody = buf
//   }
// }))

Chip.ApiClient.instance.basePath = endpoint
Chip.ApiClient.instance.token = apiKey

const apiInstance = new Chip.PaymentApi()

app.get('/', async (req, res) => {
  fs.readFile('./index.html', null, function (error, data) {
    if (error) {
        res.writeHead(404)
        respone.write('Whoops! File not found!')
    } else {
        res.write(data)
    }
    res.end()
  })
})

app.get('/payment_methods', async (req, res) => {
  apiInstance.paymentMethods(brandId, "MYR", {}, function(error, data, response) {
    if (error) {
      console.log('API call failed. Error:', error)
      res.end()
      return
    }
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(data))
  })
})

app.get('/create_purchase', async (req, res) => {
  const client = { email: 'test@test.com' }
  const product = { name: 'Test', price: 100 }
  const details = { products: [ product ] }
  const purchase = { 
    brand_id: brandId,
    client: client,
    purchase: details,
    success_redirect: `${basedUrl}/redirect.php?success=1`,
    failure_redirect: `${basedUrl}/redirect.php?success=0`,
    success_callback: `${basedUrl}/callback`
  }

  apiInstance.purchasesCreate(purchase, function(error, data, response) {
    if (error) {
      console.log('API call failed. Error:', error)
      res.end()
      return
    }
    res.writeHead(302, {
      Location: data.checkout_url
    }).end()
  })
})

app.post('/callback', async (req, res) => {
  const { rawBody, headers } = req
  const xsignature = headers['x-signature']
  const publicKey = JSON.parse(await getPublicKey())

  const verified = apiInstance.verify(rawBody, Buffer.from(xsignature, 'base64'), publicKey)
  console.log('/callback VERIFIED: ', verified)
  res.end()
})

app.post('/webhook/payment', async (req, res) => {
  const { rawBody, headers } = req
  const xsignature = headers['x-signature']
  const publicKey = webhookPublicKey

  const verified = apiInstance.verify(rawBody, Buffer.from(xsignature, 'base64'), publicKey)
  console.log('/webhook/payment VERIFIED: ', verified)
  res.end("WEBHOOK OK!")
})

app.get('/public_key', async (req, res) => {
  const data = await getPublicKey()
  res.end(data)
})

const getPublicKey = () => {
  return new Promise((resolve, reject) => {
    let data = ''
    https.get(`${endpoint}/public_key/`, 
      { headers: {
        'Authorization': `Bearer ${apiKey}` 
      },
    }, response => {
      response.on('data', chunk => {
        data = chunk.toString()
      })

      response.on('end', () => {
        resolve(data)
      })
    }).on('error', err => {
      console.log('Error: ', err.message)
      reject(err)
    })
  })
}

app.listen(port, () => {
  return console.log(
    `Express is listening at http://localhost:${port}`
  )
})
