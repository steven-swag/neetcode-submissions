class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {


        for(let row=0 ; row <board.length;row++){
    let set=new Set()
    
    for(let col=0 ;col<board.length;col++){
        
        let value=board[row][col]
        
        if(value!=="."){
            
            if(set.has(value)){
                
                return false
            }
            
            set.add(value)
        }
    }
}

for(let col=0 ; col <board.length;col++){
    let set=new Set()
    
    for(let row=0 ;row<board.length;row++){
        
        let value=board[row][col]
        
        
        if(value!=="."){
            
            if(set.has(value)){
                
                return false
            }
            
            set.add(value)
        }
    }
}


for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            
            // Create a new Set for each 3x3 box
            let set = new Set(); 
            
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let value = board[row + i][col + j];
                    
                    if (value !== ".") {
                        if (set.has(value)) return false;
                        set.add(value);
                    }
                }
            }
        }
    }

return true

        
    }
}
