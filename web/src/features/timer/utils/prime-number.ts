export const isPrimeNumber1 = (n: number): boolean => {
    if (n <= 1 || !Number.isInteger(n)) {
        return false;
    }
    if (n <= 3) {
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    for (let i = 5; i < n; i = i + 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

export const isPrimeNumber2 = (n: number): boolean => {
    if (n <= 1 || !Number.isInteger(n)) {
        return false;
    }
    if (n <= 3) {
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= n; i = i + 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
};
