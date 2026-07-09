class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       
       let maps=new Map()

       for(let i=0 ; i<nums.length;i++){

        let sum=target-nums[i];

        if(maps.has(sum)){
          
          return [maps.get(sum),i]
        }
        else{

            maps.set(nums[i],i)
        }
       }

    }
}
