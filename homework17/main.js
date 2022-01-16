const submit_todo_btn = document.getElementById('submit_todo');
const todo_title_input = document.getElementById('todo_title');
const todo_description_text_area = document.getElementById('todo_description');
const todos_container = document.querySelector('.main-wrapper__todos');
const todos = [];

const renderTodos = arrayTodos => {
  todos_container.innerHTML = null;

  arrayTodos.forEach((element, i) => {
    const todo_container = document.createElement('div');
    const todo_title = document.createElement('h3');
    const todo_description = document.createElement('p');
    const todo_delete = document.createElement('button' );

    todo_title.innerText = element.title;
    todo_description.innerText = element.description;

    todo_delete.onclick = () => {
      const userArr = arrayTodos.filter((item, index) => {
        return i !== index;
      });
      localStorage.setItem('todos', JSON.stringify(userArr));
      renderTodos(userArr);
    }

    todo_container.append(todo_title, todo_description,todo_delete);
    todos_container.append(todo_container);
    todo_delete.append('delete');
    todo_delete.classList.add('deleteBtn');
    });

}

const initApplication = () => {
  const existingTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
  console.log('initApplication', existingTodos);
  renderTodos(existingTodos);
}

submit_todo_btn.onclick = () => {
  const todo_container = document.createElement('div');
  const todo_title = document.createElement('h3');
  const todo_description = document.createElement('p');
  const todo_delete = document.createElement('button');
  todo_delete.classList.add('deleteBtn');

  const todo = {
    title: todo_title_input.value,
    description: todo_description_text_area.value,
  };

  console.log('todo',  todo);
  todo_title.innerText = todo.title;
  todo_description.innerText = todo.description;

  todo_container.append(todo_title, todo_description,todo_delete);
  todos_container.append(todo_container);

  const updatedTodos = [
    ...JSON.parse(localStorage.getItem('todos')) || [], todo
  ];

  const checkReplicas = updatedTodos.filter ((item, index, arr) => {
    return index === arr.findIndex(element => {
      return element.title === item.title
    });
  });

  localStorage.setItem('todos', JSON.stringify(checkReplicas));

initApplication();
}

const getInputs = () => {
  if (todo_title_input.value.length > 0 && todo_description_text_area.value.length > 0) {
    submit_todo_btn.removeAttribute('disabled');
  } else {
    submit_todo_btn.setAttribute('disabled', true);
  }
}

todo_title_input.oninput = () => {
  getInputs();
}

todo_description_text_area.oninput = () => {
  getInputs();
}

initApplication();
