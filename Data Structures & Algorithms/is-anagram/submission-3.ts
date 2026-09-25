class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sCount = {}
        const tCount = {}
        if(s.length !== t.length) {
            return false
        }
        for(let i = 0; i < s.length; i++) {
            const index = s[i]
            sCount[index] = sCount[index] ? sCount[index]+1 : 1
        }
        for(let i = 0; i < t.length; i++) {
            const index = t[i]
            tCount[index] = tCount[index] ? tCount[index]+1 : 1
        }
        console.log(sCount, tCount)

        for (const a in sCount) {
            
            if(sCount[a] !== tCount[a]) {
                return false
            }
        }
        return true
    }
}
