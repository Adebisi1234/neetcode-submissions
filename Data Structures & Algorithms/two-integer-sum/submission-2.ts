class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const offsetArr = []

        for (let i = 0; i < nums.length; i++) {
            offsetArr[i] = target - nums[i]
        }
        
        for (let i = 0; i < offsetArr.length; i++) {
            const cand = nums.findIndex((el, j) => el === offsetArr[i] && j !== i)
            console.log(cand)
            if(cand === -1) {
                continue
            }
            if(cand > i) {
                return [i, cand]
            }
            return [cand, i]
        }
        return [0,0]
    }
}
