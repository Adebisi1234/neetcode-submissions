class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map((str) => `${str.length}#${str}`).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res = []
        let j = 0
        for (let i = 0; i < str.length; i++) {
            j = i
            while(str[j] !== "#") {
                j++
            }
            const len = parseInt(str.slice(i, j))
            res.push(str.slice(j+1, j+len+1))
            i = j+len
        }

        return res
    }
}
