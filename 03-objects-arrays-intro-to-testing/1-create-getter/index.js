/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const checkPath = path.split('.');
    return function (obj) {
        const isObject = function (o) {
            if (o === null) {
                return false;
            }
            return (typeof o === 'object');
        };
        let pathStr= [];
        let resStr = '';
        const objProps = function (o) {
            for (let val in o) {
                console.log(`===${val}===`);
                pathStr.push(val);
                if (isObject(o[val])) {
                    objProps(o[val]);
                } else {
                    if (pathStr.join('.') === path) {
                        resStr = o[val];
                    }
                }
            };
            return resStr;
        };
        const result = objProps(obj);
        if (result !== '') {
            return result;
        } else {
            return undefined;
        }
    }; 
}
