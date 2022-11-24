"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PaymentMethods = _interopRequireDefault(require("../model/PaymentMethods"));
var _Purchase = _interopRequireDefault(require("../model/Purchase"));
var _crypto = _interopRequireDefault(require("crypto"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var PaymentApi = /*#__PURE__*/function () {
  function PaymentApi(apiClient) {
    _classCallCheck(this, PaymentApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Get the list of payment methods available for your Purchase.
   * Send this request providing, at the very least, the `brand_id` and `currency` query parameters having the same values you'd use to create your Purchase. Be sure to use the same API key you'll create your Purchase with; it will define the test_mode setting used in the lookup.  In the response body you'll receive an object with `available_payment_methods` property containing the list of payment method names available to use with your Purchase (e.g. those codes can be used in `payment_method_whitelist` field or with `?preferred={payment_method}` option of `checkout_url`).
   * @param {String} brandId Which brand would you like to lookup the available payment methods for. Use the same value (UUID) you'd set the `Purchase.brand_id` to.
   * @param {String} currency Currency you'd use in your Purchase in ISO 4217 format, e.g. `EUR`.
   * @param {Object} opts Optional parameters
   * @param {String} opts.country Country code in the ISO 3166-1 alpha-2 format (e.g. `GB`). Optional.
   * @param {Boolean} opts.recurring If provided in the format of `recurring=true`, will filter out the methods that don't support recurring charges (see `POST /purchases/{id}/charge/`).
   * @param {Boolean} opts.skipCapture If provided in the format of `skip_capture=true`, will filter out the methods that don't support `skip_capture` functionality (see the description for `Purchase.skip_capture field`).
   * @param {Boolean} opts.preauthorization If provided in the format of `preauthorization=true`, will filter out the methods that don't support preauthorization functionality (see the description for `Purchase.skip_capture field`).
   * @param {module:api/PaymentApi~paymentMethodsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaymentMethods}
   */
  _createClass(PaymentApi, [{
    key: "paymentMethods",
    value: function paymentMethods(brandId, currency, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'brandId' is set
      if (brandId === undefined || brandId === null) {
        throw new Error("Missing the required parameter 'brandId' when calling paymentMethods");
      }
      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling paymentMethods");
      }
      var pathParams = {};
      var queryParams = {
        'brand_id': brandId,
        'currency': currency,
        'country': opts['country'],
        'recurring': opts['recurring'],
        'skip_capture': opts['skipCapture'],
        'preauthorization': opts['preauthorization']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaymentMethods["default"];
      return this.apiClient.callApi('/payment_methods/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Cancel a pending Purchase
     * If you have a Purchase that payment is possible for, using this request you can guarantee that it won't be paid.
     * @param {String} id Object ID (UUID)
     * @param {module:api/PaymentApi~purchasesCancelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Purchase}
     */
  }, {
    key: "purchasesCancel",
    value: function purchasesCancel(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling purchasesCancel");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Purchase["default"];
      return this.apiClient.callApi('/purchases/{id}/cancel/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the purchasesCapture operation.
     * @callback module:api/PaymentApi~purchasesCaptureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Purchase} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Capture a previously authorized payment
     * Capture funds reserved for a Purchase (`status == hold`). You can place a `hold` (authenticate the payment) using `skip_capture == true` when creating the Purchase and ensuring your client submits the payment form.  If capture fails due to payment processing error, you will receive HTTP response code 400 with error code `purchase_capture_error`. In this case, to get more details about the error, you should perform a `GET /purchase/` request for the Purchase you tried to capture. In `transaction_data.attempts[]` array (newest element first) you'll find the corresponding attempt with error code and description in `.error` parameter. By default the full amount is captured, the `amount` body param is optional.
     * @param {String} id Object ID (UUID)
     * @param {number} amount Refund amount
     * @param {module:api/PaymentApi~purchasesCaptureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Purchase}
     */
  }, {
    key: "purchasesCapture",
    value: function purchasesCapture(id, amount, callback) {
      var postBody = {};
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling purchasesCapture");
      }
      if (amount !== undefined && amount !== null) {
        postBody['amount'] = amount;
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Purchase["default"];
      return this.apiClient.callApi('/purchases/{id}/capture/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the purchasesCharge operation.
     * @callback module:api/PaymentApi~purchasesChargeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Purchase} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Charge a Purchase using a saved token
     * Charge a purchase using a `recurring_token` provided in the request body. Its value should be an `id` of a Purchase that has `is_recurring_token == true`. This purchase will be paid using the same method (e.g. same card) as the one used to pay the `recurring_token` purchase.  If recurring charge fails due to payment processing error, you will receive HTTP response code 400 with error code `purchase_charge_error`. In this case, to get more details about the error, you should perform a `GET /purchase/` request for the Purchase you tried to charge. In `transaction_data.attempts[]` array (newest element first) you'll find the corresponding attempt with error code and description in `.error` parameter.
     * @param {String} id Object ID (UUID)
     * @param {Stringe} recurringToken Recurring token (UUID)
     * @param {module:api/PaymentApi~purchasesChargeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Purchase}
     */
  }, {
    key: "purchasesCharge",
    value: function purchasesCharge(id, recurringToken, callback) {
      var postBody = {
        recurring_token: recurringToken
      };
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling purchasesCharge");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Purchase["default"];
      return this.apiClient.callApi('/purchases/{id}/charge/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the purchasesCreate operation.
     * @callback module:api/PaymentApi~purchasesCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Purchase} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Purchase. The main request for any e-commerce integration.
     * To run payments in your application use `POST /purchases/`, request to register payments and receive the checkout link (`checkout_url`). After the payment is processed, gateway will redirect the client back to your website (take note of `success_redirect`, `failure_redirect`).  You have three options to check payment status: 1) use `success_callback` parameter of `Purchase` object; 2) use `GET /purchases/<purchase_id>/` request; 3) set up a Webhook using the UI or Webhook API to listen to `purchase.paid` or `purchase.payment_failure` event on your server.  Using `skip_capture` flag allows you to separate the authentication and payment execution steps, allowing you to reserve funds on payer’s card account for some time. This flag can also enable preauthorization capability, allowing you to save the card without a financial transaction, if available.  In case making a purchase client agrees to store his card for the upcoming purchases, next time he will be able to pay in a single click.  Instead of a redirect you can also utilize Direct Post checkout: you can create an HTML `<form>` on your website with `method=\"POST\"` and `action` pointing to `direct_post_url` of a created Purchase. You will also need to saturate form with `<input>`-s for card data fields. As a result, when a payer submits their card data, it will be posted straight to our system, allowing you to customize the checkout as you wish while your PCI DSS requirement is only raised to SAQ A-EP, as your system doesn't receive or process card data. For more details, see the documentation on Purchase's `direct_post_url` field.  To pay for test Purchases, use `4444 3333 2222 1111` as the card number, `123` as CVC, any date/month greater than now as expiry and any (Latin) cardholder name. Any other card number/CVC/expiry not greater or equal than the current month will all fail a test payment.
     * @param {module:model/Purchase} purchase 
     * @param {module:api/PaymentApi~purchasesCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Purchase}
     */
  }, {
    key: "purchasesCreate",
    value: function purchasesCreate(purchase, callback) {
      var postBody = purchase;
      // verify the required parameter 'purchase' is set
      if (purchase === undefined || purchase === null) {
        throw new Error("Missing the required parameter 'purchase' when calling purchasesCreate");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Purchase["default"];
      return this.apiClient.callApi('/purchases/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the purchasesDeleteRecurringToken operation.
     * @callback module:api/PaymentApi~purchasesDeleteRecurringTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Purchase} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a recurring token associated with a Purchase
     * Will set `is_recurring_token` to `false`. You won't be able to use this Purchase's ID as a `recurring_token` anymore. The respective ClientRecurringToken, if any, will also be deleted.
     * @param {String} id Object ID (UUID)
     * @param {module:api/PaymentApi~purchasesDeleteRecurringTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Purchase}
     */
  }, {
    key: "purchasesDeleteRecurringToken",
    value: function purchasesDeleteRecurringToken(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling purchasesDeleteRecurringToken");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Purchase["default"];
      return this.apiClient.callApi('/purchases/{id}/delete_recurring_token/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the purchasesRead operation.
     * @callback module:api/PaymentApi~purchasesReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Purchase} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an object by id
     * @param {String} id Object ID (UUID)
     * @param {module:api/PaymentApi~purchasesReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Purchase}
     */
  }, {
    key: "purchasesRead",
    value: function purchasesRead(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling purchasesRead");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Purchase["default"];
      return this.apiClient.callApi('/purchases/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the purchasesRefund operation.
     * @callback module:api/PaymentApi~purchasesRefundCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Payment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Refund a paid purchase
     * Will generate a Payment object and return it as a successful response.   Optional `amount` argument can be included in the request body to request a partial refund.  Consult `refund_availability` field on Purchase on details whether this Purchase can be refunded or not.  If refund fails due to payment processing error, you will receive HTTP response code 400 with error code `purchase_refund_error`. In this case, to get more details about the error, you should perform a `GET /purchase/` request for the Purchase you tried to refund. In `transaction_data.attempts[]` array (newest element first) you'll find the corresponding attempt with error code and description in `.error` parameter.
     * @param {String} id Object ID (UUID)
     * @param {number} amount Refund amount
     * @param {module:api/PaymentApi~purchasesRefundCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Payment}
     */
  }, {
    key: "purchasesRefund",
    value: function purchasesRefund(id, amount, callback) {
      var postBody = {};
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling purchasesRefund");
      }
      if (amount !== undefined && amount !== null) {
        postBody['amount'] = amount;
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Purchase["default"];
      return this.apiClient.callApi('/purchases/{id}/refund/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the purchasesRelease operation.
     * @callback module:api/PaymentApi~purchasesReleaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Purchase} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Release funds on hold
     * Release funds reserved for a Purchase (`status == hold`). You can place a `hold` (authenticate the payment) using `skip_capture == true` when creating the Purchase and ensuring your client submits the payment form.  If fund release fails due to payment processing error, you will receive HTTP response code 400 with error code `purchase_release_error`. In this case, to get more details about the error, you should perform a `GET /purchase/` request for the Purchase you tried to release funds for. In `transaction_data.attempts[]` array (newest element first) you'll find the corresponding attempt with error code and description in `.error` parameter.
     * @param {String} id Object ID (UUID)
     * @param {module:api/PaymentApi~purchasesReleaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Purchase}
     */
  }, {
    key: "purchasesRelease",
    value: function purchasesRelease(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling purchasesRelease");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Purchase["default"];
      return this.apiClient.callApi('/purchases/{id}/release/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }, {
    key: "verify",
    value: function verify(content, signature, publicKey) {
      var verifier = _crypto["default"].createVerify('sha256WithRSAEncryption');
      verifier.update(content);
      return verifier.verify(publicKey, signature);
    }
  }]);
  return PaymentApi;
}();
exports["default"] = PaymentApi;