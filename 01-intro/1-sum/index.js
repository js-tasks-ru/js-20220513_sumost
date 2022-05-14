/**
 * sum
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
export default function sum(m, n) {

    if (isValidNumber(m) && isValidNumber(n)) 
        return (m + n);
    else 
        document.write("Проверте что у функции числовые параметры! <br/>");
    
    
    function isValidNumber (num) {
        return typeof num === 'number' && !isNaN(num);
    }

}
