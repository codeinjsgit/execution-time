const { performance } = require('perf_hooks');
const t1 = performance.now();
let sum = 0;
const calculateSum = () => {
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(`Total sum: ${sum}`);
}
calculateSum();
const t2 = performance.now();
const result = t2 - t1;
console.log(`Execution time: ${result} milliseconds`);

// Output
// Total sum: 5050
// Execution time: 6.3709999322891235 milliseconds

