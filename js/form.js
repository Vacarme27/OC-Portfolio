const form =document.querySelector("#form");
const submitBtn =document.querySelector(".submit-btn");
const nameInput =document.querySelector("#nom");
const emailInput =document.querySelector("#email");
const messageInput =document.querySelector("#message");

const publicKey = "JBmg6k3zYJthf6bue";
const serviceId = "service_0dgvubb";
const templateID = "template_9y8wcco";

emailjs.init(publicKey);

form.addEventListener("submit", e =>{
    e.preventDefault();
    submitBtn.innerText= "Juste un instant ...";
    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
    }
    emailjs.send(serviceId, templateID, inputFields)
    .then(function(response) {
        console.log('E-mail envoyé avec succès', response);
        submitBtn.innerText = "Message envoyé !";
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    })
    .catch(function(error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail', error);
        submitBtn.innerText = "Le message n'a pas pu être envoyé";
    });
});


