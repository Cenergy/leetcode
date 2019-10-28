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
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const otherIndex = map.get(target - nums[i]);
    if (otherIndex !== undefined) return [otherIndex, i];
    map.set(nums[i], i);
  }
};
// @lc code=end
const a = twoSum([2, 7, 11, 15], 9);
console.log("Rd: a", a);
