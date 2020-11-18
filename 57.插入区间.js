/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let left = newInterval[0]
    let right = newInterval[1]
    let placed = false
    let list = []
    for(let i=0;i<intervals.length;i++){
        if(intervals[i][0]>right){
            if(!placed){
                list.push([left,right])
                placed = true
            }
            list.push(intervals[i])
        }else if(intervals[i][1]<left){
            list.push(intervals[i])
        }else{
            left=Math.min(intervals[i][0],left)
            right=Math.max(intervals[i][1],right)
        }
    }
    if(!placed){
        list.push([left,right])
    }
    return list
};
// @lc code=end

