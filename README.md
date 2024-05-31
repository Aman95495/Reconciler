# Reconciler

In React, the reconciliation process is a key feature that makes updates to the DOM efficient. This example illustrates how we can implement a similar mechanism using plain JavaScript. By comparing the previous and current states, we can minimize the number of DOM manipulations required, thereby improving performance.

## Getting Started

To get started, clone this repository and open the `index.html` file in your browser.

```sh
git clone https://github.com/Aman95495/Reconciler.git
cd Reconciler
open index.html
```

## Files Explanation

1. **`script_1.js`**: This file demonstrates a very basic and inefficient way to modify DOM elements by erasing all the existing children first and then adding all the new children.

2. **`script_2.js`**: This file shows a more optimal approach by first finding the differences between the current DOM state and the previous DOM state and modifying the elements accordingly.

3. **`script_3.js`**: Similar to `script_2.js`, but with more clear and structured code for better understanding.

4. **`script_4.js`**: This file introduces the concept of a virtual DOM, but functions similarly to `script_3.js`.

5. **`script_5.js`**: This file demonstrates how to use virtual DOM elements to optimize the reconciliation process further.

6. **`script_6.js`**: This file showcases how to use batching to modify the DOM elements more optimally by updating them at certain intervals rather than immediately changing the DOM elements.


## Running the Code
To see the code in action, simply open index.html in a web browser and uncomment the line for the script you want to use.

## Conclusion

This example provides a basic understanding of how React's reconciliation process works. By comparing previous and current states, unnecessary DOM manipulations are avoided, leading to more efficient updates.
