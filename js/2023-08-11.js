function getDivisorsCnt(n) {
    let divisors = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (n / i === i) {
                divisors += 1;
            } else {
                divisors += 2;
            }
        }
    }
    return divisors;
}