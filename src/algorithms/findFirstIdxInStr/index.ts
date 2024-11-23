/**
 * 有两个字符串haystack和needle，在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标
 * @param {*} hayStack
 * @param {*} needle
 * @returns
 */
function findIdxInStr(hayStack: string, needle: string) {
  if (!needle || !hayStack) return -1;

  if (hayStack.includes(needle)) {
    return hayStack.indexOf(needle);
  }

  return -1;
}
