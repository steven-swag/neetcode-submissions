class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        

         if(nums.length===0){
            return 0
        }
        
        let long=1
        let curr=1

        let sorted =nums.sort((a,b)=>a-b)

        for(let i=1 ;i<nums.length;i++){
             
             if(sorted[i]!==sorted[i-1]){
                  
                  if(sorted[i]===sorted[i-1]+1){
                    curr+=1
                  }
                  else{

                    long=Math.max(long,curr)
                    curr=1
                  }
             }
             
        }

        return Math.max(long,curr)
    }
}
