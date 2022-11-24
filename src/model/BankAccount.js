import ApiClient from '../ApiClient';

/**
 * The BankAccount model module.
 * @module model/BankAccount
 * @version v1
 */
class BankAccount {
    /**
     * Constructs a new <code>BankAccount</code>.
     * @alias module:model/BankAccount
     */
    constructor() { 
        
        BankAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BankAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BankAccount} obj Optional instance to populate.
     * @return {module:model/BankAccount} The populated <code>BankAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BankAccount();

            if (data.hasOwnProperty('bank_account')) {
                obj['bank_account'] = ApiClient.convertToType(data['bank_account'], 'String');
            }
            if (data.hasOwnProperty('bank_code')) {
                obj['bank_code'] = ApiClient.convertToType(data['bank_code'], 'String');
            }
        }
        return obj;
    }


}

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






export default BankAccount;

