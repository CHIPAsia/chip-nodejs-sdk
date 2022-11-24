import ApiClient from '../ApiClient';
import BankAccount from './BankAccount';

/**
 * The IssuerDetails model module.
 * @module model/IssuerDetails
 * @version v1
 */
class IssuerDetails {
    /**
     * Constructs a new <code>IssuerDetails</code>.
     * Read-only details of issuer company/brand, persisted for invoice display.
     * @alias module:model/IssuerDetails
     */
    constructor() { 
        
        IssuerDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssuerDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuerDetails} obj Optional instance to populate.
     * @return {module:model/IssuerDetails} The populated <code>IssuerDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssuerDetails();

            if (data.hasOwnProperty('website')) {
                obj['website'] = ApiClient.convertToType(data['website'], 'String');
            }
            if (data.hasOwnProperty('legal_street_address')) {
                obj['legal_street_address'] = ApiClient.convertToType(data['legal_street_address'], 'String');
            }
            if (data.hasOwnProperty('legal_country')) {
                obj['legal_country'] = ApiClient.convertToType(data['legal_country'], 'String');
            }
            if (data.hasOwnProperty('legal_city')) {
                obj['legal_city'] = ApiClient.convertToType(data['legal_city'], 'String');
            }
            if (data.hasOwnProperty('legal_zip_code')) {
                obj['legal_zip_code'] = ApiClient.convertToType(data['legal_zip_code'], 'String');
            }
            if (data.hasOwnProperty('bank_accounts')) {
                obj['bank_accounts'] = ApiClient.convertToType(data['bank_accounts'], [BankAccount]);
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






export default IssuerDetails;

