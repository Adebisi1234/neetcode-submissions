class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result = [1]
        let prev = 1
        for(let i =1; i <nums.length; i++) {
            result[i] = prev * nums[i-1]
            prev = result[i]
        }

        let suff = 1
        console.log(result)
        for (let i = result.length - 1; i >= 0; i--) {
            result[i] = suff * result[i]
            suff = suff * nums[i]
        }
        return result
    }
}
