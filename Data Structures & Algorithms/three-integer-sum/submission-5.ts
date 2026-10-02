class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums = nums.sort((a,b) => a-b)
        const res: number[][] = []
        for(let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            if(nums[i] > 0) break
            let j = i+1
            let k = nums.length - 1
            while(j < k) {
                const sum = nums[i] + nums[j] + nums[k]
                if(sum === 0) {
                    console.log([nums[i], nums[j], nums[k]])
                    res.push([nums[i], nums[j], nums[k]])
                    while (j < k && nums[j] === nums[j + 1]) j++;
                    while (j < k && nums[k] === nums[k - 1]) k--;

                    j++;
                    k--;
                }
                
                if(sum > 0)k--
                if(sum < 0)j++
                
            }
        }
        return res
    }
}
