console.time('sum');
let sum = 0;
const calculateSum = () => {
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(`Total sum: ${sum}`);
}
calculateSum();
console.timeEnd('sum');

// Output
// Total sum: 5050
// sum: 6.242ms

