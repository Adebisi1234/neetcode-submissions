class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === '') return '';
        const countT = new Map<string, number>()
        let have = 0
        let res = [-1,-1]
        let resLen = Infinity
        let l = 0
        const window = new Map<string, number>()
        for (const c of t) {
            countT.set(c, (countT.get(c) || 0) + 1)
        }
        const need = countT.size

        for(let r = 0; r < s.length; r++) {
            window.set(s[r], (window.get(s[r]) || 0) + 1)
            if(countT.get(s[r]) && countT.get(s[r]) === window.get(s[r])) {
                have++
            }

            while(have === need) {
                if(r-l+1 < resLen) {
                resLen =  r-l+1
                res = [l,r]

                }
                window.set(s[l], window.get(s[l]) - 1)

                if(countT.has(s[l]) && window.get(s[l]) < countT.get(s[l])) {
                    have--
                }
                l++
            }
        }
        
        return resLen === Infinity ? "" : s.slice(res[0], res[1]+1)
        
    }
}