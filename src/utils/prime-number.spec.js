import { isPrimeNumber1, isPrimeNumber2 } from './prime-number';

describe('prime number utility', () => {
    describe('method #1 should works', () => {
        // 基础质数验证
        test.each([
            [2, true],
            [3, true],
            [5, true],
            [7, true],
            [11, true],
            [13, true],
            [17, true],
            [19, true],
            [23, true],
            [29, true],
            [9973, true], // 大质数
            [104729, true], // 第10000个质数
        ])('should return true for prime number %d', (num, expected) => {
            expect(isPrimeNumber1(num)).toBe(expected);
        });

        // 合数验证
        test.each([
            [4, false],
            [6, false],
            [8, false],
            [9, false],
            [10, false],
            [12, false],
            [15, false],
            [16, false],
            [18, false],
            [20, false],
            [21, false],
            [22, false],
            [24, false],
            [25, false], // 平方数
            [27, false], // 立方数
            [30, false],
            [32, false],
            [33, false],
            [34, false],
            [35, false],
            [36, false],
            [49, false], // 7²
            [121, false], // 11²
            [169, false], // 13²
            [289, false], // 17²
            [361, false], // 19²
            [529, false], // 23²
        ])('should return false for composite number %d', (num, expected) => {
            expect(isPrimeNumber1(num)).toBe(expected);
        });

        // 边界条件
        test.each([
            [0, false],
            [1, false],
            [-2, false],
            [-3, false],
            [2.5, false], // 非整数
            [3.14, false],
            [1000000, false], // 大合数
        ])('should handle edge cases for %d', (num, expected) => {
            expect(isPrimeNumber1(num)).toBe(expected);
        });

        // 性能测试（大质数）
        test('should return true for large prime 104729', () => {
            expect(isPrimeNumber1(104729)).toBe(true);
        });

        // 常见错误点测试
        test('should return false for 49 (7²)', () => {
            expect(isPrimeNumber1(49)).toBe(false);
        });

        test('should return false for 7919 (1000th prime)', () => {
            expect(isPrimeNumber1(7919)).toBe(true);
        });
    });

    describe('method #2 should works', () => {
        // 基础质数验证
        test.each([
            [2, true],
            [3, true],
            [5, true],
            [7, true],
            [11, true],
            [13, true],
            [17, true],
            [19, true],
            [23, true],
            [29, true],
            [9973, true], // 大质数
            [104729, true], // 第10000个质数
        ])('should return true for prime number %d', (num, expected) => {
            expect(isPrimeNumber2(num)).toBe(expected);
        });

        // 合数验证
        test.each([
            [4, false],
            [6, false],
            [8, false],
            [9, false],
            [10, false],
            [12, false],
            [15, false],
            [16, false],
            [18, false],
            [20, false],
            [21, false],
            [22, false],
            [24, false],
            [25, false], // 平方数
            [27, false], // 立方数
            [30, false],
            [32, false],
            [33, false],
            [34, false],
            [35, false],
            [36, false],
            [49, false], // 7²
            [121, false], // 11²
            [169, false], // 13²
            [289, false], // 17²
            [361, false], // 19²
            [529, false], // 23²
        ])('should return false for composite number %d', (num, expected) => {
            expect(isPrimeNumber2(num)).toBe(expected);
        });

        // 边界条件
        test.each([
            [0, false],
            [1, false],
            [-2, false],
            [-3, false],
            [2.5, false], // 非整数
            [3.14, false],
            [1000000, false], // 大合数
        ])('should handle edge cases for %d', (num, expected) => {
            expect(isPrimeNumber2(num)).toBe(expected);
        });

        // 性能测试（大质数）
        test('should return true for large prime 104729', () => {
            expect(isPrimeNumber2(104729)).toBe(true);
        });

        // 常见错误点测试
        test('should return false for 49 (7²)', () => {
            expect(isPrimeNumber2(49)).toBe(false);
        });

        test('should return false for 7919 (1000th prime)', () => {
            expect(isPrimeNumber2(7919)).toBe(true);
        });
    });
});
