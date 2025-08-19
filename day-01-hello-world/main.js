// Solution function
function createHelloWorld() {
  return function (...args) {
    return "Hello World";
  };
}

// Solve function hooked to button
function solve() {
  const f = createHelloWorld();
  const input = document.getElementById("argsInput").value;

  let args = [];
  try {
    args = JSON.parse(input);
    if (!Array.isArray(args)) args = [args];
  } catch (e) {
    if (input.trim()) args = [input];
  }

  const result = f(...args);
  document.getElementById("output").innerText = result;
}

// Make solve available to the inline onclick handler
window.solve = solve;
