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
 * The IssuerDetails model module.
 * @module model/IssuerDetails
 * @version v1
 */
var IssuerDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssuerDetails</code>.
   * Read-only details of issuer company/brand, persisted for invoice display.
   * @alias module:model/IssuerDetails
   */
  function IssuerDetails() {
    _classCallCheck(this, IssuerDetails);
    IssuerDetails.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(IssuerDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>IssuerDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuerDetails} obj Optional instance to populate.
     * @return {module:model/IssuerDetails} The populated <code>IssuerDetails</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssuerDetails();
        if (data.hasOwnProperty('website')) {
          obj['website'] = _ApiClient["default"].convertToType(data['website'], 'String');
        }
        if (data.hasOwnProperty('legal_street_address')) {
          obj['legal_street_address'] = _ApiClient["default"].convertToType(data['legal_street_address'], 'String');
        }
        if (data.hasOwnProperty('legal_country')) {
          obj['legal_country'] = _ApiClient["default"].convertToType(data['legal_country'], 'String');
        }
        if (data.hasOwnProperty('legal_city')) {
          obj['legal_city'] = _ApiClient["default"].convertToType(data['legal_city'], 'String');
        }
        if (data.hasOwnProperty('legal_zip_code')) {
          obj['legal_zip_code'] = _ApiClient["default"].convertToType(data['legal_zip_code'], 'String');
        }
        if (data.hasOwnProperty('bank_accounts')) {
          obj['bank_accounts'] = _ApiClient["default"].convertToType(data['bank_accounts'], [_BankAccount["default"]]);
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
  return IssuerDetails;
}();
/**
 * Company website URL
 * @member {String} website
 */
IssuerDetails.prototype['website'] = undefined;

/**
 * @member {String} legal_street_address
 */
IssuerDetails.prototype['legal_street_address'] = undefined;

/**
 * @member {String} legal_country
 */
IssuerDetails.prototype['legal_country'] = undefined;

/**
 * @member {String} legal_city
 */
IssuerDetails.prototype['legal_city'] = undefined;

/**
 * @member {String} legal_zip_code
 */
IssuerDetails.prototype['legal_zip_code'] = undefined;

/**
 * @member {Array.<module:model/BankAccount>} bank_accounts
 */
IssuerDetails.prototype['bank_accounts'] = undefined;

/**
 * Legal name of company
 * @member {String} legal_name
 */
IssuerDetails.prototype['legal_name'] = undefined;

/**
 * Company brand name
 * @member {String} brand_name
 */
IssuerDetails.prototype['brand_name'] = undefined;

/**
 * Registration number of company
 * @member {String} registration_number
 */
IssuerDetails.prototype['registration_number'] = undefined;

/**
 * Tax payer registration number
 * @member {String} tax_number
 */
IssuerDetails.prototype['tax_number'] = undefined;
var _default = IssuerDetails;
exports["default"] = _default;