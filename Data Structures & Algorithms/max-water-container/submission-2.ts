class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let max = 0
        let l = 0
        let r = heights.length - 1

        while(l < r) {
            const curr = Math.min(heights[l], heights[r]) * (r - l)
            max = Math.max(max, curr)
            if(heights[l] > heights[r]) {
                r--
            }else if (heights[r] > heights[l]) {
                l++
            }else {
                r--
                l++
            }
        }
        return max
    }
}
