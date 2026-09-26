class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxArea = 0
        let i = 0
        let r = heights.length - 1
        while (i < r ) {
            let currArea = (r - i) * Math.min(heights[i], heights[r])
            if(heights[i] > heights[r]) {
                r--
            }else {
                i++
            }
           
            
            maxArea = Math.max(maxArea, currArea)
        }
    
        console.log(i,r)
        return maxArea
    }
}
