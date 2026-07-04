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
        return strs.join('#08');
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
        return str.split('#08');
    }
}
