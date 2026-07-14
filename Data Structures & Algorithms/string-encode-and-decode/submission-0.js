class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result=""

        for(let i of strs){
            result+= i.length+"#"+i
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result=[]
        let i=0
        

        while(i < str.length){
            let j = i
        while(str[j]!=="#"){
            j++;
        }
        
        let lengths=str.substring(i,j)
        let num=Number(lengths)
        
        let sliced=str.slice(j+1,j+1+num)

        result.push(sliced)

        i=(j+1)+num

       
        }
       return result  
    }
}
