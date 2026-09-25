class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
       const record = new Map<string, string[]>()
       for(const str of strs) {
        const hash = this.hashFn(str)
        if(record.has(hash)) {
            record.set(hash, [...record.get(hash), str])
        }else {
            record.set(hash, [str])
        }
       }
       return [...record.values()]
    }
    hashFn(str: string): string {
        return str.split("").sort().join("")
    }
}
