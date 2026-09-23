function combinations(amount, coins) {
    if (amount === 0) return 1;
    if (amount < 0 || coins.length === 0) return 0;

    const [first, ...rest] = coins;
    return combinations(amount - first, coins)
        + combinations(amount, rest);
}

const betrag = Number(process.argv[2] ?? 35);
console.log(combinations(betrag, [500, 200, 100, 50, 20, 10, 5]));