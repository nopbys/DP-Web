let isTasksLoaded = false;

$(document).ready(function() {
  const taskList = $('#ft_list');
  if (!isTasksLoaded) {
    loadTasks();
    isTasksLoaded = true;
  }
  $('#button').click(function() {
    const taskText = prompt('Enter a new task:');
    if (taskText) {
      addTask(taskText);
      saveTasks();
    }
  });
  taskList.on('click', '.task', function() {
    const task = $(this);
    if (confirm('Do you want to delete this task?')) {
      task.remove();
      saveTasks();
    }
  });
});
function addTask(taskText) {
  const task = $('<div class="task"></div>').text(taskText);
  $('#ft_list').prepend(task);
}
function saveTasks() {
  const tasks = [];
  $('#ft_list').children().each(function() {
    tasks.push($(this).text());
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks) {
    tasks.reverse().forEach(function(taskText) {
      addTask(taskText);
    });
  }
}