class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "";

        let lengths = [];
        strs.forEach(str => lengths.push(str.length));

        let encoded = "";

        // lengths.forEach(len => encoded += len += ',');
        for (let i = 0; i < lengths.length; i++) {
            let len = lengths[i];

            if (i !== lengths.length - 1) {
                encoded += len + ',';
            } else {
                encoded += len;
            }
        }
        encoded += "#x87";
        // strs.forEach(str => encoded += str);
        for (let i = 0; i < strs.length; i++) {
            let str = strs[i];

            if (i !== strs.length - 1) {
                encoded += str + '918x';
            } else {
                encoded += str;
            }
        }
        
        console.log(encoded);

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "") return [];
        if (str === "0#x87") return [""];

        let decoded = [];

        let lengths = str.split("#x87")[0].split(',');
        let strs = str.split("#x87")[1].split('918x');

        // for (let i = 0; i < lengths.length; i += lengths[i]) {
        //     let currLen = lengths[i];
        //     let str = strs.slice(i, currLength);

        // }

        strs.forEach(str => decoded.push(str));

        return decoded;
    }
}
