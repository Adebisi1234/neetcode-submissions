class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.toLowerCase()
        let l = 0
        let r = s.length - 1
        while (l < r) {
          while (l < r && !this.isAlphanumeric(s.charCodeAt(l))) {
                l++;
            }
            while (l < r && !this.isAlphanumeric(s.charCodeAt(r))) {
                r--;
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false
            }
            l++
            r--
        }
        return true
    }
    isAlphanumeric(code: number) {
        return (
            (code >= 48 && code <= 57) ||
            (code >= 65 && code <= 90) ||
            (code >= 97 && code <= 122)
        );
    }
}
