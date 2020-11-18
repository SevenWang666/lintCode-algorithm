/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let  len = nums.length
    let list = []
    if(len<3) return []
    nums.sort((left,right)=>left-right)
    for(let i=0;i<=len;i++){
        if(nums[i]===nums[i-1]) continue
        let left = i+1
        let right = len-1
        while(left<right){
            if(right===i){
                right--
            }else if(nums[left]+nums[right]+nums[i]===0){
                list.push([nums[left],nums[right],nums[i]])
                while(nums[left]===nums[left+1]){
                    left++
                }
                left++
                while(nums[right]===nums[right-1]){
                    right--
                }
                right--
            }else if(nums[left]+nums[right]+nums[i]>0){
                right--
            }else{
                left++
            }
        }
    }
    return list
};
// @lc code=end

