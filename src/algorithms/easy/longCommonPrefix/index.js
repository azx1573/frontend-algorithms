/**
 * 实现一个获取字符串数组中最长公共前缀的函数，思路：
 * 将第一个字符作为公共前缀，然后遍历数组，如果不是以公共前缀开头，则将公共前缀减少一个字符，直到是以公共前缀开头
 * @param {} arr
 * @returns
 */

function longCommonPrefix(strs) {
  let prefix = strs[0];
  let firstLetter = prefix[0];
  let len = strs.length;

  if (!strs.length || !strs.every((item) => item.startsWith(firstLetter)))
    return "";

  for (let i = 1; i < len; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
}
