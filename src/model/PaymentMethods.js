import ApiClient from '../ApiClient';

/**
 * The PaymentMethods model module.
 * @module model/PaymentMethods
 * @version v1
 */
class PaymentMethods {
    /**
     * Constructs a new <code>PaymentMethods</code>.
     * @alias module:model/PaymentMethods
     */
    constructor() { 
        
        PaymentMethods.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentMethods</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentMethods} obj Optional instance to populate.
     * @return {module:model/PaymentMethods} The populated <code>PaymentMethods</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentMethods();

            if (data.hasOwnProperty('available_payment_methods')) {
                obj['available_payment_methods'] = ApiClient.convertToType(data['available_payment_methods'], ['String']);
            }
            if (data.hasOwnProperty('by_country')) {
                obj['by_country'] = ApiClient.convertToType(data['by_country'], {'String': ['String']});
            }
            if (data.hasOwnProperty('country_names')) {
                obj['country_names'] = ApiClient.convertToType(data['country_names'], {'String': 'String'});
            }
            if (data.hasOwnProperty('names')) {
                obj['names'] = ApiClient.convertToType(data['names'], {'String': 'String'});
            }
            if (data.hasOwnProperty('card_methods')) {
                obj['card_methods'] = ApiClient.convertToType(data['card_methods'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} available_payment_methods
 */
PaymentMethods.prototype['available_payment_methods'] = undefined;

/**
 * Payment method names (as returned by `available_payment_methods`) grouped by country codes they are available in. `any` key returns names of payment method available in all countries.
 * @member {Object.<String, Array.<String>>} by_country
 */
PaymentMethods.prototype['by_country'] = undefined;

/**
 * Human-readable names corresponding to country codes as returned by `by_country` property. `any` code is also decoded to `Other`.
 * @member {Object.<String, String>} country_names
 */
PaymentMethods.prototype['country_names'] = undefined;

/**
 * Human-readable names of payment methods as returned by `available_payment_methods` property.
 * @member {Object.<String, String>} names
 */
PaymentMethods.prototype['names'] = undefined;

/**
 * @member {Array.<String>} card_methods
 */
PaymentMethods.prototype['card_methods'] = undefined;






export default PaymentMethods;

