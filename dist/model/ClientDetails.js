"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _BankAccount = _interopRequireDefault(require("./BankAccount"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ClientDetails model module.
 * @module model/ClientDetails
 * @version v1
 */
var ClientDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ClientDetails</code>.
   * Contains details about the client of a purchase or payment - the remote payer/fund recipient party.
   * @alias module:model/ClientDetails
   * @extends module:model/BankAccount
   * @param email {String} Email
   * @implements module:model/BankAccount
   */
  function ClientDetails(email) {
    _classCallCheck(this, ClientDetails);
    _BankAccount["default"].initialize(this);
    ClientDetails.initialize(this, email);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ClientDetails, null, [{
    key: "initialize",
    value: function initialize(obj, email) {
      obj["email"] = email;
    }

    /**
     * Constructs a <code>ClientDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientDetails} obj Optional instance to populate.
     * @return {module:model/ClientDetails} The populated <code>ClientDetails</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClientDetails();
        _BankAccount["default"].constructFromObject(data, obj);
        _BankAccount["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }
        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient["default"].convertToType(data['phone'], 'String');
        }
        if (data.hasOwnProperty('full_name')) {
          obj['full_name'] = _ApiClient["default"].convertToType(data['full_name'], 'String');
        }
        if (data.hasOwnProperty('personal_code')) {
          obj['personal_code'] = _ApiClient["default"].convertToType(data['personal_code'], 'String');
        }
        if (data.hasOwnProperty('street_address')) {
          obj['street_address'] = _ApiClient["default"].convertToType(data['street_address'], 'String');
        }
        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }
        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }
        if (data.hasOwnProperty('zip_code')) {
          obj['zip_code'] = _ApiClient["default"].convertToType(data['zip_code'], 'String');
        }
        if (data.hasOwnProperty('shipping_street_address')) {
          obj['shipping_street_address'] = _ApiClient["default"].convertToType(data['shipping_street_address'], 'String');
        }
        if (data.hasOwnProperty('shipping_country')) {
          obj['shipping_country'] = _ApiClient["default"].convertToType(data['shipping_country'], 'String');
        }
        if (data.hasOwnProperty('shipping_city')) {
          obj['shipping_city'] = _ApiClient["default"].convertToType(data['shipping_city'], 'String');
        }
        if (data.hasOwnProperty('shipping_zip_code')) {
          obj['shipping_zip_code'] = _ApiClient["default"].convertToType(data['shipping_zip_code'], 'String');
        }
        if (data.hasOwnProperty('cc')) {
          obj['cc'] = _ApiClient["default"].convertToType(data['cc'], ['String']);
        }
        if (data.hasOwnProperty('bcc')) {
          obj['bcc'] = _ApiClient["default"].convertToType(data['bcc'], ['String']);
        }
        if (data.hasOwnProperty('legal_name')) {
          obj['legal_name'] = _ApiClient["default"].convertToType(data['legal_name'], 'String');
        }
        if (data.hasOwnProperty('brand_name')) {
          obj['brand_name'] = _ApiClient["default"].convertToType(data['brand_name'], 'String');
        }
        if (data.hasOwnProperty('registration_number')) {
          obj['registration_number'] = _ApiClient["default"].convertToType(data['registration_number'], 'String');
        }
        if (data.hasOwnProperty('tax_number')) {
          obj['tax_number'] = _ApiClient["default"].convertToType(data['tax_number'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ClientDetails;
}();
/**
 * Email address
 * @member {String} email
 */
ClientDetails.prototype['email'] = undefined;

/**
 * Phone number in the `<country_code> <number>` format
 * @member {String} phone
 */
ClientDetails.prototype['phone'] = undefined;

/**
 * Name and surname of client
 * @member {String} full_name
 */
ClientDetails.prototype['full_name'] = undefined;

/**
 * Personal identification code of client
 * @member {String} personal_code
 */
ClientDetails.prototype['personal_code'] = undefined;

/**
 * Street house number and flat address where applicable
 * @member {String} street_address
 */
ClientDetails.prototype['street_address'] = undefined;

/**
 * Country code in the ISO 3166-1 alpha-2 format (e.g. 'GB')
 * @member {String} country
 */
ClientDetails.prototype['country'] = undefined;

/**
 * City name
 * @member {String} city
 */
ClientDetails.prototype['city'] = undefined;

/**
 * ZIP or postal code
 * @member {String} zip_code
 */
ClientDetails.prototype['zip_code'] = undefined;

/**
 * Street house number and flat address where applicable
 * @member {String} shipping_street_address
 */
ClientDetails.prototype['shipping_street_address'] = undefined;

/**
 * Country code in the ISO 3166-1 alpha-2 format (e.g. 'GB')
 * @member {String} shipping_country
 */
ClientDetails.prototype['shipping_country'] = undefined;

/**
 * City name
 * @member {String} shipping_city
 */
ClientDetails.prototype['shipping_city'] = undefined;

/**
 * ZIP or postal code
 * @member {String} shipping_zip_code
 */
ClientDetails.prototype['shipping_zip_code'] = undefined;

/**
 * Email addresses to receive a carbon copy of all notification emails
 * @member {Array.<String>} cc
 */
ClientDetails.prototype['cc'] = undefined;

/**
 * Email addresses to receive a blind carbon copy of all notification emails
 * @member {Array.<String>} bcc
 */
ClientDetails.prototype['bcc'] = undefined;

/**
 * Legal name of company
 * @member {String} legal_name
 */
ClientDetails.prototype['legal_name'] = undefined;

/**
 * Company brand name
 * @member {String} brand_name
 */
ClientDetails.prototype['brand_name'] = undefined;

/**
 * Registration number of company
 * @member {String} registration_number
 */
ClientDetails.prototype['registration_number'] = undefined;

/**
 * Tax payer registration number
 * @member {String} tax_number
 */
ClientDetails.prototype['tax_number'] = undefined;

// Implement BankAccount interface:
/**
 * Bank account number (e.g. IBAN)
 * @member {String} bank_account
 */
_BankAccount["default"].prototype['bank_account'] = undefined;
/**
 * SWIFT/BIC code of the bank
 * @member {String} bank_code
 */
_BankAccount["default"].prototype['bank_code'] = undefined;
var _default = ClientDetails;
exports["default"] = _default;