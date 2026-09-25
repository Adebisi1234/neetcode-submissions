class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const counts: {[key: number]: number} = {}
        const sorted = Array.from(nums).sort((a,b) => a -b)
        let pointer = sorted[0]
        if(pointer !== undefined) {counts[pointer] = 1}else return 0
        for(const num of sorted) {
            if(num === pointer || num === pointer + counts[pointer] - 1) {
                continue
            }
            
            if(num === pointer + counts[pointer]) {
                counts[pointer] += 1
                
            } else {
                
                pointer = num
                counts[num] = 1
            }
        }
        
        console.log(counts)
        return Math.max(...Object.values(counts))
    }
}

/* 
understanding the problem

what if you sort then, count each upgrade by one

each break means a new start
 */