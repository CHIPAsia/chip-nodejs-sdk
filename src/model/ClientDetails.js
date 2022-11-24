
import ApiClient from '../ApiClient';
import BankAccount from './BankAccount';

/**
 * The ClientDetails model module.
 * @module model/ClientDetails
 * @version v1
 */
class ClientDetails {
    
    /**
     * Constructs a new <code>ClientDetails</code>.
     * Contains details about the client of a purchase or payment - the remote payer/fund recipient party.
     * @alias module:model/ClientDetails
     * @extends module:model/BankAccount
     * @param email {String} Email
     * @implements module:model/BankAccount
     */
    constructor(email) { 
        BankAccount.initialize(this);
        ClientDetails.initialize(this, email);   
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email) { 
        obj["email"] = email;
    }

    /**
     * Constructs a <code>ClientDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientDetails} obj Optional instance to populate.
     * @return {module:model/ClientDetails} The populated <code>ClientDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientDetails();
            BankAccount.constructFromObject(data, obj);
            BankAccount.constructFromObject(data, obj);

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('full_name')) {
                obj['full_name'] = ApiClient.convertToType(data['full_name'], 'String');
            }
            if (data.hasOwnProperty('personal_code')) {
                obj['personal_code'] = ApiClient.convertToType(data['personal_code'], 'String');
            }
            if (data.hasOwnProperty('street_address')) {
                obj['street_address'] = ApiClient.convertToType(data['street_address'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('zip_code')) {
                obj['zip_code'] = ApiClient.convertToType(data['zip_code'], 'String');
            }
            if (data.hasOwnProperty('shipping_street_address')) {
                obj['shipping_street_address'] = ApiClient.convertToType(data['shipping_street_address'], 'String');
            }
            if (data.hasOwnProperty('shipping_country')) {
                obj['shipping_country'] = ApiClient.convertToType(data['shipping_country'], 'String');
            }
            if (data.hasOwnProperty('shipping_city')) {
                obj['shipping_city'] = ApiClient.convertToType(data['shipping_city'], 'String');
            }
            if (data.hasOwnProperty('shipping_zip_code')) {
                obj['shipping_zip_code'] = ApiClient.convertToType(data['shipping_zip_code'], 'String');
            }
            if (data.hasOwnProperty('cc')) {
                obj['cc'] = ApiClient.convertToType(data['cc'], ['String']);
            }
            if (data.hasOwnProperty('bcc')) {
                obj['bcc'] = ApiClient.convertToType(data['bcc'], ['String']);
            }
            if (data.hasOwnProperty('legal_name')) {
                obj['legal_name'] = ApiClient.convertToType(data['legal_name'], 'String');
            }
            if (data.hasOwnProperty('brand_name')) {
                obj['brand_name'] = ApiClient.convertToType(data['brand_name'], 'String');
            }
            if (data.hasOwnProperty('registration_number')) {
                obj['registration_number'] = ApiClient.convertToType(data['registration_number'], 'String');
            }
            if (data.hasOwnProperty('tax_number')) {
                obj['tax_number'] = ApiClient.convertToType(data['tax_number'], 'String');
            }
        }
        return obj;
    }


}

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
BankAccount.prototype['bank_account'] = undefined;
/**
 * SWIFT/BIC code of the bank
 * @member {String} bank_code
 */
BankAccount.prototype['bank_code'] = undefined;




export default ClientDetails;

