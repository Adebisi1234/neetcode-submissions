class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
       const anagrams = new Map<string, string[]>()
       for(const str of strs) {
        const hash = this.hashFn(str)
        if(anagrams.has(hash)) {
            anagrams.get(hash).push(str)
        }else {
            anagrams.set(hash, [str])
        }
       }
       return [...anagrams.values()]
    }
    hashFn(str: string): string {
        return str.split("").sort().join("")
    }
}
