class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let left=[]
        let right=1
        left[0]=1

        for(let i=1 ;i<nums.length;i++){

         left[i]=left[i-1]*nums[i-1]

        }
        
        for(let j=nums.length-1;j>=0;j--){
          
          left[j]=left[j]*right

          right=right*nums[j]

        }

        return left
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // let result=[]

        // for(let i=0 ;i<nums.length;i++){

        //     let product=1

        //     for(let j=0;j<nums.length;j++){

        //         if(i!==j){

        //            product*=nums[j]
        //         }
                
                

        //     }
        //     result.push(product)
        // }
        //   return result
    }
}
