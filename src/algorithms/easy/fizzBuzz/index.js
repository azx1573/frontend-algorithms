"use strict";
/**
 * Fizz Buzz
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fizzBuzz = fizzBuzz;
exports.fizzBuzz2 = fizzBuzz2;
/**
 * Fizz Buzz
 * 方案一：暴力法
 */
function fizzBuzz(n) {
    var result = [];
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            result.push("Fizz");
        }
        else if (i % 5 === 0) {
            result.push("Buzz");
        }
        else {
            result.push(i.toString());
        }
    }
    return result;
}
/**
 * Fizz Buzz
 * 方案二：哈希
 */
function fizzBuzz2(n) {
    var result = [];
    var map = new Map([
        [3, "Fizz"],
        [5, "Buzz"],
    ]);
    for (var i = 1; i <= n; i++) {
        var str = "";
        for (var _i = 0, map_1 = map; _i < map_1.length; _i++) {
            var _a = map_1[_i], key = _a[0], value = _a[1];
            if (i % key === 0) {
                str += value;
            }
        }
        if (!str) {
            str = i.toString();
        }
        result.push(str);
    }
    return result;
}
// test cases for fizzBuzz
console.log(fizzBuzz(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
console.log(fizzBuzz2(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13,"14","FizzBuzz"]
console.log(fizzBuzz2(1)); // ["1"]
console.log(fizzBuzz2(1)); // ["1"]
