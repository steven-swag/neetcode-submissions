class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        
       let maps=new Map()

       for(let i of strs){
        let count=new Array(26).fill(0)

        for(let j of i){
          count[j.charCodeAt(0)-"a".charCodeAt(0)]++
        }
     

        let key=count.join("#")


        if(!maps.has(key)){

            maps.set(key,[])
        }
        
        maps.get(key).push(i)

       }
    
    return [...maps.values()]
}
}
