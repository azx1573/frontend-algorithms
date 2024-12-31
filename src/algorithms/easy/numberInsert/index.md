# 小 U 的数字插入问题

## 问题描述

小 U 手中有两个数字 a 和 b。第一个数字是一个任意的正整数，而第二个数字是一个非负整数。她的任务是将第二个数字 b 插入到第一个数字 a 的某个位置，以形成一个最大的可能数字。

你需要帮助小 U 找到这个插入位置，输出插入后的最大结果。

## 测试样例

样例 1：

输入：a = 76543, b = 4
输出：765443

样例 2：

输入：a = 1, b = 0
输出：10

样例 3：

输入：a = 44, b = 5
输出：544

样例 4：

输入：a = 666, b = 6
输出：6666

## 解题思路

- 将两个数字转换为字符串
- 遍历第一个数字的每一位，将第二个数字插入到每一位的前面，然后将插入后的数字转换为数字