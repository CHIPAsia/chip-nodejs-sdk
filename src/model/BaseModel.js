import ApiClient from '../ApiClient';

/**
 * The BaseModel model module.
 * @module model/BaseModel
 * @version v1
 */
class BaseModel {
    /**
     * Constructs a new <code>BaseModel</code>.
     * @alias module:model/BaseModel
     */
    constructor() { 
        
        BaseModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseModel} obj Optional instance to populate.
     * @return {module:model/BaseModel} The populated <code>BaseModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseModel();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_on')) {
                obj['created_on'] = ApiClient.convertToType(data['created_on'], 'Number');
            }
            if (data.hasOwnProperty('updated_on')) {
                obj['updated_on'] = ApiClient.convertToType(data['updated_on'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Object type identifier
 * @member {String} type
 */
BaseModel.prototype['type'] = undefined;

/**
 * @member {String} id
 */
BaseModel.prototype['id'] = undefined;

/**
 * Object creation time
 * @member {Number} created_on
 */
BaseModel.prototype['created_on'] = undefined;

/**
 * Object last modification time
 * @member {Number} updated_on
 */
BaseModel.prototype['updated_on'] = undefined;






export default BaseModel;

