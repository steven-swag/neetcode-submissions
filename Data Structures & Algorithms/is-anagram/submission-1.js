class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map1=new Map()

        for(let i of s){

            if(!map1.has(i)){
                map1.set(i,1)
            }
            else{
                map1.set(i,map1.get(i)+1)
            }
        }

        for(let j of t){

            if(!map1.has(j)){
                return false 
            }

            let count=map1.get(j)

            if(count===1){
                map1.delete(j)
            }
            else{
                map1.set(j,count-1)
            }
        }

        return map1.size===0
    }
}
