class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
      if(s.length !== t.length) return false
      const count = new Array(26)
      for (let i = 0; i < s.length; i++) {
        count[97 + s.charCodeAt(i)] = (count[97 + s.charCodeAt(i)] || 0) + 1
        count[97 + t.charCodeAt(i)] = (count[97 + t.charCodeAt(i)] || 0) - 1
      }

      return count.every((x) => x ===0)
    }
}
