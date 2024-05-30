let createDomElement = (data_prev, data_now) => {
    let parentElement = document.getElementById('main_area');

    // Deleting not needed elements
    for(let i = 0; i < data_prev.length; i++) {
        let ispresent = data_now.find(item => item.id == data_prev[i].id);

        if(!ispresent) {
            let identity = `${data_prev[i].id}`;
            parentElement.removeChild(document.getElementById(identity));
        }
    }

    // Adding new elements
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

    // Updating existing elements
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
}

document.addEventListener('DOMContentLoaded', (event) => {

    // Yeh first state hai
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

    // yeh state change ho gyi 5 sec baad 
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

















// let createDomElement = (data) => {
//     let parentElement = document.getElementById('main_area');
//     parentElement.innerHTML = "";

//     for(let i=0; i<data.length; i++){
//         let childElement = document.createElement('div');

//         let grandchildElement1 = document.createElement('span');
//         grandchildElement1.innerHTML = data[i].id;
//         let grandchildElement2 = document.createElement('span');
//         grandchildElement2.innerHTML = data[i].title;
//         let grandchildElement3 = document.createElement('span');
//         grandchildElement3.innerHTML = data[i].description;
//         let grandchildElement4 = document.createElement('span');
//         grandchildElement4.innerHTML = data[i].completed;


//         childElement.appendChild(grandchildElement1);
//         childElement.appendChild(grandchildElement2);
//         childElement.appendChild(grandchildElement3);
//         childElement.appendChild(grandchildElement4);


//         parentElement.appendChild(childElement);
//     }
// }



// document.addEventListener('DOMContentLoaded', (event)=>{
//     setInterval(()=>{
//         let todos = [];
//         for(let i=0; i<Math.floor(Math.random()*100); i++){
//             todos.push(
//                 { "id": 10857341, "title": "Lunch", "completed": false, "description": "From 12 - 1 pm" }
//             )
//         }
//         createDomElement(todos)
//     }, 1000)
// })
