let counter;

//initialize counter with user input
function initCounter() {
    const start = parseInt(document.getElementById("startValue").value) || 0;
    counter = createCounter(start);
  document.getElementById("output").innerText = "Counter initialized at " + start;
}


// Run the counter function and display result
function runCounter() {
  if (!counter) {
    document.getElementById("output").innerText = "Please initialize the counter first!";
    return;
  }
  const value = counter();
  document.getElementById("output").innerText = "Counter value: " + value;
}

// Core logic from challenge
function createCounter(n) {
  let current = n;
  return function() {
    return current++;
  };
}

// Export for browser demo consistency
function solve() { return "Use the buttons above to test the counter."; }