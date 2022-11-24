import ApiClient from '../ApiClient';
/**
* Enum class PurchaseStatus.
* @enum {}
* @readonly
*/
export default class PurchaseStatus {
    
        /**
         * value: "created"
         * @const
         */
        "created" = "created";

    
        /**
         * value: "sent"
         * @const
         */
        "sent" = "sent";

    
        /**
         * value: "viewed"
         * @const
         */
        "viewed" = "viewed";

    
        /**
         * value: "error"
         * @const
         */
        "error" = "error";

    
        /**
         * value: "cancelled"
         * @const
         */
        "cancelled" = "cancelled";

    
        /**
         * value: "overdue"
         * @const
         */
        "overdue" = "overdue";

    
        /**
         * value: "expired"
         * @const
         */
        "expired" = "expired";

    
        /**
         * value: "blocked"
         * @const
         */
        "blocked" = "blocked";

    
        /**
         * value: "hold"
         * @const
         */
        "hold" = "hold";

    
        /**
         * value: "released"
         * @const
         */
        "released" = "released";

    
        /**
         * value: "preauthorized"
         * @const
         */
        "preauthorized" = "preauthorized";

    
        /**
         * value: "paid"
         * @const
         */
        "paid" = "paid";

    
        /**
         * value: "cleared"
         * @const
         */
        "cleared" = "cleared";

    
        /**
         * value: "settled"
         * @const
         */
        "settled" = "settled";

    
        /**
         * value: "chargeback"
         * @const
         */
        "chargeback" = "chargeback";

    
        /**
         * value: "refunded"
         * @const
         */
        "refunded" = "refunded";

    

    /**
    * Returns a <code>PurchaseStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/PurchaseStatus} The enum <code>PurchaseStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

