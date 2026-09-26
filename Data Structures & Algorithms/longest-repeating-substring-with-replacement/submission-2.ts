class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
       const count = new Map<string,number>()
       let highest = 0
       let l = 0
       let maxFreq = 0
       for (let r = 0; r < s.length; r++) {
        count.set(s[r], (count.get(s[r]) || 0) + 1)
        maxFreq = Math.max(maxFreq, count.get(s[r]))

        while(r-l+1 - maxFreq > k) {
            count.set(s[l], (count.get(s[l]) || 0) -1 )
            l++
        }
        highest = r -l +1
       }
        return highest
    }
}

/* 
Record the numbers of gaps between same characters
if it's equal to k
that becomes the highest
then update the left counter to come to the first instance of the next character
 */