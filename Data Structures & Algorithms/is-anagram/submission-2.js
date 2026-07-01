class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const sCount = {};
        for (let i = 0; i < s.length; i++) {
            if (!sCount[s[i]]) {
                sCount[s[i]] = 1;
            } else {
                sCount[s[i]]++;
            }
        }

        const tCount = {};
        for (let i = 0; i < t.length; i++) {
            if (!tCount[t[i]]) {
                tCount[t[i]] = 1;
            } else {
                tCount[t[i]]++;
            }
        }

        console.log(sCount);
        console.log(tCount);

        for (let key in sCount) {
            console.log('key: ', key);
            console.log('sCount[key]: ', sCount[key]);
            console.log('tCount[key]: ', tCount[key]);
            if (sCount[key] !== tCount[key]) return false;
        }

        return true;
    }
}
