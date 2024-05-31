
let virtualDom = [];


let createDomElements = ()=>{
    let parentElement = document.getElementById("main_area");

    let currentChildren = Array.from(parentElement.children);

    let updated = 0, removed = 0, added = 0;

    virtualDom.forEach((element) => {
        let isprevpresent = currentChildren.find(item=>item.id == element.id);

        if(isprevpresent){
            updated++;
            isprevpresent.children[0].innerHTML =  element.title;
            isprevpresent.children[1].innerHTML =  element.description;

            currentChildren = currentChildren.filter((ele)=>{
                return ele !== isprevpresent;
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

            parentElement.appendChild(childElement);

        }
        
    });

    currentChildren.forEach((element)=>{
        let isstillpresent = virtualDom.find(item=>item.id == element.id);

        if(!(isstillpresent)){
            removed++;
            parentElement.removeChild(element);
        }
    });


    console.log("Updated :: ", updated);
    console.log("Added   :: ", added);
    console.log("Removed :: ", removed);
}



let updateVirtualDom = (data)=>{
    virtualDom = data.map((item)=>{
        let obj = {
            id: item.id,
            title: item.title,
            description: item.description
        }

        return obj;
    })

    createDomElements();
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
