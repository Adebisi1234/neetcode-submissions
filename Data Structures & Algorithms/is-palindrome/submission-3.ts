class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const clean = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
        let l = 0
        let r = clean.length - 1
        console.log(clean)
        while (l < r) {
            if(clean[l] !== clean[r]) {
                return false
            }
            l++
            r--
        }
        return true
    }
}
