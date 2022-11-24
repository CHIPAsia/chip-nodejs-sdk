"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Product = _interopRequireDefault(require("./Product"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PurchaseDetails model module.
 * @module model/PurchaseDetails
 * @version v1
 */
var PurchaseDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PurchaseDetails</code>.
   * Core information about the Purchase, including the products, total, currency and invoice fields. If you&#39;re using invoicing via &#x60;/billing/&#x60; or &#x60;/billing_templates/&#x60;, this object will be copied 1:1 from BillingTemplate you specify to the resulting Purchases (also to subscription Purchases).
   * @alias module:model/PurchaseDetails
   * @param products {Array.<module:model/Product>} Line items of the invoice. In case of a transaction with no invoice sent, specify a single Product forming the cost of transaction.
   */
  function PurchaseDetails(products) {
    _classCallCheck(this, PurchaseDetails);
    PurchaseDetails.initialize(this, products);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PurchaseDetails, null, [{
    key: "initialize",
    value: function initialize(obj, products) {
      obj['products'] = products;
    }

    /**
     * Constructs a <code>PurchaseDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PurchaseDetails} obj Optional instance to populate.
     * @return {module:model/PurchaseDetails} The populated <code>PurchaseDetails</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PurchaseDetails();
        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }
        if (data.hasOwnProperty('products')) {
          obj['products'] = _ApiClient["default"].convertToType(data['products'], [_Product["default"]]);
        }
        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }
        if (data.hasOwnProperty('notes')) {
          obj['notes'] = _ApiClient["default"].convertToType(data['notes'], 'String');
        }
        if (data.hasOwnProperty('debt')) {
          obj['debt'] = _ApiClient["default"].convertToType(data['debt'], 'Number');
        }
        if (data.hasOwnProperty('subtotal_override')) {
          obj['subtotal_override'] = _ApiClient["default"].convertToType(data['subtotal_override'], 'Number');
        }
        if (data.hasOwnProperty('total_tax_override')) {
          obj['total_tax_override'] = _ApiClient["default"].convertToType(data['total_tax_override'], 'Number');
        }
        if (data.hasOwnProperty('total_discount_override')) {
          obj['total_discount_override'] = _ApiClient["default"].convertToType(data['total_discount_override'], 'Number');
        }
        if (data.hasOwnProperty('total_override')) {
          obj['total_override'] = _ApiClient["default"].convertToType(data['total_override'], 'Number');
        }
        if (data.hasOwnProperty('request_client_details')) {
          obj['request_client_details'] = _ApiClient["default"].convertToType(data['request_client_details'], ['String']);
        }
        if (data.hasOwnProperty('timezone')) {
          obj['timezone'] = _ApiClient["default"].convertToType(data['timezone'], 'String');
        }
        if (data.hasOwnProperty('due_strict')) {
          obj['due_strict'] = _ApiClient["default"].convertToType(data['due_strict'], 'Boolean');
        }
        if (data.hasOwnProperty('email_message')) {
          obj['email_message'] = _ApiClient["default"].convertToType(data['email_message'], 'String');
        }
      }
      return obj;
    }
  }]);
  return PurchaseDetails;
}();
/**
 * Currency code in the ISO 4217 standard (e.g. 'EUR').
 * @member {String} currency
 */
PurchaseDetails.prototype['currency'] = undefined;

/**
 * Line items of the invoice. In case of a transaction with no invoice sent, specify a single Product forming the cost of transaction.
 * @member {Array.<module:model/Product>} products
 */
PurchaseDetails.prototype['products'] = undefined;

/**
 * @member {Number} total
 */
PurchaseDetails.prototype['total'] = undefined;

/**
 * Language code in the ISO 639-1 format (e.g. 'en')
 * @member {String} language
 * @default 'Default value is controlled in Company -> Brand section of merchant portal separately per each Brand used (default value, if no changes are made, is `en`). Brand to be used with corresponding Purchase/BillingTemplate specified using brand_id.'
 */
PurchaseDetails.prototype['language'] = 'Default value is controlled in Company -> Brand section of merchant portal separately per each Brand used (default value, if no changes are made, is `en`). Brand to be used with corresponding Purchase/BillingTemplate specified using brand_id.';

/**
 * @member {String} notes
 */
PurchaseDetails.prototype['notes'] = undefined;

/**
 * @member {Number} debt
 */
PurchaseDetails.prototype['debt'] = undefined;

/**
 * @member {Number} subtotal_override
 */
PurchaseDetails.prototype['subtotal_override'] = undefined;

/**
 * @member {Number} total_tax_override
 */
PurchaseDetails.prototype['total_tax_override'] = undefined;

/**
 * @member {Number} total_discount_override
 */
PurchaseDetails.prototype['total_discount_override'] = undefined;

/**
 * @member {Number} total_override
 */
PurchaseDetails.prototype['total_override'] = undefined;

/**
 * ClientDetails fields to request from the client before the payment. If a value is passed for a field in ClientDetails, it will be automatically removed from this list.
 * @member {Array.<module:model/PurchaseDetails.RequestClientDetailsEnum>} request_client_details
 */
PurchaseDetails.prototype['request_client_details'] = undefined;

/**
 * Timezone to localize invoice-specific timestamps in, e.g. to display a concrete date for a `due` timestamp on the invoice.
 * @member {String} timezone
 */
PurchaseDetails.prototype['timezone'] = undefined;

/**
 * Whether to permit payments when Purchase's `due` has passed. By default those are permitted (and status will be set to `overdue` once `due` moment is passed). If this is set to `true`, it won't be possible to pay for an overdue invoice, and when `due` is passed the Purchase's status will be set to `expired`.
 * @member {Boolean} due_strict
 * @default false
 */
PurchaseDetails.prototype['due_strict'] = false;

/**
 * An optional message to display to your customer in invoice email, e.g. \"Your invoice for June\".
 * @member {String} email_message
 */
PurchaseDetails.prototype['email_message'] = undefined;

/**
 * Allowed values for the <code>requestClientDetails</code> property.
 * @enum {String}
 * @readonly
 */
PurchaseDetails['RequestClientDetailsEnum'] = {
  /**
   * value: "email"
   * @const
   */
  "email": "email",
  /**
   * value: "phone"
   * @const
   */
  "phone": "phone",
  /**
   * value: "full_name"
   * @const
   */
  "full_name": "full_name",
  /**
   * value: "personal_code"
   * @const
   */
  "personal_code": "personal_code",
  /**
   * value: "brand_name"
   * @const
   */
  "brand_name": "brand_name",
  /**
   * value: "legal_name"
   * @const
   */
  "legal_name": "legal_name",
  /**
   * value: "registration_number"
   * @const
   */
  "registration_number": "registration_number",
  /**
   * value: "tax_number"
   * @const
   */
  "tax_number": "tax_number",
  /**
   * value: "country"
   * @const
   */
  "country": "country",
  /**
   * value: "city"
   * @const
   */
  "city": "city",
  /**
   * value: "street_address"
   * @const
   */
  "street_address": "street_address",
  /**
   * value: "zip_code"
   * @const
   */
  "zip_code": "zip_code",
  /**
   * value: "bank_account"
   * @const
   */
  "bank_account": "bank_account",
  /**
   * value: "bank_code"
   * @const
   */
  "bank_code": "bank_code",
  /**
   * value: "shipping_country"
   * @const
   */
  "shipping_country": "shipping_country",
  /**
   * value: "shipping_city"
   * @const
   */
  "shipping_city": "shipping_city",
  /**
   * value: "shipping_street_address"
   * @const
   */
  "shipping_street_address": "shipping_street_address",
  /**
   * value: "shipping_zip_code"
   * @const
   */
  "shipping_zip_code": "shipping_zip_code"
};
var _default = PurchaseDetails;
exports["default"] = _default;