const currentStep = document.querySelector('.current-step');
const stepsArray = document.querySelectorAll('.step');
const progressBarLiArray = document.querySelectorAll('.progressbar li');

const replaceStep = (number) => {
    const toRemove = currentStep.children[0];
    let toAdd = null;
    toRemove.classList.remove('active');
    setTimeout(() => currentStep.removeChild(toRemove), 250);
    toAdd = currentStep.appendChild(stepsArray[number]);
    setTimeout(() => toAdd.classList.add('active'), 260);
}

replaceStep(0);

progressBarLiArray.forEach( (li, i) => {
    li.addEventListener('click', () => {
        console.log(i);
        li.classList.add('active');
        replaceStep(i);
    })
});