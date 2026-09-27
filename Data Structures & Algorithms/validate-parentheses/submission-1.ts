class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
      stack = []
    isValid(s: string): boolean {
        for (const c of s) {
            if (this.top() === "[" && c == "]" ||
                this.top() === "(" && c == ")" ||
                this.top() === "{" && c == "}"  
            )
            this.stack.pop()
            else this.stack.push(c)
        }
        return !this.stack.length ? true : false
    }
    top = () => this.stack[this.stack.length - 1]
}
