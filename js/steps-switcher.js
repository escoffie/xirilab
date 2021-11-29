let currentStepCount = 0;
const currentStep = document.querySelector('.current-step');
const stepsArray = document.querySelectorAll('.step');
const progressBarLiArray = document.querySelectorAll('.progressbar li');
const encabezadoH1 = document.querySelector('#encabezado h1');
const encabezadoP = document.querySelector('#encabezado p');
const navRegresar = document.querySelector('#nav-regresar');
const navContinuar = document.querySelector('#nav-continuar');
const mensajes = [{
    h1: "Selecciona tu color",
    p: "Haz clic sobre el color que te gusta. Puedes subir tu propia foto si lo deseas."
}, 
{
    h1: "Elige la base",
    p: "Haz clic sobre la base que te gusta. Se aplicará en todos los colores que tengas seleccionados."
}, {
    h1: "Ahora, la forma",
    p: "Haz clic sobre la forma de la bala. Opcionalmente, puedes añadir glitter."
},{
    h1: "Elige el aroma",
    p: "Haz clic sobre el aroma que más te guste."
},{
    h1: "¿Cómo se llamará",
    p: "¡Listo! Sólo falta que bautices tu creación."
},{
    h1: "Todo listo",
    p: "Revisa tu pedido. Si está todo como tú quieres, envíalo, o regresa por los pasos para hacer los cambios que quieras."
}];

const setStepsActive = (currentStepCount) => {
    progressBarLiArray.forEach( (li, i) => {
        li.classList.remove('active');
        if(i <= currentStepCount) {
            li.classList.add('active');
        }
    });
}

const replaceStep = (number) => {
    const toRemove = currentStep.children[0];
    let toAdd = null;
    toRemove.classList.remove('active');
    setTimeout(() => currentStep.removeChild(toRemove), 250);
    toAdd = currentStep.appendChild(stepsArray[number]);
    setTimeout(() => toAdd.classList.add('active'), 260);
    encabezadoH1.textContent = mensajes[number].h1;
    encabezadoP.textContent = mensajes[number].p;
    currentStepCount = number;
    setStepsActive(currentStepCount);
}

replaceStep(0);

progressBarLiArray.forEach( (li, i) => {
    li.addEventListener('click', () => {
        console.log(i);
        replaceStep(i);
    })
});

navContinuar.addEventListener('click', () => {
    if (currentStepCount < 6) {
        replaceStep(currentStepCount + 1);
        setLabelValues();
    }
})
navRegresar.addEventListener('click', () => {
    if(currentStepCount > 0) {
        replaceStep(currentStepCount - 1);
    }
});

const setLabelValues = () => {
    document.getElementById('seleccion-color').textContent = colorField.value;
    document.getElementById('seleccion-base').textContent = baseField.value;
    document.getElementById('seleccion-forma').textContent = formaField.value;
    document.getElementById('seleccion-glitter').textContent = glitterField.value;
    document.getElementById('seleccion-aroma').textContent = aromaField.value;
    document.getElementById('seleccion-nombre').textContent = nombreField.value;
}