//Abgabe in wbe-01-power
export function power(base, exponent) {
    assert(base, exponent);
    const isBigInt = typeof base === "bigint" && typeof exponent === "bigint"


    if (!isBigInt) {
        if (exponent == 0) {
            return 1
        } else if (exponent % 2 == 0) {
            const half = power(base, exponent / 2);
            return half * half;
        } else {
            return base * power(base, exponent-1)
        }
    } else {
        if (exponent === 0n) {
            return 1n;
        } else if (exponent % 2n === 0n) {
            const half = power(base, exponent / 2n);
            return half * half;
        } else {
            return base * power(base, exponent - 1n);
        }
    }
}

function assert(base, exponent) {
    const bothNumbers = Number.isInteger(base) && Number.isInteger(exponent);
    const bothBigInts = typeof base === "bigint" && typeof exponent === "bigint";

    if (!bothNumbers && !bothBigInts) {
        throw new Error(
            `types of base (${typeof base}) and/or exponent (${typeof exponent}) are not allowed`,
        );
    }
    if (exponent < 0) {   // works for both 0 and 0n comparisons
        throw new Error(`Invalid input: exponent (${exponent}) must not be negative.`);
    }
}

const base = Number(process.argv[2]);
const exponent = Number(process.argv[3]);

console.log(power(base, exponent))