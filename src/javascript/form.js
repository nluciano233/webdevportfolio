const form = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");
const formError = document.getElementById("form-error");
const formButtom = document.getElementById("contact-form-submit-button");
const sending = document.getElementById('sending');

formButtom.addEventListener("click", event => {
  sending.classList.remove('hide');

});

const sendMail = (mail) => {
   
  fetch("/send-form", {
    method: "post",
    body: mail,
  }).then(response => {
    // console.log(response);
    if (response.ok === true) {
      formSuccess.classList.remove("hide");
      sending.classList.add('hide');

      // reset form is message is successfully sent
      form.reset();
    } else {
      formError.classList.remove("hide");
      sending.classList.add('hide');
    };
    // return response.json();
  });
};

const formEvent = form.addEventListener("submit", event => {
  event.preventDefault();

  let mail = new FormData(form);

  sendMail(mail);
});
