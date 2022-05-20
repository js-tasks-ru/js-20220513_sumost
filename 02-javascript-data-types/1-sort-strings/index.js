/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    const sortedArr = arr.slice();
    if (param === 'asc') {
         let collator = new Intl.Collator(['ru', 'en'], { caseFirst: "upper" });
         sortedArr.sort(function (a,b) {
             return collator.compare(a,b);
         }, )
     } else {
        let collator = new Intl.Collator(['ru', 'en'], { caseFirst: "lower" });
        sortedArr.sort(function (a,b) {
             return collator.compare(b,a);
         }, )
     }
     return sortedArr;
}
