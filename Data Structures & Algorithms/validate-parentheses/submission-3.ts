class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const closeToOpen = {
            "}": "{",
            "]":"[",
            ")": "("
        }
        const stack = []

        for(const c of s) {
            if(closeToOpen[c]) {
                if(stack[stack.length - 1] !== closeToOpen[c]) {
                    return false
                }
                stack.pop()                
            }else {
                stack.push(c)
            }
        }
        return stack.length === 0
    }
}
