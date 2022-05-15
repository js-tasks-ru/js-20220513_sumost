/**
 * sum
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
export default function sum(m, n) {
     function isValidNumber (num) {
        return typeof num === 'number' && !isNaN(num);
    }
    if (isValidNumber(m) && isValidNumber(n)) 
        return (m + n);
    else 
        document.write("Проверте что у функции числовые параметры! <br/>");
    }
