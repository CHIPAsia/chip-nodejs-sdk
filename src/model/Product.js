import ApiClient from '../ApiClient';

/**
 * The Product model module.
 * @module model/Product
 * @version v1
 */
class Product {
    /**
     * Constructs a new <code>Product</code>.
     * @alias module:model/Product
     * @param name {String} Product name
     * @param price {Number} You can use this field or `total_override` with a value of 0 to activate preauthorization scenario. See the description of the `Purchase.skip_capture` field.
     */
    constructor(name, price) { 
        
        Product.initialize(this, name, price);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, price) { 
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
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Product();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('discount')) {
                obj['discount'] = ApiClient.convertToType(data['discount'], 'Number');
            }
            if (data.hasOwnProperty('tax_percent')) {
                obj['tax_percent'] = ApiClient.convertToType(data['tax_percent'], 'Number');
            }
        }
        return obj;
    }


}

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






export default Product;

