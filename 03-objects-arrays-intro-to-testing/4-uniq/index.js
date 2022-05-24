/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    if (arr === [] || arr === undefined) {
        return [];
    }
    return Array.from(new Set(arr));
}
