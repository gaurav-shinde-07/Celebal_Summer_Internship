# Celebal Technologies – Assignment Week 6

## Overview

This assignment demonstrates a robust JavaScript utility function for retrieving the first element(s) from an array. The solution showcases best practices in JavaScript, including input validation, handling edge cases, and clear, maintainable code. The assignment is part of the Celebal Technologies Summer Internship program and focuses on practical problem-solving and clean implementation.

## Features

- **Flexible Retrieval:** Get either the first element or the first `n` elements from an array.
- **Input Validation:** Handles empty arrays, non-array inputs, and negative values gracefully.
- **Edge Case Handling:** Returns appropriate results for undefined, negative, or out-of-range parameters.
- **Clear Output:** Includes sample console outputs for demonstration and testing.

## Usage

1. Open `script.js` in your preferred code editor.
2. Run the script using Node.js:
    ```bash
    node script.js
    ```
3. Review the console output for various test cases:
    - `first([7, 9, 0, -2])` returns `7`
    - `first([], 3)` returns `[]`
    - `first([7, 9, 0, -2], 3)` returns `[7, 9, 0]`
    - `first([7, 9, 0, -2], 6)` returns `[7, 9, 0, -2]`
    - `first([7, 9, 0, -2], -3)` returns `[]`

## License

This project is for educational purposes