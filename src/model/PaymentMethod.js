import ApiClient from '../ApiClient';
/**
* Enum class PaymentMethod.
* @enum {}
* @readonly
*/
export default class PaymentMethod {
    
        /**
         * value: "maestro"
         * @const
         */
        "maestro" = "maestro";

    
        /**
         * value: "mastercard"
         * @const
         */
        "mastercard" = "mastercard";

    
        /**
         * value: "sepa_credit_transfer_qr"
         * @const
         */
        "sepa_credit_transfer_qr" = "sepa_credit_transfer_qr";

    
        /**
         * value: "unknown"
         * @const
         */
        "unknown" = "unknown";

    
        /**
         * value: "visa"
         * @const
         */
        "visa" = "visa";

    

    /**
    * Returns a <code>PaymentMethod</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/PaymentMethod} The enum <code>PaymentMethod</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

