/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
        const isObject = function (o) {
            if (o === null) {
                return false;
            }
            return (typeof o === 'object');
        };
        if (!isObject(obj)) {
            return undefined;
        }
        if (Object.values(obj).includes(undefined)) {
             return {};
        }
        if (obj === {}) {
            return {};
        }
        return Object.fromEntries( Object.entries(obj).map(item => item.reverse()) );
}
