class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map((x) => `${x.length}#${x}`).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let i = 0
        let j = 0
        const results = []
        while(i < str.length) {
            while (str[j] !== "#") {
                j++
            }
            const len = parseInt(str.slice(i, j))
            results.push(str.slice(j+1, len + j+1))
            i = j+len+1
            j=i
        }

        return results
    }
}
