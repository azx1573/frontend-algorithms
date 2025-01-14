# Excel 表列序号-171

## 题目要求

给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回 该列名称对应的列序号 。

例如：

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...

示例 1:

输入: columnTitle = "A"
输出: 1
示例 2:

输入: columnTitle = "AB"
输出: 28
示例 3:

输入: columnTitle = "ZY"
输出: 701

提示：

1 <= columnTitle.length <= 7
columnTitle 仅由大写英文组成
columnTitle 在范围 ["A", "FXSHRXW"] 内

## 解题思路

将 26 进制转换为 10 进制

- A 的 ASCII 码为 65，B 的 ASCII 码为 66，...，Z 的 ASCII 码为 90，如果想要得到 A-Z 的序号，只需要将其 ASCII 码减去 64 即可
- 每次处理当前字符时，将结果乘以 26，再加上当前字符的值

** 关于为啥要乘以 26 的解释 **

- 在将 26 进制数转换为 10 进制数的过程中，我们需要考虑每个字符的位置权重。就像在将十进制数展开时，每个数字的位置都有一个权重，
- 例如对于十进制数 123，它可以表示为 1 _ 10^2 + 2 _ 10^1 + 3 \* 10^0。同样，对于 26 进制数，我们需要考虑 26 的幂次
- 例如对于 26 进制数 "AB"，它可以表示为 1 _ 26^1 + 2 _ 26^0。