# 轮转数组（力扣 189）

给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

示例 1:

输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]
示例 2:

输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释:
向右轮转 1 步: [99,-1,-100,3]
向右轮转 2 步: [3,99,-1,-100]

# 题目解读

1. 设定数组长度不变
2. 数组所有元素整体向某个方向(比如向右)移动 k 步，超出数组的部分从头开始重新依次排队
3. 当 k 跟数组长度一样时，即代表所有元素重新移动了数组长度后又重新排队，因此当 k = length 时相当于不轮转
4. 因此不管 k 为多少步，整体相当于是 length 的整数倍余出来的步长，因此我们可以用 k 跟 length 取余重新设置为步长
5. 综上：最终的 k 值始终是小于 length 的

# 解题思路

1. k 跟 length 取余重新设置步长
2. 当 k 为 0 时返回原数组
3. 截取 -k 位置到结尾的元素(即会超出的部分元素)放到数组首尾