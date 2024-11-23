/**
 * 实现一个获取字符串数组中最长公共前缀的函数
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
