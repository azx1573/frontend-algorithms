/**
 * Fizz Buzz
 */

/**
 * Fizz Buzz
 * 方案一：暴力法
 */
export function fizzBuzz(n: number): string[] {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}

/**
 * Fizz Buzz
 * 方案二：哈希
 */
export function fizzBuzz2(n: number): string[] {
  const result: string[] = [];
  const map = new Map<number, string>([
    [3, "Fizz"],
    [5, "Buzz"],
  ]);
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (const [key, value] of map) {
      if (i % key === 0) {
        str += value;
      }
    }

    if (!str) {
      str = i.toString();
    }
  }
  return result;
}

// test cases for fizzBuzz
console.log(fizzBuzz(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
console.log(fizzBuzz2(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13,"14","FizzBuzz"]
console.log(fizzBuzz(1)); // ["1"]
console.log(fizzBuzz2(1)); // ["1"]
