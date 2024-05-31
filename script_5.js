
let virtualDom = [];


let createDomElements = (existingDOM, currentDOM)=>{
    let updated = 0, removed = 0, added = 0;

    currentDOM.forEach((element) => {
        let isprevpresent = existingDOM.find(item=>item.id == element.id);

        if(isprevpresent){
            updated++;
            let existingChild = document.querySelector(`[id='${element.id}']`);

            existingChild.children[0].innerHTML =  element.title;
            existingChild.children[1].innerHTML =  element.description;

            existingDOM = existingDOM.filter((ele)=>{
                return ele !== existingChild;
            })
        }

        else{
            added++;
            let childElement = document.createElement("div");
            childElement.setAttribute('id', element.id)

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

    existingDOM.forEach((element)=>{
        let isstillpresent = currentDOM.find(item=>item.id == element.id);

        if(!(isstillpresent)){
            removed++;
            let parentElement = document.getElementById("main_area");
            let existingChild = document.querySelector(`[id='${element.id}']`);
            parentElement.removeChild(existingChild);
        }
    });


    console.log("Updated :: ", updated);
    console.log("Added   :: ", added);
    console.log("Removed :: ", removed);
}



let updateVirtualDom = (data)=>{
    let existingDOM = [...virtualDom];

    virtualDom = data.map((item)=>{
        let obj = {
            id: item.id,
            title: item.title,
            description: item.description
        }

        return obj;
    })

    createDomElements(existingDOM, virtualDom);
}





document.addEventListener('DOMContentLoaded', (event)=>{
    setInterval(()=>{
        let todos = [];
        for (let i = 0; i<Math.floor(Math.random() * 100); i++) {
          todos.push({
            title: "Go to gym",
            description: "Go to gym form 5",
            id: i+1
          })
        }
      
        updateVirtualDom(todos);
    }, 2000);
})
