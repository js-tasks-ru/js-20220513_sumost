/**
 * sum
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
export default function sum(m, n) {

    //help function to check parameter is numeric
    function isValidNumber (num) {
        return typeof num === 'number' && !isNaN(num);
    }


    if (isValidNumber(m) && isValidNumber(n)) 
        return (m + n);
    else 
        document.write("Parameters must be a number! <br/>");
 
    }
