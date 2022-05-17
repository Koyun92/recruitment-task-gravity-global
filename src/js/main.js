if (!sessionStorage.counter || (isNaN(sessionStorage.counter))) {
    sessionStorage.counter = 0;
}

const closeBtn = document.querySelector('#close-btn');
const moduleBtn = document.querySelector('#module-btn');

// in the case there are many of them on the same page
// const moduleBtns = document.querySelectorAll('.module__button');

const modal = document.querySelector('#modal');
const resetBtn = document.querySelector('#modal-reset-btn');


// FUNCTIONS SECTION DOWN HERE 
const modalClosing = () => {
    modal.classList.remove('active');
}
const alert = (counter) => {
    modal.classList.add('active');
    counter.innerHTML = `${sessionStorage.counter} times`;
}
const clickIncrease = () => {
    sessionStorage.counter++;
    const modalCounter = document.querySelector('#modal-counter');


    if (sessionStorage.counter >= 5) {
        sessionStorage.counter = 5;
        alert(modalCounter);
    }

}
const resetCounting = () => {
    sessionStorage.counter = 0;
    clicksCounter = 0;
    modalClosing();
    console.log('You can now click again ! Enjoy yourself :)');
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