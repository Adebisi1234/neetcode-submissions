class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxArea = 0
        let l = 0, r = heights.length - 1
        while(l < r) {
            let curr = Math.min(heights[l], heights[r]) * (r - l)
            maxArea = Math.max(curr, maxArea)
            if(heights[l] > heights[r]) {
                r--
            }else {
                l++
            }
        }
        return maxArea
    }
}
