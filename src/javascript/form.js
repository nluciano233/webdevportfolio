const form = document.getElementById("contact-form");

const sendMail = (mail) => {
   
  fetch("/send-form", {
    method: "post",
    body: mail,
  }).then(response => {
    return response.json();
  });
};

const formEvent = form.addEventListener("submit", event => {
  event.preventDefault();

  let mail = new FormData(form);

  sendMail(mail);
});
