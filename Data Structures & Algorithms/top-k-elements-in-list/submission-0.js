class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let maps=new Map()

        for(let i of nums){
        
        if(!maps.has(i)){
            maps.set(i,1)
        }
        else{
            maps.set(i,maps.get(i)+1)
        }
    }
    
let arrayList=[...maps]

let sorted = arrayList.sort((a,b)=>b[1]-a[1]);
let res=[]

for(let i=0 ;i<k;i++){
    
   res.push(sorted[i][0])
}

return res
    }

}
