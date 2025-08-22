let counter = null;

function createCounter(init) {
    let currentValue = init;
    return {
        increment: () => ++currentValue,
        decrement: () => --currentValue,
        reset: () => (currentValue = init)
    };
}

function setupCounter() {
    const initValue = parseInt(document.getElementById("init").value);
    counter = createCounter(initValue);
    document.getElementById("controls").style.display = "block";
    document.getElementById("output").innerText = `Counter initialized at ${initValue}`;
}

function run(action) {
    if (!counter) return;
    const result = counter[action]();
    document.getElementById("output").innerText = `Result: ${result}`;
}

// ❌ REMOVE this line (was for LeetCode/Node.js)
// export function solve(init, calls) {
//     const counter = createCounter(init);
//     return calls.map(call => counter[call]());
// }

