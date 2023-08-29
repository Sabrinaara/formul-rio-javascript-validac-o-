
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextArea = document.querySelector("message");


form.addEventListener("submit", (event) => {

    event.preventDefault();


    //Verificações (verificar se o nome está vazio)

    if(nameInput.value === "") {
        alert('Preencha o nome');
        return
    }

 // se o e-mail está preenchido   
else if(emailInput.value === "" || isEmailValid(emailInput.value)) {
    alert('Preencha o e-mail');
    return
}

// se a senha está preenchida
else if(!validatePassword(passwordInput.value, 8)) {
    alert('Preencha a senha corretamente');
   
    return;
}
//verificar a situação selecionada

if(jobSelect.value === "") {
    alert("por favor selecione sua situação");
    return;
}

// verificar a situação do campo de mensagem

if(messageTextArea.value === ""){
alert("deixe uma mensagem")
return;
}








// se tudo estiver preenchido, pode enviar
  form.submit();
});






//função para validar e-mail
function isEmailValid(email){
    const emailregex = new RegExp(
        /^[a-zA-Z0-9,_-]+@[a-zA-Z0-9,_-]+\.[a-zA-Z]{2,}$/
    );

if(emailregex.test(email)){
    return true
}
return false;
}




//função que valida a senha:

function validatePassword(password, minDigits){

    if(password.length >= minDigits) {
       
        return true
    }

    //senha invalida
    return false
}





















