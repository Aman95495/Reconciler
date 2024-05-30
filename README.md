# Reconciler

This repository contains a simplified example of how React's reconciliation process works. The code demonstrates how the DOM is updated efficiently by comparing the previous and current states of data, only making necessary updates to the DOM.

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Code Explanation](#code-explanation)
- [Reconciliation Process](#reconciliation-process)
- [Running the Code](#running-the-code)

## Introduction

In React, the reconciliation process is a key feature that makes updates to the DOM efficient. This example illustrates how we can implement a similar mechanism using plain JavaScript. By comparing the previous and current states, we can minimize the number of DOM manipulations required, thereby improving performance.

## Getting Started

To get started, clone this repository and open the `index.html` file in your browser.

```sh
git clone https://github.com/yourusername/react-reconciliation-example.git
cd react-reconciliation-example
open index.html
```

## Code Explanation

The code is divided into two main parts: the initial rendering and the subsequent updates based on state changes.

### Initial Rendering

The initial state (`todo_now`) is defined, and the `createDomElement` function is called to render the elements in the DOM.

```javascript
document.addEventListener('DOMContentLoaded', (event) => {
    let todo_prev = [];
    let todo_now = [
        {"id":10857341,"title":"Lunch","completed":false,"description":"From 12 - 1 pm"},
        {"id":5571751,"title":"Dinner","completed":false,"description":"From 8-10 pm"},
        {"id":5571753,"title":"Coffee","completed":false,"description":"9pm"},
        {"id":1567561,"title":"Web Development","completed":true,"description":"From 6-7 am"},
        {"id":1567562,"title":"Web Development","completed":true,"description":"From 6-7 am"},
        {"id":7896546,"title":"Js","completed":true,"description":"from 10-12 am"}
    ];
    createDomElement(todo_prev, todo_now);
```

### Subsequent Updates

After 5 seconds, the state changes, and the `createDomElement` function is called again to reconcile the differences between the previous and current states.

```javascript
    setTimeout(() => {
        todo_prev = todo_now;
        todo_now = [
            {"id":5571753,"title":"Coffee","completed":false,"description":"9pm"},
            {"id":1567561,"title":"Web Development","completed":true,"description":"From 6-7 am"},
            {"id":1567562,"title":"Web Development","completed":true,"description":"From 6-7 am"},
            {"id":7896546,"title":"Js","completed":true,"description":"from 10-12 am"},
            {"id":7896547,"title":"Js","completed":true,"description":"from 10-12 am"},
            {"id":7896548,"title":"Js","completed":true,"description":"from 10-12 am"},
            {"id":7896549,"title":"Js","completed":true,"description":"from 10-12 am"},
            {"id":7896550,"title":"Js","completed":true,"description":"from 10-12 am"}
        ];
        createDomElement(todo_prev, todo_now);
    }, 5000);
});
```

### Reconciliation Process

The `createDomElement` function performs the following steps:

1. **Deletion of Unneeded Elements**: It removes elements that are no longer present in the current state (`data_now`).

    ```javascript
    for(let i = 0; i < data_prev.length; i++) {
        let ispresent = data_now.find(item => item.id == data_prev[i].id);
        if(!ispresent) {
            let identity = `${data_prev[i].id}`;
            parentElement.removeChild(document.getElementById(identity));
        }
    }
    ```

2. **Addition of New Elements**: It adds elements that are present in the current state but not in the previous state.

    ```javascript
    for(let i = 0; i < data_now.length; i++) {
        let ispresent = data_prev.find(item => item.id == data_now[i].id);
        if(!ispresent) {
            let childElement = document.createElement('div');
            childElement.id = `${data_now[i].id}`;

            let grandchildElement1 = document.createElement('span');
            grandchildElement1.innerHTML = data_now[i].id;
            let grandchildElement2 = document.createElement('span');
            grandchildElement2.innerHTML = data_now[i].title;
            let grandchildElement3 = document.createElement('span');
            grandchildElement3.innerHTML = data_now[i].description;
            let grandchildElement4 = document.createElement('span');
            grandchildElement4.innerHTML = data_now[i].completed;

            childElement.appendChild(grandchildElement1);
            childElement.appendChild(grandchildElement2);
            childElement.appendChild(grandchildElement3);
            childElement.appendChild(grandchildElement4);

            parentElement.appendChild(childElement);
        }
    }
    ```

3. **Updating Existing Elements**: It updates elements that are present in both states if their content has changed.

    ```javascript
    for(let i = 0; i < data_now.length; i++) {
        let prevItem = data_prev.find(item => item.id == data_now[i].id);
        if(prevItem) {
            let childElement = document.getElementById(`${data_now[i].id}`);
            let grandchildElements = childElement.getElementsByTagName('span');
            let updated = false;

            if(grandchildElements[0].innerHTML != data_now[i].id) {
                grandchildElements[0].innerHTML = data_now[i].id;
                updated = true;
            }
            if(grandchildElements[1].innerHTML != data_now[i].title) {
                grandchildElements[1].innerHTML = data_now[i].title;
                updated = true;
            }
            if(grandchildElements[2].innerHTML != data_now[i].description) {
                grandchildElements[2].innerHTML = data_now[i].description;
                updated = true;
            }
            if(grandchildElements[3].innerHTML != data_now[i].completed) {
                grandchildElements[3].innerHTML = data_now[i].completed;
                updated = true;
            }

            if (updated) {
                console.log(`Element with id ${data_now[i].id} updated.`);
            }
        }
    }
    ```

## Running the Code

To see the code in action, simply open `index.html` in a web browser. The initial state will be rendered, and after 5 seconds, the state will change, triggering the reconciliation process.

## Conclusion

This example provides a basic understanding of how React's reconciliation process works. By comparing previous and current states, unnecessary DOM manipulations are avoided, leading to more efficient updates.
