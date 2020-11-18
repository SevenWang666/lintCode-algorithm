/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let secondValue = {}
    for(let i=0;i<nums.length;i++){
       if(nums[i] in secondValue){
            return [secondValue[nums[i]],i]
       }else{
        secondValue[target-nums[i]] =i 
       }
    }

};
// @lc code=end

