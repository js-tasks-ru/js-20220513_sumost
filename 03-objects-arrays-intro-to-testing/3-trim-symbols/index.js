/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    const strLen = string.length;
    let setChar = new Set(string);
    if (size === undefined) {
        return string;
    }
    if (setChar.size === 1) {
        if (strLen >= size) {
            return string.slice(0,size);
        } else{
            return string;
        }
    }
    const resultArr = [];
   
    function getTemplate (stringRest, size) {
        if (stringRest === '' || size === 0) {
            return '';
        }
        let ch1 = stringRest[0];
        if (stringRest.substr(0,size) === ch1.repeat(size)) {
            resultArr.push(ch1.repeat(size)); //and go recursion
        } else {
            let strNotFullSize = removeAllExeptXfromCursor(ch1, stringRest.substr(0,size));
            resultArr.push(strNotFullSize); 
        }
        let editString = removeXfromString(ch1, stringRest);
        return getTemplate(editString, size);
    }//fn getTpl

    function removeXfromString(xChar, sstring) {
        if (sstring === '') { 
            return '';
        }
        if (sstring.length === 1 && xChar === sstring) { 
            return '';
        }
        if (sstring[0] === xChar) {
            return removeXfromString(xChar, sstring.substring(1));
        }
        return sstring;
    }    
    function removeAllExeptXfromCursor(xChar, strPart) {
        if (strPart === '') { 
            return '';
        }
        if (strPart.length === 1) {
            if(xChar === strPart) { 
                return xChar;
            } else {
                return '';
            }
        }
        let result = '';
        for (let char of strPart) {
            if (char === xChar) {
                result += char;
            } else {
                break;
            }
        }
        return result;
    }
    getTemplate(string, size);
    //-------------end------------------
    return resultArr.join('');
}
