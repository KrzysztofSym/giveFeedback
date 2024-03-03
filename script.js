// const inputName = document.getElementById('input-name');
// const inputEmail = document.getElementById('input-email');
const inputMessage = document.getElementById('input-message');
const button = document.querySelector('.submit-button');
// const regEx = /\S+@\S+\.\S+/; 
// string, white-space, @ , white-space, dot, white-space, value, string //
const form = document.querySelector('.form');

document.getElementById('input-message').addEventListener('input', validateForm);


function validateForm(){
    // if (inputName.value !== "" && regEx.test(inputEmail.value) && inputMessage.value !== ""){
    if (inputMessage.value !== ""){
       button.style.backgroundColor = '4b8aa7';
       button.disabled = false;
    } else {
       button.style.backgroundColor = '#c5dce7';
       button.disabled = true;
    }
}
form.addEventListener('submit', function(event){
     event.preventDefault();
     alert("Thank you for your feedback");
     console.log("submitted");
})
