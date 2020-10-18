// Botones continuar aprendiendo
const btnContinuaAprendiendo1 = document.getElementById('btnContinuaAprendiendo1');
const btnContinuaAprendiendo2 = document.getElementById('btnContinuaAprendiendo2');
const btnContinuaAprendiendo3 = document.getElementById('btnContinuaAprendiendo3');
const btnContinuaAprendiendo4 = document.getElementById('btnContinuaAprendiendo4');


// Botones container-aprendiendo
const containerIniciacurso1 = document.getElementById('container-quieroestarasegurado');
const containerIniciacurso2 = document.getElementById('container-iniciacurso2');
const containerIniciacurso3 = document.getElementById('container-iniciacurso3');
const containerIniciacurso4 = document.getElementById('container-iniciacurso4');
const containerIniciacurso5 = document.getElementById('container-iniciacurso5');

btnContinuaAprendiendo1.addEventListener('click',()=>{
    containerIniciacurso1.classList.replace('show','hide');
    containerIniciacurso2.classList.replace('hide','show');
})

btnContinuaAprendiendo2.addEventListener('click',()=>{
    containerIniciacurso1.classList.replace('show','hide');
    containerIniciacurso2.classList.replace('show','hide');
    containerIniciacurso3.classList.replace('hide','show');
})

btnContinuaAprendiendo3.addEventListener('click',()=>{
    containerIniciacurso1.classList.replace('show','hide');
    containerIniciacurso2.classList.replace('show','hide');
    containerIniciacurso3.classList.replace('show','hide');
    containerIniciacurso4.classList.replace('hide','show');
})

btnContinuaAprendiendo4.addEventListener('click',()=>{
    containerIniciacurso1.classList.replace('show','hide');
    containerIniciacurso2.classList.replace('show','hide');
    containerIniciacurso3.classList.replace('show','hide');
    containerIniciacurso4.classList.replace('show','hide');
    containerIniciacurso5.classList.replace('hide','show');

})
