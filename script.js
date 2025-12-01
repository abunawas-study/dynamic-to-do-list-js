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
      function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

    function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    if (Array.isArray(storedTasks)) {
      // Replace in-memory array with stored tasks
      tasks = storedTasks.slice();

      // Render each stored task: pass save = false to avoid saving again
      tasks.forEach(t => {
        addTask(t, false);
      });
    } else {
      tasks = [];
    }
  }

  // Event listeners
  addButton.addEventListener('click', function () {
    addTask();
  });

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Initialize by loading tasks from Local Storage
  

    addButton.addEventListener('click', addTask);
    classList.add('remove-btn');
    taskInput.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            addTask();
            
        }
})
    loadTasks();
});
