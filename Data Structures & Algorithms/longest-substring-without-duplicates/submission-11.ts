class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if(s.length < 2) return s.length
        let maxLen = 0
        let l = 0
        let count = new Map<string, number>()
        for (let r =0; r < s.length; r++) {
            if(count.has(s[r])) {
                l = Math.max(l, count.get(s[r]) + 1)
            }
            maxLen = Math.max(maxLen, r-l+1)
            count.set(s[r], r)
        }

        return maxLen
    }
}
