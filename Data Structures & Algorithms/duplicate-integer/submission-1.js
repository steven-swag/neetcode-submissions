class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let sets=new Set()

        for(let i of nums){
            if(sets.has(i)){
                return true
            }
            sets.add(i)
        }

        return false
    }
}
