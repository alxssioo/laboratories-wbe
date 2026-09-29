const G = (1 + Math.sqrt(5)) / 2;
const H = (1 - Math.sqrt(5)) / 2;
const cache = new Map();

function fibonacciBinet(num) {
    assert(num)
    return Math.round((Math.pow(G, num) - Math.pow(H, num)) / Math.sqrt(5));
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  if (cache.has(n)) {
    return cache.get(n);
  }

  const result = fibonacci(n - 1) + fibonacci(n - 2);
  cache.set(n, result);

  return result;
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
console.time("fibonacci")
console.log(fibonacci(number))
console.timeEnd("fibonacci")