class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        const pref = new Array(n)
        const suff = new Array(n)
        const prod = new Array(n)

        pref[0] = 1
        suff[n-1] = 1
        for (let i = 1, j = n-2; i < n && j >= 0; i++, j--) {
            pref[i] = nums[i - 1] * pref[i - 1]
            suff[j] = nums[j+1] * suff[j+1]
        }

        for (let i =0; i < n;i++) {
            prod[i] = pref[i] * suff[i]
        }
        return prod
    }
}