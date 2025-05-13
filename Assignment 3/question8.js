const repeatedSum = (num) => {
    while (num >= 10) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
}

console.log(repeatedSum(456)); // 6
console.log(repeatedSum(789)); // 6
console.log(repeatedSum(99)); // 9