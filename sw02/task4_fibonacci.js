const G = (1 + Math.sqrt(5)) / 2;
const H = (1 - Math.sqrt(5)) / 2;

function fibonacciBinet(num) {
    assert(num)
    return Math.round((Math.pow(G, num) - Math.pow(H, num)) / Math.sqrt(5));
}

function fibonacciRecursive(num) {
    assert(num)
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
    }
}

function assert(num) {
    if (Number.isInteger(num) && num >= 0) {
        return;
    }

    throw new Error(
        `Invalid input: ${num}. Please provide a non-negative integer.`
    )
}

const number = Number(process.argv[2] ?? 10);
console.time("fibonacciBinet");
console.log(fibonacciBinet(number))
console.timeEnd("fibonacciBinet");