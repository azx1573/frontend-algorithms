# [判断数组中是否存在重复元素-力扣 217](https://leetcode.cn/problems/contains-duplicate/description/)

给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。

示例 1：

输入：nums = [1,2,3,1]

输出：true

解释：

元素 1 在下标 0 和 3 出现。

示例 2：

输入：nums = [1,2,3,4]

输出：false

解释：

所有元素都不同。

示例 3：

输入：nums = [1,1,1,3,3,4,3,2,4,2]

输出：true

提示：

1 <= nums.length <= 105
-109 <= nums[i] <= 109

# 题目解读

判断数组中是否有重复元素,存在两个及以上则为存在返回 true，否则为 false

# 解题思路

1. 使用 Set 存储数据
2. 判断 Set 中有没有当前元素
3. 如果有则代表数组中有重复元素返回 true,否则如果没有则将当前元素存入 Set
4. 循环结束如果没有 true 则为 false
