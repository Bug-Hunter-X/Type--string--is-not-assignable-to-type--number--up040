function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: string | number, b: string | number): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    return 0; // or handle the error appropriately
  }
  return numA + numB;
}

function subtractSafe(a: string | number, b: string | number): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    return 0; // or handle the error appropriately
  }
  return numA - numB;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(5, 3); // result2 is 2
let result3 = addSafe('5', '3'); // result3 is 8
let result4 = subtractSafe('5', 3); // result4 is 2
let result5 = addSafe('abc', 3); // result5 is 0

console.log(result1, result2, result3, result4, result5); // Output: 8 2 8 2 0