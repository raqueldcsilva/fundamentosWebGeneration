let nome = window.document.getElementById("nome"); //duas formas de buscar um elemento
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector("#mapa") //Foi declarada aqui em cima, pois será usada tanto pela função zoom como pela normal

nome.style.width = "100%";
email.style.width = "100%";

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido";
        txtNome.style.color = "Red";
    } else{
        txtNome.innerHTML = "Nome Válido";
        txtNome.style.color = "green";
        nomeOk = true;
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf ("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail inválido";
        txtEmail.style.color = "red";
    } else{
        txtEmail.innerHTML = "E-mail válido";
        txtEmail.style.color= "green";
        emailOk = true;
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "O texto digitado é muito grande, digite apenas 100 caracteres";
        txtAssunto.style.color = "red";
        txtAssunto.style.display = "block";
    } else{
        txtAssunto.innerHTML = "Texto válido";
        txtAssunto.style.display = "none";
        assuntoOk = true;
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado com sucesso!")
    } else{
        alert("Preencha o formulário corretamente antes de enviar")
    }
}

function mapaZoom(){
    mapa.style.width = "800px";
    mapa.style.height = "600px";

}

function mapaNormal(){
    mapa.style.width = "400px";
    mapa.style.height = "250px";
}
