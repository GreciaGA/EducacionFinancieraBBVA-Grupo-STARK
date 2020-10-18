
// formulario Registro - Input
let inputNombreRegistro = document.getElementById('inputNombreRegistro').value;
let inputCelularRegistro = document.getElementById('inputCelularRegistro').value;
let inputDniRegistro = document.getElementById('inputDniRegistro').value;
let inputEmailRegistro = document.getElementById('inputEmailRegistro').value;
let inputPasswordRegistro = document.getElementById('inputPasswordRegistro').value;
let inputConfirmPasswordRegistro = document.getElementById('inputConfirmPasswordRegistro').value;
// Botón
const formBtnregistrar = document.getElementById('form-registro-btnregistrar');

formBtnregistrar.addEventListener('click',()=>{
    inputNombreRegistro = "";
    inputCelularRegistro = "";
    inputDniRegistro = "";
    inputEmailRegistro = "";
    inputPasswordRegistro = "";
    inputConfirmPasswordRegistro = "";
    window.open("quieroestarasegurado.html");
   
})
