class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let maps=new Map()
        let result=[]

        for(let i of nums){
        
        if(!maps.has(i)){
            maps.set(i,1)
        }
        else{
            maps.set(i,maps.get(i)+1)
        }
    }

    let bucket=[]
    for(let i=0 ;i<nums.length+1;i++){
        bucket.push([])
    }
    
    for(let [num,freq]  of maps){
          
          bucket[freq].push(num)
    }
    
   for (let i = bucket.length - 1; i > 0; i--) {

    for(let nums of bucket[i]){
       result.push(nums)


       if(result.length===k){
        return result
       }
    }

}

return result
























    
// let arrayList=[...maps]

// let sorted = arrayList.sort((a,b)=>b[1]-a[1]);
// let res=[]

// for(let i=0 ;i<k;i++){
    
//    res.push(sorted[i][0])
// }

// return res
    }

}
