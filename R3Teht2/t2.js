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

const mainList = document.querySelector('#todo-list');
// add your code here
for (const task of todoList) {
  const newList = document.createElement('li');
  const newInput = document.createElement('input');
  newInput.type = 'checkbox';
  newInput.id = `task-${task.id}`;
  newInput.checked = task.completed;
  const newLabel = document.createElement('label');
  newLabel.textContent = task.task;
  newList.appendChild(newInput);
  newList.appendChild(newLabel);
  mainList.appendChild(newList);
}
