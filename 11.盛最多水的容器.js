/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height && height.length <= 1) return 0;
  let min = 0;
  let max = height.length-1;
  let area = 0;
  while (min < max) {
    if (height[min] < height[max]) {
      if (area < height[min] * Math.abs(max - min)) {
        area = height[min] * Math.abs(max - min);
      }
      min++;
    } else {
      if (area < height[max] * Math.abs(max - min)) {
        area = height[max] * Math.abs(max - min);
      }
      max--;
    }
  }
  console.log(area)
  return area;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// @lc code=end
