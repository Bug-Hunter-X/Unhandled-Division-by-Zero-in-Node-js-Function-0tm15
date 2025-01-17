# Unhandled Division by Zero in Node.js

This repository demonstrates a common error in Node.js: unhandled division by zero. The `bug.js` file contains a function that does not properly handle the case where the divisor is zero, resulting in an error. The `bugSolution.js` file provides a corrected version of the function.

## How to reproduce

1. Clone this repository.
2. Run `node bug.js`.

You will observe that the program throws an error due to division by zero.

## Solution

The corrected version in `bugSolution.js` adds explicit checks to avoid division by zero.  This robust handling prevents runtime errors.
