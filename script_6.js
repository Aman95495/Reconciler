let virtualDom = [];
let virtualDom5SecAgo = [];

let createDomElements = (oldDOM, newDOM) => {
    let updated = 0, removed = 0, added = 0;

    newDOM.forEach((element) => {
        let isPrevPresent = oldDOM.find(item => item.id == element.id);

        if (isPrevPresent) {
            updated++;
            let existingChild = document.querySelector(`[id='${element.id}']`);

            if (existingChild) {
                existingChild.children[0].innerHTML = element.title;
                existingChild.children[1].innerHTML = element.description;
            }

            oldDOM = oldDOM.filter(ele => ele.id !== element.id);
        } 
        
        else {
            added++;
            let childElement = document.createElement("div");
            childElement.setAttribute('id', element.id);

            let grandChildElement1 = document.createElement("span");
            grandChildElement1.innerHTML = element.title;

            let grandChildElement2 = document.createElement("span");
            grandChildElement2.innerHTML = element.description;

            let grandChildElement3 = document.createElement("button");
            grandChildElement3.innerHTML = "Delete";
            grandChildElement3.setAttribute('onclick', `deleteTodo(${element.id})`);

            childElement.appendChild(grandChildElement1);
            childElement.appendChild(grandChildElement2);
            childElement.appendChild(grandChildElement3);

            let parentElement = document.getElementById("main_area");
            parentElement.appendChild(childElement);
        }
    });

    oldDOM.forEach((element) => {
        let isStillPresent = newDOM.find(item => item.id == element.id);

        if (!isStillPresent) {
            removed++;
            let parentElement = document.getElementById("main_area");
            let existingChild = document.querySelector(`[id='${element.id}']`);
            if (existingChild) {
                parentElement.removeChild(existingChild);
            }
        }
    });

    console.log("Updated :: ", updated);
    console.log("Added   :: ", added);
    console.log("Removed :: ", removed);
};

let updateVirtualDom = (data) => {
    virtualDom = data.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description
    }));
};

document.addEventListener('DOMContentLoaded', (event) => {
    setInterval(() => {
        let todos = [];
        for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
            todos.push({
                title: "Go to gym",
                description: "Go to gym from 5",
                id: i + 1
            });
        }
        updateVirtualDom(todos);
    }, 200);

    setInterval(() => {
        createDomElements(virtualDom5SecAgo, virtualDom);
        virtualDom5SecAgo = [...virtualDom];
    }, 2000);
});
