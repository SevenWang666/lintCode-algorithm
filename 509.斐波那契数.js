/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
//递归
// var fib = function(N) {
//     if(N===1){
//         return 1
//     }else if(N===0){
//         return 0
//     }
//     return fib(N-1)+fib(N-2)
// };
//自底向上，并存储已计算的值
var fib = function(N) {
    let temporary = [0,1]
    for(let i=0;i<N-1;i++){
        temporary[i+2] = temporary[i+1]+temporary[i]
    }
    return temporary[N]
};

// @lc code=end

