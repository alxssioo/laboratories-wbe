function factorial(n) {
    assert(n);
    const one = typeof n === "bigint" ? 1n : 1;
    let result = one;

    for (let i = one; i <= n; i += one) {
        result *= i;
    }

    return result;
}

function assert(n) {
    if (Number.isInteger(n) && n >= 0) {
        return;
    }

    if (typeof n === "bigint" && n >= 0n) {
        return;
    }

    throw new Error(
        `factorial is only defined for non-negative integers, but received ${n}`,
    );
}

const arg = process.argv[2] ?? "10n";
const n = arg.endsWith("n") ? BigInt(arg.slice(0, -1)) : Number(arg);
console.log(factorial(n))