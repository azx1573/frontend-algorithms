# 判断两个字符串中的字母是否出现了相同次数

## 案例

- Input: abcd dcca -->Output `false`
- Input: abcd dbca -->Output `true`
- Input: abccde ccbdae -->Output `true`
- Input: abcd dba -->Output `false`
- Input: dba abcd -->Output `false`

## 思路

不管是哪种方案，首先需要排除两个字符串相等的情况以及长度不相等的情况

### 方案一：将两字符排序后比较

1. 首先将两个字符串进行排序
2. 比较排序后的值是否相等

### 方案二：使用哈希表

1. 同时遍历两个字符串，并将值存入哈希表
2. 哈希表中来自第一个字符串中的数值每次 + 1
3. 哈希表中来自第一个字符串中的数值每次 - 1
4. 最后哈希表每项都为 0 则代表字符数相同
