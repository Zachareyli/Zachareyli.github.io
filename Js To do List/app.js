//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener('click', addTodo);

todoList.addEventListener('click', deleteCheck);


//Functions
function addTodo(event) {
   
   //Prevent Form from submitting
    event.preventDefault();

    //todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    //Create List
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    //Check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

     //Trash button
     const trashButton = document.createElement('button');
     trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);

     //Append to List
     todoList.appendChild(todoDiv);

     //clear to do input value
     todoInput.value = "";
}


function deleteCheck(e){
    const item = e.target;
    //Delete
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
//Checkmark
if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
}



}


