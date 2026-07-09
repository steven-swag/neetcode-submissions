class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let maps=new Map()

        for(let i of nums){

            if(!maps.has(i)){
                maps.set(i,1)
            }else{

                maps.set(i,maps.get(i)+1)
            }
        }

        for(let [key,values] of maps ){

            if(values>1){
                return true
                break
            }
        }
        return false
    }
}
