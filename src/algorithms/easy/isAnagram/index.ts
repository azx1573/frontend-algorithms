/**
 * 有效的字母异位词
 */

/**
 * 给定两个字符串 s 和 t，编写一个函数来判断 t 是否是 s 的 字母异位词
 * 方法一：排序后比较
 * 思路：将字符串转为数组，排序后再转为字符串，比较两个字符串是否相等
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(1)
 * @param s string
 * @param t string
 * @returns boolean
 */
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let sString = s.split("").sort().join("");
  let tString = t.split("").sort().join("");

  return sString === tString;
}

/**
 * 方法二：哈希表
 * 思路：遍历字符串 s 和 t，使用哈希表记录每个字符出现的次数，最后比较两个哈希表是否相等
 * 1. 如果 s 和 t 长度不相等，直接返回 false
 * 2. 如果 s 和 t 相等，直接返回 true
 * 3. 创建一个哈希表 map，遍历字符串 s 和 t，记录每个字符出现的次数
 * 4. 第一个字符串 s，map 中对应字符的值加 1，第二个字符串 t，map 中对应字符的值减 1
 * 5. 最后判断 map 中所有的值是否都为 0，如果是则返回 true，否则返回 false
 * @param s string
 * @param t string
 * @returns boolean
 */
export function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  if (s === t) return true;

  const map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    map.set(t[i], (map.get(t[i]) || 0) - 1);
  }
  return [...map.values()].every((value) => value === 0);
}

// test cases for isAnagram function
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("a", "a")); // true
console.log(isAnagram("ab", "a")); // false
console.log(isAnagram("aacc", "ccac")); // false

console.log(isAnagram2("anagram", "nagaram")); // true
console.log(isAnagram2("rat", "car")); // false
console.log(isAnagram2("a", "a")); // true
console.log(isAnagram2("ab", "a")); // false
console.log(isAnagram2("aacc", "ccac")); // false
