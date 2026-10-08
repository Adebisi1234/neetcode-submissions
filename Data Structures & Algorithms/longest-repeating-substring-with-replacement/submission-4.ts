class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let maxFreq = 0
        let record = new Map<string, number>()
        let l = 0
        let len = 0
        for(let r = 0; r < s.length; r++) {
            let freq = (record.get(s[r]) || 0) + 1
            record.set(s[r], (record.get(s[r]) || 0) + 1)
            maxFreq = Math.max(maxFreq, freq)

            if(r-l+1-maxFreq > k) {
                record.set(s[l], record.get(s[l]) - 1)
                l++
            }

            len = Math.max(len, r-l +1)
        }
        return len
    }
}
