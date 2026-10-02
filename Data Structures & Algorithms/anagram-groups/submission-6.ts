class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagram = new Map<string, string[]>()
        for (const str of strs) {
            const hash = str.split("").sort().join("")
            if(anagram.has(hash)) {
                anagram.get(hash).push(str)
            }else {
                anagram.set(hash, [str])
            }
        }
        return [...anagram.values()]
    }
}
