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
 * The Product model module.
 * @module model/Product
 * @version v1
 */
var Product = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Product</code>.
   * @alias module:model/Product
   * @param name {String} Product name
   * @param price {Number} You can use this field or `total_override` with a value of 0 to activate preauthorization scenario. See the description of the `Purchase.skip_capture` field.
   */
  function Product(name, price) {
    _classCallCheck(this, Product);
    Product.initialize(this, name, price);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Product, null, [{
    key: "initialize",
    value: function initialize(obj, name, price) {
      obj['name'] = name;
      obj['price'] = price;
    }

    /**
     * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Product} obj Optional instance to populate.
     * @return {module:model/Product} The populated <code>Product</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Product();
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }
        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }
        if (data.hasOwnProperty('discount')) {
          obj['discount'] = _ApiClient["default"].convertToType(data['discount'], 'Number');
        }
        if (data.hasOwnProperty('tax_percent')) {
          obj['tax_percent'] = _ApiClient["default"].convertToType(data['tax_percent'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return Product;
}();
/**
 * Product name
 * @member {String} name
 */
Product.prototype['name'] = undefined;

/**
 * Quantity of these products in invoice
 * @member {Number} quantity
 * @default '1'
 */
Product.prototype['quantity'] = '1';

/**
 * You can use this field or `total_override` with a value of 0 to activate preauthorization scenario. See the description of the `Purchase.skip_capture` field.
 * @member {Number} price
 */
Product.prototype['price'] = undefined;

/**
 * Total discount per this product in invoice
 * @member {Number} discount
 */
Product.prototype['discount'] = undefined;

/**
 * Percent of tax added to the price of this product
 * @member {Number} tax_percent
 * @default '0'
 */
Product.prototype['tax_percent'] = '0';
var _default = Product;
exports["default"] = _default;