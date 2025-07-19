export const isPrimeNumber = (n) => {
    if (n <= 1) {
        return false;
    }
    if (n === 2 || n === 3) {
        return true;
    }
    for (let i = 4; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};
