/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    const sortedArr = arr.slice();
    let collator = new Intl.Collator(['ru', 'en'], { caseFirst: "upper" });
    if (param === 'asc') {
         sortedArr.sort(function (a,b) {
             return collator.compare(a,b);
         }, )
     } else {
        collator.caseFirst = "lower";
        sortedArr.sort(function (a,b) {
             return collator.compare(b,a);
         }, )
     }
     return sortedArr;
}
