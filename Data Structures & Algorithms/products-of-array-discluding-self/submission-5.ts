class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length
        const pref = new Array(n)
        const suff = new  Array(n)
        const res = new Array(n)
        pref[0] = 1
        suff[n-1] = 1

        for (let i = 1; i < nums.length; i++) {
            pref[i] = nums[i - 1] * pref[i - 1]
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            suff[i] = nums[i+1] * suff[i+1]
        }
        for (let i = 0; i < nums.length; i++) {
            res[i] = pref[i] * suff[i]
        }
        return res
    }
}
