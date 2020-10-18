const asistenteAlita = document.getElementById('asistente-alita');
const asistenteDalton = document.getElementById('asistente-dalton');

// Formularios
const grancontainer = document.getElementById('grancontainer');
const formRegistro = document.getElementById('form-registro');
// Botones
const btnUneteaBBVA = document.getElementById('btnUneteaBBVA');

btnUneteaBBVA.addEventListener('click', ()=>{
    console.log("ocultate form");
    window.open("formRegistro.html");
})



// inputEmailRegistro.addEventListener('input',()=>{
//     let expresionemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     let expresionPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
//     const inputEmailRegistro = document.getElementById('inputEmailRegistro');
//     // const isEmail = value => (expresionemail.test(value));
//     const isPassword = value => (expresionPassword.test(value));

//     if(isPassword(inputEmailRegistro)){
//         console.log("Es password correcto");      
//     }
//     else{
//         console.log("password incorrecto");
//     } 
// })