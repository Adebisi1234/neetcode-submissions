class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const lS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let leftPointer = 0
        let rightPointer = lS.length - 1
        console.log(lS)
        while(leftPointer < rightPointer) {           
            if(lS[leftPointer] !== lS[rightPointer]) {
                return false
            }
            leftPointer++
            rightPointer--
            
        }
        return true

    }
    isAlphaNumeric(code: number) {        
    if (
      !(code > 47 && code < 58) &&  // numeric (0-9)
      !(code > 64 && code < 91) &&  // upper alpha (A-Z)
      !(code > 96 && code < 123)    // lower alpha (a-z)
    ) {
      return false;
    }
    return true
    }
}
