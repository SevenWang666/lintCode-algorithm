var exist = function(board, word) {
    let chlist=word.split('')
    let marked=new Array(board.length)
    for(let j=0;j<board.length;j++){
        marked[j]=new Array(board[0].length).fill(false)
    } 
    console.log(marked)
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
              if (dfs(board,i, j,chlist, 0,marked)) {
                    return true;
                }
        }
    }
    return flag
};
function dfs(board,i,j,chlist,index,marked){
    var direction=[[-1,0],[1,0],[0,1],[0,-1]]
    if(!chlist[index+1]){
       return true
    }
    if (board[i][j] ==chlist[index]) {
        marked[i][j]=true
        for (let k = 0; k < 4; k++) {
            let newX = i + direction[k][0];
            let newY = j + direction[k][1];
            if (inArea(newX, newY,board) && !marked[newX][newY]) {
                if (dfs(board,newX, newY,chlist, index + 1,marked)) {
                    return true;
                }
            }
        }
        marked[i][j]=false
    }
    return false;   
}
function inArea(x,y,board){
    return x>=0 && y>=0 && x<board.length &&y<board[0].length
}
var board= [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
var word = "ABCCED"
console.log(exist(board,word))