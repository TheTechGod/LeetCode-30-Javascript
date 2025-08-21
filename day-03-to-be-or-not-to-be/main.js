// Core challenge function
function expect(val) {
  return {
    toBe: function(otherVal) {
      if (val === otherVal) return true;
      throw new Error("Not Equal");
    },
    notToBe: function(otherVal) {
      if (val !== otherVal) return true;
      throw new Error("Equal");
    }
  }
}

// Browser demo handlers
function runToBe() {
  clearMessages();
  try {
    const v1 = document.getElementById("value1").value;
    const v2 = document.getElementById("value2").value;
    const result = expect(v1).toBe(v2);
    document.getElementById("output").innerText = "Result: " + result;
  } catch (err) {
    document.getElementById("error").innerText = "Error: " + err.message;
  }
}

function runNotToBe() {
  clearMessages();
  try {
    const v1 = document.getElementById("value1").value;
    const v2 = document.getElementById("value2").value;
    const result = expect(v1).notToBe(v2);
    document.getElementById("output").innerText = "Result: " + result;
  } catch (err) {
    document.getElementById("error").innerText = "Error: " + err.message;
  }
}

function clearMessages() {
  document.getElementById("output").innerText = "";
  document.getElementById("error").innerText = "";
}

// Export for consistency
function solve() { return "Use the buttons above to test expect()."; }

