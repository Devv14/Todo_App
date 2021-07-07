// document se woh element leke aao jisme todo input waali class ho
let todoInput=document.querySelector(".todo-input");

let addTodoButton=document.querySelector(".add-todo");
let todosList=document.querySelector(".todos-list");

function addTodo(){
 // console.log("Add todo button clicked !!!");
 let todo = todoInput.value;
 // console.log(todo);
 if(todo)
 {//todo != 0,"",false,undefined
  // empty li object made
   let listItem=document.createElement("li");
   listItem.classList.add("todo-item");
  // <li class="todo-item"></li>;

  let pTag=document.createElement("p");
  pTag.classList.add("todo");
  // <p class="todo"></p>;
  // innerHtml removes existing html and adds the reuired todo
  pTag.innerHTML=todo;

  let deleteButton=document.createElement("button");
  deleteButton.classList.add("delete-task");
  // <button class="delete-task"></button>;
  deleteButton.innerHTML="DELETE";

  listItem.append(pTag);
  listItem.append(deleteButton);

  console.log(listItem);

  todosList.append(listItem);

  todoInput.value="";
  // click is associated with the delete button even if the above function doesn't run
  deleteButton.addEventListener("click",function(event){
  event.target.parentNode.remove();
  })

 }
}
// events
// no need of event object here
addTodoButton.addEventListener( "click", function(){
 addTodo();
})

// event object is always passed in the function
todoInput.addEventListener( "keypress" , function(e){
 if(e.key=="Enter")
 {
  // console.log("Enter was pressed !!!");
  addTodo();
 }
})