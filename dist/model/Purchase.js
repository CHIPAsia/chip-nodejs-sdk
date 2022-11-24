"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _BaseModel = _interopRequireDefault(require("./BaseModel"));
var _ClientDetails = _interopRequireDefault(require("./ClientDetails"));
var _IssuerDetails = _interopRequireDefault(require("./IssuerDetails"));
var _PaymentDetails = _interopRequireDefault(require("./PaymentDetails"));
var _PurchaseDetails = _interopRequireDefault(require("./PurchaseDetails"));
var _PurchaseStatus = _interopRequireDefault(require("./PurchaseStatus"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Purchase model module.
 * @module model/Purchase
 * @version v1
 */
var Purchase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Purchase</code>.
   * Record of a single purchase operation, either a transaction originating from e-commerce integration or invoice sent. Has a status attribute, e.g. can be &#x60;created&#x60;, &#x60;paid&#x60; or &#x60;refunded&#x60;.
   * @alias module:model/Purchase
   * @extends module:model/BaseModel
   * @implements module:model/BaseModel
   */
  function Purchase() {
    _classCallCheck(this, Purchase);
    _BaseModel["default"].initialize(this);
    Purchase.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Purchase, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Purchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Purchase} obj Optional instance to populate.
     * @return {module:model/Purchase} The populated <code>Purchase</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Purchase();
        _BaseModel["default"].constructFromObject(data, obj);
        _BaseModel["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('client')) {
          obj['client'] = _ApiClient["default"].convertToType(data['client'], _ClientDetails["default"]);
        }
        if (data.hasOwnProperty('purchase')) {
          obj['purchase'] = _PurchaseDetails["default"].constructFromObject(data['purchase']);
        }
        if (data.hasOwnProperty('payment')) {
          obj['payment'] = _ApiClient["default"].convertToType(data['payment'], _PaymentDetails["default"]);
        }
        if (data.hasOwnProperty('issuer_details')) {
          obj['issuer_details'] = _ApiClient["default"].convertToType(data['issuer_details'], _IssuerDetails["default"]);
        }
        if (data.hasOwnProperty('transaction_data')) {
          obj['transaction_data'] = _ApiClient["default"].convertToType(data['transaction_data'], Object);
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _PurchaseStatus["default"].constructFromObject(data['status']);
        }
        if (data.hasOwnProperty('status_history')) {
          obj['status_history'] = _ApiClient["default"].convertToType(data['status_history'], [Object]);
        }
        if (data.hasOwnProperty('viewed_on')) {
          obj['viewed_on'] = _ApiClient["default"].convertToType(data['viewed_on'], 'Number');
        }
        if (data.hasOwnProperty('company_id')) {
          obj['company_id'] = _ApiClient["default"].convertToType(data['company_id'], 'String');
        }
        if (data.hasOwnProperty('is_test')) {
          obj['is_test'] = _ApiClient["default"].convertToType(data['is_test'], 'Boolean');
        }
        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }
        if (data.hasOwnProperty('brand_id')) {
          obj['brand_id'] = _ApiClient["default"].convertToType(data['brand_id'], 'String');
        }
        if (data.hasOwnProperty('billing_template_id')) {
          obj['billing_template_id'] = _ApiClient["default"].convertToType(data['billing_template_id'], 'String');
        }
        if (data.hasOwnProperty('client_id')) {
          obj['client_id'] = _ApiClient["default"].convertToType(data['client_id'], 'String');
        }
        if (data.hasOwnProperty('send_receipt')) {
          obj['send_receipt'] = _ApiClient["default"].convertToType(data['send_receipt'], 'Boolean');
        }
        if (data.hasOwnProperty('is_recurring_token')) {
          obj['is_recurring_token'] = _ApiClient["default"].convertToType(data['is_recurring_token'], 'Boolean');
        }
        if (data.hasOwnProperty('recurring_token')) {
          obj['recurring_token'] = _ApiClient["default"].convertToType(data['recurring_token'], 'String');
        }
        if (data.hasOwnProperty('skip_capture')) {
          obj['skip_capture'] = _ApiClient["default"].convertToType(data['skip_capture'], 'Boolean');
        }
        if (data.hasOwnProperty('force_recurring')) {
          obj['force_recurring'] = _ApiClient["default"].convertToType(data['force_recurring'], 'Boolean');
        }
        if (data.hasOwnProperty('reference_generated')) {
          obj['reference_generated'] = _ApiClient["default"].convertToType(data['reference_generated'], 'String');
        }
        if (data.hasOwnProperty('reference')) {
          obj['reference'] = _ApiClient["default"].convertToType(data['reference'], 'String');
        }
        if (data.hasOwnProperty('issued')) {
          obj['issued'] = _ApiClient["default"].convertToType(data['issued'], 'String');
        }
        if (data.hasOwnProperty('due')) {
          obj['due'] = _ApiClient["default"].convertToType(data['due'], 'Number');
        }
        if (data.hasOwnProperty('refund_availability')) {
          obj['refund_availability'] = _ApiClient["default"].convertToType(data['refund_availability'], 'String');
        }
        if (data.hasOwnProperty('refundable_amount')) {
          obj['refundable_amount'] = _ApiClient["default"].convertToType(data['refundable_amount'], 'Number');
        }
        if (data.hasOwnProperty('currency_conversion')) {
          obj['currency_conversion'] = _ApiClient["default"].convertToType(data['currency_conversion'], Object);
        }
        if (data.hasOwnProperty('payment_method_whitelist')) {
          obj['payment_method_whitelist'] = _ApiClient["default"].convertToType(data['payment_method_whitelist'], ['String']);
        }
        if (data.hasOwnProperty('success_redirect')) {
          obj['success_redirect'] = _ApiClient["default"].convertToType(data['success_redirect'], 'String');
        }
        if (data.hasOwnProperty('failure_redirect')) {
          obj['failure_redirect'] = _ApiClient["default"].convertToType(data['failure_redirect'], 'String');
        }
        if (data.hasOwnProperty('cancel_redirect')) {
          obj['cancel_redirect'] = _ApiClient["default"].convertToType(data['cancel_redirect'], 'String');
        }
        if (data.hasOwnProperty('success_callback')) {
          obj['success_callback'] = _ApiClient["default"].convertToType(data['success_callback'], 'String');
        }
        if (data.hasOwnProperty('creator_agent')) {
          obj['creator_agent'] = _ApiClient["default"].convertToType(data['creator_agent'], 'String');
        }
        if (data.hasOwnProperty('platform')) {
          obj['platform'] = _ApiClient["default"].convertToType(data['platform'], 'String');
        }
        if (data.hasOwnProperty('product')) {
          obj['product'] = _ApiClient["default"].convertToType(data['product'], 'String');
        }
        if (data.hasOwnProperty('created_from_ip')) {
          obj['created_from_ip'] = _ApiClient["default"].convertToType(data['created_from_ip'], 'String');
        }
        if (data.hasOwnProperty('invoice_url')) {
          obj['invoice_url'] = _ApiClient["default"].convertToType(data['invoice_url'], 'String');
        }
        if (data.hasOwnProperty('checkout_url')) {
          obj['checkout_url'] = _ApiClient["default"].convertToType(data['checkout_url'], 'String');
        }
        if (data.hasOwnProperty('direct_post_url')) {
          obj['direct_post_url'] = _ApiClient["default"].convertToType(data['direct_post_url'], 'String');
        }
      }
      return obj;
    }
  }]);
  return Purchase;
}();
/**
 * Either this or `.client_id` is required.
 * @member {module:model/ClientDetails} client
 */
Purchase.prototype['client'] = undefined;

/**
 * @member {module:model/PurchaseDetails} purchase
 */
Purchase.prototype['purchase'] = undefined;

/**
 * @member {module:model/PaymentDetails} payment
 */
Purchase.prototype['payment'] = undefined;

/**
 * @member {module:model/IssuerDetails} issuer_details
 */
Purchase.prototype['issuer_details'] = undefined;

/**
 * Payment method-specific, read-only transaction data. Will contain information about all the transaction attempts and possible errors, if available.
 * @member {Object} transaction_data
 */
Purchase.prototype['transaction_data'] = undefined;

/**
 * @member {module:model/PurchaseStatus} status
 */
Purchase.prototype['status'] = undefined;

/**
 * History of status changes, latest last. Might contain entry about a related object, e.g. status change to `refunded` will contain a reference to the refund Payment.
 * @member {Array.<Object>} status_history
 */
Purchase.prototype['status_history'] = undefined;

/**
 * Time the payment form or invoice page was first viewed on
 * @member {Number} viewed_on
 */
Purchase.prototype['viewed_on'] = undefined;

/**
 * @member {String} company_id
 */
Purchase.prototype['company_id'] = undefined;

/**
 * Indicates this is a test object, created using test API keys or using Billing section of UI while in test mode.
 * @member {Boolean} is_test
 */
Purchase.prototype['is_test'] = undefined;

/**
 * ID of user who has created this object in the Billing UI, if applicable.
 * @member {String} user_id
 */
Purchase.prototype['user_id'] = undefined;

/**
 * ID of the brand to create this Purchase for. You can copy it down in the API section, see the \"specify the ID of the Brand\" link in answer to \"How to setup payments on website or in mobile app?\".
 * @member {String} brand_id
 */
Purchase.prototype['brand_id'] = undefined;

/**
 * ID of a BillingTemplate that has spawned this Purchase, if any.
 * @member {String} billing_template_id
 */
Purchase.prototype['billing_template_id'] = undefined;

/**
 * ID of a Client object used to initialize ClientDetails (`.client`) of this Purchase. Either this field or specifying `.client` object is required (you can only specify a value for one of these fields). All `ClientDetails` fields from the Client will be copied to `.client` object. Note that editing Client object won't change the respective fields in already created Purchases.   If you specify this field and your client saves a `recurring_token` (for instance, by saving their card), the respective ClientRecurringToken will be created. See the `/clients/{id}/recurring_tokens/` endpoint.
 * @member {String} client_id
 */
Purchase.prototype['client_id'] = undefined;

/**
 * Whether to send receipt email for this Purchase when it's paid.
 * @member {Boolean} send_receipt
 * @default false
 */
Purchase.prototype['send_receipt'] = false;

/**
 * Indicates whether a recurring token (e.g. for card payments - card token) was saved for this Purchase. If this is `true`, the `id` of this Purchase can be used as a `recurring_token` in `POST /purchases/{id}/charge/`, enabling you to pay for that Purchase using the same method (same card for card payments) that this one was paid with.
 * @member {Boolean} is_recurring_token
 */
Purchase.prototype['is_recurring_token'] = undefined;

/**
 * ID of a recurring token (Purchase having `is_recurring_token == true`) that was used to pay this Purchase, if any.
 * @member {String} recurring_token
 */
Purchase.prototype['recurring_token'] = undefined;

/**
 * Card payment-specific: if set to true, only authorize the payment (place funds on hold) when payer enters his card data and pays. This option requires a `POST /capture/` or `POST /release/` later on.   You can use the preauthorization feature if you set this parameter to true and make the Purchase with `purchase.total == 0` (this can be achieved by providing a list of `purchase.products` with a total `price` of 0, or simply overriding the total using `purchase.total_override` to 0). The resulting Purchase can only be \"paid\" by the client (only cardholder data verification will happen, without a financial transaction) by card and will enforce saving the client's card. When this happens, the Purchase will have `status` of `preauthorized` and the `purchase.preauthorized` webhook callbacks will be emitted.   Trying to use skip_capture (or preauthorization) without any payment methods that support the respective actions (this can be a result of `payment_method_whitelist` field being used) will result in an error on Purchase creation request step. Please check the `GET /payment_methods/` response for your desired Purchase parameters and/or consult with your account manager.
 * @member {Boolean} skip_capture
 * @default false
 */
Purchase.prototype['skip_capture'] = false;

/**
 * If the used payment method supports recurring payment functionality, forces the customer's payment credentials to be saved for possible later recurring payments, without giving the customer a choice in the matter.
 * @member {Boolean} force_recurring
 * @default false
 */
Purchase.prototype['force_recurring'] = false;

/**
 * If you don't provide an invoice `reference` yourself, this autogenerated value will be used as a reference instead.
 * @member {String} reference_generated
 */
Purchase.prototype['reference_generated'] = undefined;

/**
 * Invoice reference.
 * @member {String} reference
 */
Purchase.prototype['reference'] = undefined;

/**
 * Value for 'Invoice issued' field. Display-only, does not get validated. If not provided, will be generated as the current date in `purchase.timezone` at the moment of Purchase's creation.
 * @member {String} issued
 */
Purchase.prototype['issued'] = undefined;

/**
 * When the payment is due for this Purchase. The default behaviour is to still allow payment once this moment passes. To change that, set `purchase.due_strict` to true.
 * @member {Number} due
 */
Purchase.prototype['due'] = undefined;

/**
 * Specifies, if the purchase can be refunded fully and partially, only fully, partially or not at all.
 * @member {module:model/Purchase.RefundAvailabilityEnum} refund_availability
 */
Purchase.prototype['refund_availability'] = undefined;

/**
 * @member {Number} refundable_amount
 */
Purchase.prototype['refundable_amount'] = undefined;

/**
 * This object is present when automatic currency conversion has occurred upon creation of the purchase. Purchase's original currency was changed and its original amount was converted using the exchange rate shown here.
 * @member {Object} currency_conversion
 */
Purchase.prototype['currency_conversion'] = undefined;

/**
 * An optional whitelist of payment methods availble for this purchase. Use this field if you want to restrict your payer to pay using only one or several specific methods.   Using this field and at the same time trying to use specific capabilities of a Purchase (e.g. `skip_capture` or charging it using a saved card token using `POST /purchases/{id}/charge/`) can cause a situation when there are no payment methods available for paying this Purchase. This will cause a validation error on Purchase creation. Please check the `GET /payment_methods/` response for your desired Purchase parameters and/or consult with your account manager.
 * @member {Array.<String>} payment_method_whitelist
 */
Purchase.prototype['payment_method_whitelist'] = undefined;

/**
 * When Purchase is paid for successfully, your customer will be taken to this link. Otherwise a standard screen will be displayed.
 * @member {String} success_redirect
 */
Purchase.prototype['success_redirect'] = undefined;

/**
 * If there's a payment failure for this Purchase, your customer will be taken to this link. Otherwise a standard screen will be displayed.
 * @member {String} failure_redirect
 */
Purchase.prototype['failure_redirect'] = undefined;

/**
 * If you provide this link, customer will have an option to go to it instead of making payment (a button with 'Return to seller' text will be displayed). Can't contain any of the following symbols: `<>'\"` .  Be aware that this does not cancel the payment (e.g. does not do the equivalent of doing the `POST /purchases/{id}/cancel/` request); the client will still be able to press 'Back' in the browser and perform the payment.
 * @member {String} cancel_redirect
 */
Purchase.prototype['cancel_redirect'] = undefined;

/**
 * When Purchase is paid for successfully, the `success_callback` URL will receive a POST request with the Purchase object's data in body.
 * @member {String} success_callback
 */
Purchase.prototype['success_callback'] = undefined;

/**
 * Identification of software (e.g. an ecommerce module and version) used to create this purchase, if any.
 * @member {String} creator_agent
 */
Purchase.prototype['creator_agent'] = undefined;

/**
 * Platform this Purchase was created on.
 * @member {module:model/Purchase.PlatformEnum} platform
 */
Purchase.prototype['platform'] = undefined;

/**
 * Defines which gateway product was used to create this Purchase.
 * @member {module:model/Purchase.ProductEnum} product
 */
Purchase.prototype['product'] = undefined;

/**
 * IP the Purchase was created from.
 * @member {String} created_from_ip
 */
Purchase.prototype['created_from_ip'] = undefined;

/**
 * URL you will be able to access invoice for this Purchase at, if applicable
 * @member {String} invoice_url
 */
Purchase.prototype['invoice_url'] = undefined;

/**
 * URL you will be able to access the checkout for this Purchase at, if payment for it is possible. When building integrations, redirect the customer to this URL once purchase is created.   You can add the `preferred` query arg to the `checkout_url` in order to force redirect the client straight to the checkout for a specific payment method (`?preferred={payment_method}`, where `{payment_method}` is the payment method name as returned by `GET /payment_methods/`). If this method redirects the client further to a different system and no customer data entry is needed on gateway's checkout page, your payer will be taken straight to that page (not seeing the gateway's checkout UI); otherwise, he will see the payment method entry UI on the gateway checkout page.
 * @member {String} checkout_url
 */
Purchase.prototype['checkout_url'] = undefined;

/**
 * URL that can be used for Direct Post integration.   This functionality is activated for each merchant account individually. Please consult with your account manager if you wish to use it.   Will be null if payment for purchase is not possible, `purchase.request_client_details` isn't empty or success_redirect/failure_redirect are not provided - these all break the usual direct post flow.  To leverage Direct Post checkout, create a `<form>` having `method=\"POST\" action=\"<direct_post_url value>\"` and include the following inputs:  `cardholder_name: text, Latin letters only (space and apostrophe (`'`), dot (`.`), dash (`-`) symbols are also allowed), max 40 chars`  ---  `card_number: text, digits only, no whitespace, max 19 chars`  ---  `expires: text in 'MM/YY' format, digits and a slash only /^\\d{2}/\\d{2}$/, max 5 chars`  ---  `cvc: number (integer) in [100: 9999] range`  ---  `remember_card: checkbox with value=\"on\" (the default when omitting value attribute of a checkbox input)`  Ensure the validation as listed above! Validation errors will be treated as payment failures. Obviously, you can style this form to fit in with the rest of your website.  When your payer submits this form (don't forget a `<button>` or `<input type=\"submit\">`), he will POST the data directly to the gateway system. There, with minimal interaction with gateway's interface, payment will be processed. In the process, your customer might get redirected to authenticate against 3D Secure system of his card issuer bank (this depends on settings of his card and your account). After that, payer will be taken to `success_redirect` or `failure_redirect` depending on the payment result (as in the usual payment flow).  Be aware, though, that while not having to process card data allows you not to comply with the entirety of PCI DSS SAQ D requirements, having sensitive cardholder data entry form on your website does raise your PCI DSS scope to SAQ A-EP. Contact your account manager to receive advisory and assistance for this integration method.
 * @member {String} direct_post_url
 */
Purchase.prototype['direct_post_url'] = undefined;

// Implement BaseModel interface:
/**
 * Object type identifier
 * @member {String} type
 */
_BaseModel["default"].prototype['type'] = undefined;
/**
 * @member {String} id
 */
_BaseModel["default"].prototype['id'] = undefined;
/**
 * Object creation time
 * @member {Number} created_on
 */
_BaseModel["default"].prototype['created_on'] = undefined;
/**
 * Object last modification time
 * @member {Number} updated_on
 */
_BaseModel["default"].prototype['updated_on'] = undefined;

/**
 * Allowed values for the <code>refund_availability</code> property.
 * @enum {String}
 * @readonly
 */
Purchase['RefundAvailabilityEnum'] = {
  /**
   * value: "all"
   * @const
   */
  "all": "all",
  /**
   * value: "full_only"
   * @const
   */
  "full_only": "full_only",
  /**
   * value: "partial_only"
   * @const
   */
  "partial_only": "partial_only",
  /**
   * value: "none"
   * @const
   */
  "none": "none"
};

/**
 * Allowed values for the <code>platform</code> property.
 * @enum {String}
 * @readonly
 */
Purchase['PlatformEnum'] = {
  /**
   * value: "web"
   * @const
   */
  "web": "web",
  /**
   * value: "api"
   * @const
   */
  "api": "api",
  /**
   * value: "ios"
   * @const
   */
  "ios": "ios",
  /**
   * value: "android"
   * @const
   */
  "android": "android",
  /**
   * value: "macos"
   * @const
   */
  "macos": "macos",
  /**
   * value: "windows"
   * @const
   */
  "windows": "windows"
};

/**
 * Allowed values for the <code>product</code> property.
 * @enum {String}
 * @readonly
 */
Purchase['ProductEnum'] = {
  /**
   * value: "purchases"
   * @const
   */
  "purchases": "purchases",
  /**
   * value: "billing_invoices"
   * @const
   */
  "billing_invoices": "billing_invoices",
  /**
   * value: "billing_subscriptions"
   * @const
   */
  "billing_subscriptions": "billing_subscriptions",
  /**
   * value: "billing_subscriptions_invoice"
   * @const
   */
  "billing_subscriptions_invoice": "billing_subscriptions_invoice"
};
var _default = Purchase;
exports["default"] = _default;