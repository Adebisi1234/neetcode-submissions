class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const unique = new Set(nums)
        let longestStreak = 0
        for(const num of unique) {
            if(!unique.has(num-1)) {
                let currentNum = num
                let currentStreak = 1
                while(unique.has(currentNum+1)) {
                    currentStreak++
                    currentNum++
                }
                longestStreak = Math.max(longestStreak, currentStreak)
            }
        }
        return longestStreak
    }
}
