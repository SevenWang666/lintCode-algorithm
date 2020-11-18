/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */ 
var combine = function(n, k) {
    let code = []
    function recursive( i,intermediate){
        if(intermediate.length==k){
            code.push(intermediate)
        }
        for(let j=i;j<=n;j++){
            if(intermediate.length>k){
                break
            }
            recursive(j+1,[...intermediate,j])
        }
    }
    recursive(1,[])
    return code
};
console.log(combine(4,2))
// @lc code=end

