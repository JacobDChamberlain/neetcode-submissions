class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    /**
     *      first thoughts: return strs.join('#');
     * 
     *      edge cases:
     *          empty arr? return ""
     * 
     *          arr w/ 1 empty str? return ""
     */
    encode(strs) {
        if (strs.length === 0) return "null";
        if (strs.length === 1 && strs[0] === "") return "";
        // return strs.join('#08');

        let encoded = "";

        for (let i = 0; i < strs.length; i++) {
            if (i !== strs.length - 1) {
                encoded += strs[i] + "x87";
            } else {
                encoded += strs[i];
            }
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */

    /**
     *      first thoughts: return str.split('#');
     * 
     *      edge cases:
     *          "" ? return [""];
     */
    decode(str) {
        if (str === "null") return [];
        if (str === "") return [""];
        // return str.split('#08');

        return str.split('x87');
    }
}
