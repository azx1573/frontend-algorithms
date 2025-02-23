/**
 * 找出字符串中第一个不重复的字符
 * @param s 字符串
 */

/**
 * 方法一：使用哈希表
 * 时间负责度：O(n)
 * @param s
 * @returns
 */
function firstUniqChar(s: string): number {
  const map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.has(char)) {
      map.set(char, map.get(char)! + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}

/**
 * 方案二：使用 indexOf 和 lastIndexOf，找出第一个不重复的字符
 * 时间复杂度：O(n^2)
 * @param s
 * @returns
 */
function firstUniqChar2(s: string): number {
  let len = s.length;
  for (let i = 0; i < len; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
}

// test cases
firstUniqChar("leetcode"); // 0
firstUniqChar("loveleetcode"); // 2
firstUniqChar("aabb"); // -1
firstUniqChar2("leetcode"); // 0
firstUniqChar2("loveleetcode"); // 2
firstUniqChar2("aabb"); // -1
