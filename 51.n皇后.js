/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let ret=[];
    function find(row,tmp=[]){
        if(row===n){
            let array=[]
            tmp.forEach(col=>{
                let list = new Array(n).fill('.')
                list[col]='Q'
                array.push(list.join(''))
            })
            ret.push(array)
        }

        for(let col=0;col<n;col++){
            let canset = tmp.some((coltmp,rowtmp)=>{
                return coltmp===col||rowtmp===row||coltmp-rowtmp===col-row||coltmp+rowtmp===col+row
            })
            if(canset){
                continue
            }
            find(row+1,[...tmp,col])
        }
    }
    find(0)
    return ret
};
// @lc code=end

