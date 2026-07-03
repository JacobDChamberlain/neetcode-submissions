class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    /**
     * Plan:
     *      1. Build anagrams object 
     *          key: string version of a-z counter array
     *          value: array containing all anagrams for that key
     *          Build res arr (empty array)
     *      2. Loop through strs
     *          2a. for each str, build array 0-25 where:
     *                  indices are letter in alphabet, 
     *                  values are number of times it appears
     *          2b. loop through letters in str, 
     *                  get charcode, 
     *                  subtract 65,
     *                  increment @ that index in key arr (or set to 1)
     *          2c. after finish looping through chars in str,
     *                  turn key arr into string (.join())
     *                  push current str into that key's value in anagrams obj
     *      3. After looping through strs,
     *          Loop through anagrams object.values,
     *          Push each value (each array) into res arr
     *      4. Return res arr.
     * ORRRRRRRR
     *      3. AFTER LOOPING THROUGH STRS, RETURN OBJECT.VALUES(ANAGRAMS)
     * 
     */
    groupAnagrams(strs) {
        const anagrams = {};

        for (let i = 0; i < strs.length; i++) {
            let currStr = strs[i];
            let keyArr = new Array(26).fill(0);

            for (let j = 0; j < currStr.length; j++) {
                let charCode = currStr.charCodeAt(j);
                let alphaIdx = charCode - 97;
                keyArr[alphaIdx]++;
            }

            let keyStr = keyArr.join();
            console.log('keyStr: ', keyStr);

            if (anagrams[keyStr] !== undefined) {
                anagrams[keyStr].push(currStr);
            } else {
                anagrams[keyStr] = [currStr];
            }
        }

        console.log('anagrams: ', anagrams)

        return Object.values(anagrams);
    }
}
