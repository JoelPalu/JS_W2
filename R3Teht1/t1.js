// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const list = document.querySelector('#todo-list');
for (const task of todoList) {
  list.insertAdjacentHTML('beforeend', `<li><input type="checkbox" id="task-${task.id}" ${task.completed ? 'checked' : ''}><label>${task.task}</label></li>`);
}
