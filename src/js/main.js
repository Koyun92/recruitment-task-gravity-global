if (!localStorage.counter || (isNaN(localStorage.counter))) {
    localStorage.counter = 0;
}
const closeBtn = document.querySelector('#close-btn');
const moduleBtn = document.querySelector('#module-btn');
const modal = document.querySelector('#modal');
const resetBtn = document.querySelector('#modal-reset-btn');
const modalCounter = document.querySelector('#modal-counter');
// in the case there are many of them on the same page
// const moduleBtns = document.querySelectorAll('.module__button');

// FUNCTIONS SECTION DOWN HERE 
const modalClosing = () => {
    modal.classList.remove('active');
}
const alert = (counter) => {
    modal.classList.add('active');
    counter.innerHTML = `${localStorage.counter} times`;
}
const clickIncrease = () => {
    localStorage.counter++;
    alert(modalCounter)
    if (localStorage.counter > 5) {
        resetBtn.classList.add('active-reset');
    }
}
const resetCounting = () => {
    localStorage.counter = 0;
    resetBtn.classList.remove('active-reset');

    alert(modalCounter)
}

// LISTENERS DOWN HERE 
closeBtn.addEventListener('click', modalClosing);
moduleBtn.addEventListener('click', clickIncrease);

// in the case there are many of them on the same page
// moduleBtns.forEach((btn) => {
//     btn.addEventListener('click', clickIncrease)
// })
resetBtn.addEventListener('click', resetCounting);
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modalClosing();
    }
})