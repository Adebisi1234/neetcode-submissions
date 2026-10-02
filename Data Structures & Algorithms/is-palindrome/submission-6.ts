class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const clean = s.replace(/[^a-zA-Z0-9]/g, "")
        let l=0, r=clean.length-1
        console.log(clean)
        while(l < r) {
            if(clean[l].toLowerCase() !== clean[r].toLowerCase()) return false
            l++
            r--
        }
        return true
    }
}
