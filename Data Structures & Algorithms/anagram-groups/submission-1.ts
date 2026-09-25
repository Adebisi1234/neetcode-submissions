class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const record: {[key: string]: string[]} = {}
        for (let i = 0; i < strs.length; i++) {
            const hash = this.sortStr(strs[i])
            if(record[hash] !== undefined) {
                record[hash].push(strs[i])
            }else {
                record[hash] = [strs[i]]
            }
        }
        return Object.values(record)
    }
    sortStr(str: string): string {
        return str.split("").sort().join("")
    }
}
