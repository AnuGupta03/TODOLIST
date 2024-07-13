let taskInputs = document.getElementById('taskInput');
let addTasks = document.getElementById('addTask');
let taskLists = document.getElementById('taskList');
addTasks.addEventListener('click', function(){
    const paragraph = document.createElement('p');
    paragraph.innerText = taskInputs.value;
    taskLists.appendChild(paragraph);
    taskInputs.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener('dblclick', function(){
        taskLists.removeChild(paragraph);
    })

})

