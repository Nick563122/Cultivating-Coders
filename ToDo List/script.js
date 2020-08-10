let input = document.querySelector("input");
let button = document.querySelector("button");
let body = document.querySelector("body");


button.addEventListener("click", function storeTask(){

    let task = input.value;
    let taskContainer = document.createElement("div");
    let taskList = document.createElement("span");
    taskList.innerText = task;
    let removeTask = document.createElement("span");

    removeTask.innerText = "X";
    removeTask.style.color = "red";
    removeTask.style.marginLeft = "20px";
    removeTask.style.cursor = "pointer";

    removeTask.addEventListener("click", function removeTask() {

        document.body.removeChild(taskContainer);
    })

    let checkTask = document.createElement("span");
    checkTask.innerText = "✓";
    checkTask.style.marginRight = "25px";
    checkTask.style.color = "green";
    checkTask.style.cursor = "pointer";
    
    checkTask.addEventListener("click", function strikeTask(){
       
        taskList.style.textDecoration = "line-through";

    

    })

    taskContainer.appendChild(checkTask);
    taskContainer.appendChild(taskList);
    taskContainer.appendChild(removeTask);

    document.body.appendChild(taskContainer);
});