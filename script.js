document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(){
        const taskText = taskInput.value.trim();
        if(taskText == ''){
            alert('Please enter a task.');
            return;
        }else{
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            const RemoveButton = document.createElement('button');
            RemoveButton.textContent = 'Remove';
            RemoveButton.className = 'remove-btn';
            RemoveButton.addEventListener('click', function(){
                taskList.removeChild(listItem);
            }) 
            listItem.appendChild(RemoveButton);
            taskList.appendChild(listItem);
            taskInput.value = '';
        }

    }
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            addTask();
        }
})
});
