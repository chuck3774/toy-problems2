/*convert string at odd indexes switching the current number with the letter corresponding to the previous index plus the current index number in the alphabet
 * @param {string} s
 * @return {string}
 */
 var replaceDigits = function(s) {
  let copyString = s.split('');
  var alphabet = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26}
  let alphaArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
            'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < copyString.length; i ++) {
        if (i % 2 === 0) {
            continue;
        } else {
            let prevLetter = copyString[i - 1];
            let prevAlphaKey = alphabet[prevLetter];
            let currentString = copyString[i];
            let currentNum = prevAlphaKey + Number(currentString);
            copyString[i] = alphaArray[currentNum - 1];
        }
    }
    return copyString.join('');
};