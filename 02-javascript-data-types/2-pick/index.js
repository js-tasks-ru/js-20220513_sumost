/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export function pick (obj, ...fields)  {
    const filteredObj = Object.keys(obj)
        .filter(key => fields.includes(key))
        .reduce((newobj, key) => {
        newobj[key] = obj[key];
        return newobj;
    }, {});
    return filteredObj;
};
