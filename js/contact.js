
const input = document.getElementById("input");
const send = document.getElementById("send");
const itemContainer = document.getElementById("item-container");

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

const form = document.querySelector('#form');
    const inputName = document.querySelector('#input_name');
    const email = document.querySelector('#email');
    const number = document.querySelector('#number');
    const message = document.querySelector('#message');
    const sendBtn = document.querySelector('#send');

sendBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const data = {
  
    name: inputName.value,
    email: email.value,
    number: number.value,
    message: message.value
  };

  fetch('https://be-balikpapan-11-production-223d.up.railway.app/contactus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});
