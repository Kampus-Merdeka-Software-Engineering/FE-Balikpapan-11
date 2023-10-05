const from = document.getElementById("from");
const input = document.getElementById("input");
const email = document.getElementById("email");
const number = document.getElementById("number");
const send = document.getElementById("send");
const itemContainer = document.getElementById("item-container");
const message = document.getElementById("message");

let todoData = [];

const uuid = function (){
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

const renderItem = (item) => {
    return `
    <div id="item-todo">
        <h3>${item.title}</h3>
        <p>${item.email}</p>
        <p>${item.number}</p>
        <p>${item.message}</p>
        <button id="delete" onclick="deleteItem('${item.id}')">Delete</button>
        </div>
    `
}
from.addEventListener("submit", (e) => {
  e.preventDefault(input, email, number, message);
  let newTodo = []
  if(input, email, number, message.value.length) {
    newTodo = [...todoData, 
        {
         id: uuid(),
         title: input.value,
         email: email.value,
         number: number.value,
         message: message.value,
         completed: false
        }
    ]
    localStorage.setItem("local", JSON.stringify(newTodo));
    todoData = JSON.parse (localStorage.getItem("local"));
    input, email ,number, message.value = "";
  }
});

const getData = () => {
  const storage = localStorage.getItem("local");
  if (storage) {
    todoData = JSON.parse(storage);
   let html = '';
   todoData.map(item => {
    html+= renderItem (item);

    })
    itemContainer.innerHTML = items;
  } else {
    localStorage.setItem("local", JSON.stringify([]));
  }
};

getData();
