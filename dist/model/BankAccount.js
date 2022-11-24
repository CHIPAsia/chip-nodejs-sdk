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
 * The BankAccount model module.
 * @module model/BankAccount
 * @version v1
 */
var BankAccount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BankAccount</code>.
   * @alias module:model/BankAccount
   */
  function BankAccount() {
    _classCallCheck(this, BankAccount);
    BankAccount.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(BankAccount, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>BankAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BankAccount} obj Optional instance to populate.
     * @return {module:model/BankAccount} The populated <code>BankAccount</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BankAccount();
        if (data.hasOwnProperty('bank_account')) {
          obj['bank_account'] = _ApiClient["default"].convertToType(data['bank_account'], 'String');
        }
        if (data.hasOwnProperty('bank_code')) {
          obj['bank_code'] = _ApiClient["default"].convertToType(data['bank_code'], 'String');
        }
      }
      return obj;
    }
  }]);
  return BankAccount;
}();
/**
 * Bank account number (e.g. IBAN)
 * @member {String} bank_account
 */
BankAccount.prototype['bank_account'] = undefined;

/**
 * SWIFT/BIC code of the bank
 * @member {String} bank_code
 */
BankAccount.prototype['bank_code'] = undefined;
var _default = BankAccount;
exports["default"] = _default;