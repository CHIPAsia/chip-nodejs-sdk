"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PaymentDetails model module.
 * @module model/PaymentDetails
 * @version v1
 */
var PaymentDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentDetails</code>.
   * Details of an executed transaction. Read-only for &#x60;Purchase&#x60;s and &#x60;Payout&#x60;s. For an unpaid &#x60;Purchase&#x60;, this object will be &#x60;null&#x60;.
   * @alias module:model/PaymentDetails
   */
  function PaymentDetails() {
    _classCallCheck(this, PaymentDetails);
    PaymentDetails.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PaymentDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>PaymentDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentDetails} obj Optional instance to populate.
     * @return {module:model/PaymentDetails} The populated <code>PaymentDetails</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentDetails();
        if (data.hasOwnProperty('is_outgoing')) {
          obj['is_outgoing'] = _ApiClient["default"].convertToType(data['is_outgoing'], 'Boolean');
        }
        if (data.hasOwnProperty('payment_type')) {
          obj['payment_type'] = _ApiClient["default"].convertToType(data['payment_type'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }
        if (data.hasOwnProperty('net_amount')) {
          obj['net_amount'] = _ApiClient["default"].convertToType(data['net_amount'], 'Number');
        }
        if (data.hasOwnProperty('fee_amount')) {
          obj['fee_amount'] = _ApiClient["default"].convertToType(data['fee_amount'], 'Number');
        }
        if (data.hasOwnProperty('pending_amount')) {
          obj['pending_amount'] = _ApiClient["default"].convertToType(data['pending_amount'], 'Number');
        }
        if (data.hasOwnProperty('pending_unfreeze_on')) {
          obj['pending_unfreeze_on'] = _ApiClient["default"].convertToType(data['pending_unfreeze_on'], 'Number');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('paid_on')) {
          obj['paid_on'] = _ApiClient["default"].convertToType(data['paid_on'], 'Number');
        }
        if (data.hasOwnProperty('remote_paid_on')) {
          obj['remote_paid_on'] = _ApiClient["default"].convertToType(data['remote_paid_on'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return PaymentDetails;
}();
/**
 * Denotes the direction of payment, e.g. for a paid Purchase, is granted to be `false`, `true` for payouts.
 * @member {Boolean} is_outgoing
 * @default false
 */
PaymentDetails.prototype['is_outgoing'] = false;

/**
 * @member {module:model/PaymentDetails.PaymentTypeEnum} payment_type
 */
PaymentDetails.prototype['payment_type'] = undefined;

/**
 * Amount of money as the smallest indivisible units of the currency. Examples: 1 cent for EUR and 1 Yen for JPY.
 * @member {Number} amount
 */
PaymentDetails.prototype['amount'] = undefined;

/**
 * Currency code in the ISO 4217 standard (e.g. 'EUR').
 * @member {String} currency
 */
PaymentDetails.prototype['currency'] = undefined;

/**
 * @member {Number} net_amount
 */
PaymentDetails.prototype['net_amount'] = undefined;

/**
 * @member {Number} fee_amount
 */
PaymentDetails.prototype['fee_amount'] = undefined;

/**
 * @member {Number} pending_amount
 */
PaymentDetails.prototype['pending_amount'] = undefined;

/**
 * @member {Number} pending_unfreeze_on
 */
PaymentDetails.prototype['pending_unfreeze_on'] = undefined;

/**
 * @member {String} description
 */
PaymentDetails.prototype['description'] = undefined;

/**
 * When the payment was accepted in (`is_outgoing == false`) or sent from (`is_outgoing == true`) the gateway system.
 * @member {Number} paid_on
 */
PaymentDetails.prototype['paid_on'] = undefined;

/**
 * If available, this field will report the date the payment was sent by the remote payer (`is_outgoing == false`) or when funds arrived to the remote beneficiary (`is_outgoing == true`).
 * @member {Number} remote_paid_on
 */
PaymentDetails.prototype['remote_paid_on'] = undefined;

/**
 * Allowed values for the <code>payment_type</code> property.
 * @enum {String}
 * @readonly
 */
PaymentDetails['PaymentTypeEnum'] = {
  /**
   * value: "purchase"
   * @const
   */
  "purchase": "purchase",
  /**
   * value: "purchase_charge"
   * @const
   */
  "purchase_charge": "purchase_charge",
  /**
   * value: "payout"
   * @const
   */
  "payout": "payout",
  /**
   * value: "bank_payment"
   * @const
   */
  "bank_payment": "bank_payment",
  /**
   * value: "refund"
   * @const
   */
  "refund": "refund",
  /**
   * value: "custom"
   * @const
   */
  "custom": "custom"
};
var _default = PaymentDetails;
exports["default"] = _default;