class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const clean = new Set<number>(nums)
        if(clean.size === 0) return 0
        let longestStreak = 0
        for(const num  of clean) {
           if(!clean.has(num - 1)) {
            let currentNum = num 
            let currentStreak = 1
            while(clean.has(currentNum+1)) {
                currentNum++
                currentStreak++
            }
                longestStreak = Math.max(longestStreak, currentStreak)
           }
            
        }
        return longestStreak
    }
}
