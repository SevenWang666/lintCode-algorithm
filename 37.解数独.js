/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(board[i][j]!='.') continue
            for(let k=1;k<=9;k++){
                if(isValid(board,i,j,k.toString())){
                    board[i][j]=k.toString()
                    if(solveSudoku(board)) return true
                    board[i][j]='.'
                }
            }
            return false
            
        }
    }
    return true

};
function isValid(board,row,col,k){
    let squareX = Math.floor(row/3)*3
    let squareY = Math.floor(col/3)*3
    //计算当前在第几个小方块
    for(let i=0;i<9;i++){
        if(board[row][i]===k) return false
        if(board[i][col]===k) return false
        if(board[squareX+Math.floor(i/3)][squareY+Math.floor(i%3)]===k) return false
    }
    return true
}
// @lc code=end

