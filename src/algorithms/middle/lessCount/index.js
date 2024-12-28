/**
 * 最少前缀操作次数：修改S的某一个字符，或者删除S末尾的字符。，最少需要多少次操作才能让让S变成T的前缀
 * 思路：
 * 1. 首先排除特殊情况，比如两数相等，以及第一个字符已经是第二个字符的前缀的情况
 * 2. 采用双指针解法，定义两个指针，分别控制两个字符串的遍历
 * 3. 只需考虑s字符串长度大于等于t字符串长度的情况，因为只匹配前缀
 * 4. 如果两个字符相等，无需任何操作继续遍历，两个指针后移
 * 5. 如果两个字符串不相等，则可以直接修改s字符，使其等于t字符当前的值，然后两个指针后移
 * 6. 当其中一个字符串遍历完成时循环结束，循环结束后s字符串如有剩余，直接删除，次数为s剩余的长度
 */
/**
 * 双指针解法
 * @param s string
 * @param t string
 * @returns number
 */
function lessCount(s, t) {
  //   做一个基本的检查
  if (s === t || t.startsWith(s)) return 0;
  var i = 0; // s的指针
  var j = 0; // t的指针
  var count = 0; // 计数器
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      // 如果相等，两个指针都往后移动
      i++;
      j++;
    } else {
      // 如果不相等，直接修改s的字符
      count++;
      j++;
      i++;
    }
  }
  //   如果s还有剩余的字符串，直接删除，次数为s剩余的长度
  if (i < s.length) {
    count += s.length - i; // 此时t已经遍历完了，所以s剩余的长度就是需要删除的次数
  }
  // t如果还有剩余的长度无需关注，因为只匹配前缀，这种情况只需修改s的字符即可，次数为s的长度
  return count;
}
// test cases
console.log(lessCount("aba", "abb")); // 1
console.log(lessCount("abcd", "efg")); // 4
console.log(lessCount("xyz", "xy")); // 1
console.log(lessCount("hello", "helloworld")); // 0
console.log(lessCount("same", "same")); // 0
console.log(lessCount("bbbabaaaaa", "baaabaaabaaaba")); // 3
