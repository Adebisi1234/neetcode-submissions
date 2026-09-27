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
            const hL = heights[l];
            const hR = heights[r];
            const curr = (hL < hR ? hL : hR) * (r - l);
            if (curr > max) max = curr;

            if (hL < hR) {
                l++;
            } else {
                r--;
            }
        }
        return max
    }
}
