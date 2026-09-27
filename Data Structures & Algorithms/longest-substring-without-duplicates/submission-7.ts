class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if(s.length < 2) return s.length
        let maxLen = 0
        const record = new Map<string, number>()
        let l = 0
        for (let r = 0; r < s.length; r++) {
            if(record.has(s[r])) {
                
               l = Math.max(l, record.get(s[r])! + 1);
            }
                record.set(s[r], r)
                maxLen = Math.max(maxLen, r-l+1)
        }

        return maxLen

    }
}
