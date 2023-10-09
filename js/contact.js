const form = document.querySelector("#form");
const inputName = document.querySelector("#input_name");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const message = document.querySelector("#message");
const sendBtn = document.querySelector("#send");

sendBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const data = {
    name: inputName.value,
    email: email.value,
    number: number.value,
    message: message.value,
  };

  fetch("https://be-balikpapan-11-production-223d.up.railway.app/contactus", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Terima kasih telah menghubungi kami");
      // reset form
      form.reset();
      console.log(data);
    })
    .catch((error) => console.error(error));

});

/* Animations contactus */
const fields = document.querySelectorAll('.field');

fields.forEach(field => {
  field.style.opacity = 0;
  field.style.transform = 'translateX(-100%)';
});

let delay = 1;
fields.forEach(field => {
  setTimeout(() => {
    field.style.opacity = 1;
    field.style.transform = 'translateX(0)';
  }, delay);
  delay += 500;
});

