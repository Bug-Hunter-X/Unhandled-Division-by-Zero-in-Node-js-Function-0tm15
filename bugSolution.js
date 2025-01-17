```javascript
function myFunction(a, b) {
  if (b === 0) {
    return Infinity; // Or another appropriate value like NaN, or throw error
  } else if (a === 0) {
    return 0;
  }
  return a / b; 
}

console.log(myFunction(10, 0)); // Returns Infinity
console.log(myFunction(0, 10)); // Returns 0
console.log(myFunction(10, 2)); // Returns 5
```