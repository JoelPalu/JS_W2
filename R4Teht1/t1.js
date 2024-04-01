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
showList();


const modal = document.createElement('div');
modal.className = 'modal';
modal.id = 'modal';
document.body.appendChild(modal);
modalSetup();

const addButton = document.querySelector('.add-btn');

addButton.addEventListener('click', () => {
  modal.style.display = 'block';
});


function newTask(task) {
  const newTaskObj = {
    id: todoList.length + 1,
    task: task,
    completed: false,
  };
  todoList.push(newTaskObj);
  console.log(newTaskObj.task + ' added');
}


function showList() {
  const mainList = document.querySelector('#todo-list');
  mainList.innerHTML = '';
  for (const task of todoList) {
    const newList = document.createElement('li');
    const newInput = document.createElement('input');
    newInput.type = 'checkbox';
    newInput.id = `task-${task.id}`;
    newInput.checked = task.completed;
    newInput.addEventListener('change', () => {
      task.completed = newInput.checked;
      console.log(task);
    });
    const newLabel = document.createElement('label');
    newLabel.textContent = task.task;
    const deleteInput = document.createElement('delete');
    deleteInput.type = 'button';
    deleteInput.className = 'delete-btn';
    deleteInput.textContent = 'Delete';
    deleteInput.addEventListener('click', () => {
      mainList.removeChild(newList);
      const index = todoList.findIndex((todo) => todo.id === task.id); // find the index of the task
      if (index !== -1) { // if the task was found
        todoList.splice(index, 1); // remove the task from the todoList array
        showList();
      }
      console.log(task.task + ' deleted');
    });
    newList.appendChild(newInput);
    newList.appendChild(newLabel);
    newList.appendChild(deleteInput);
    mainList.appendChild(newList);
  }
}

function modalSetup() {
  const close = document.createElement('span');
  close.className = 'close';
  close.textContent = 'x';
  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  modal.appendChild(close);
  const modal_content = document.createElement('div');
  modal_content.className = 'modal-content';

  const form = document.createElement('form');
  form.id = 'form';
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'task';
  input.required = true;
  input.placeholder = 'Add a new task';
  const submit = document.createElement('input');

  submit.type = 'submit';
  submit.value = 'Add';
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = document.querySelector('#task').value;
    newTask(task);
    showList();
  });
  form.appendChild(input);
  form.appendChild(submit);
  modal_content.appendChild(form);
  modal.appendChild(modal_content);
}
