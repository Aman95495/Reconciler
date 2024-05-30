let createDomElement = (data) => {
    let parentElement = document.getElementById('main_area');
    parentElement.innerHTML = "";

    for(let i=0; i<data.length; i++){
        let childElement = document.createElement('div');

        let grandchildElement1 = document.createElement('span');
        grandchildElement1.innerHTML = data[i].id;
        let grandchildElement2 = document.createElement('span');
        grandchildElement2.innerHTML = data[i].title;
        let grandchildElement3 = document.createElement('span');
        grandchildElement3.innerHTML = data[i].description;
        let grandchildElement4 = document.createElement('span');
        grandchildElement4.innerHTML = data[i].completed;


        childElement.appendChild(grandchildElement1);
        childElement.appendChild(grandchildElement2);
        childElement.appendChild(grandchildElement3);
        childElement.appendChild(grandchildElement4);


        parentElement.appendChild(childElement);
    }
}

document.addEventListener('DOMContentLoaded', (event)=>{
    setInterval(()=>{
        let todos = [];
        for(let i=0; i<Math.floor(Math.random()*100); i++){
            todos.push(
                { "id": 10857341, "title": "Lunch", "completed": false, "description": "From 12 - 1 pm" }
            )
        }
        createDomElement(todos)
    }, 1000)
})
