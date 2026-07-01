class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let sObj = {};
        let tObj = {};

        for (let i = 0; i < s.length; i++) {
            if (!sObj[s[i]]) {
                sObj[s[i]] = 1;
                continue;
            }
            sObj[s[i]]++;
        }

        for (let i = 0; i < t.length; i++) {
            if (!tObj[t[i]]) {
                tObj[t[i]] = 1;
                continue;
            }
            tObj[t[i]]++;
        }

        console.log(sObj, tObj);
        
        for (let key in sObj) {
            if (sObj[key] !== tObj[key]) {
                return false;
            }
        }

        return true;
    }
}
