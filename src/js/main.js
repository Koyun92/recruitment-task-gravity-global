const closeBtn = document.querySelector('#close-btn');
const moduleBtn = document.querySelector('#module-btn')
const modal = document.querySelector('#modal');
const resetBtn = document.querySelector('#modal-reset-btn')
let clicksCounter = 0;




// FUNCTIONS SECTION DOWN HERE 

const modalClosing = () => {
    modal.classList.remove('active');
}
const alert = (modalCounter) => {
    modal.classList.add('active');
    modalCounter.innerHTML = `${clicksCounter} times`;
}
const clickIncrease = () => {
    const modalCounter = document.querySelector('#modal-counter');
    clicksCounter++;
    if (clicksCounter === 5) {
        alert(modalCounter);
    } else if (clicksCounter > 5) {
        clicksCounter = 5;
        alert(modalCounter);
    }
}
const reseCounting = () => {
    clicksCounter = 0;
    modalClosing();
    console.log('You can now click again till you fall asleep! Enjoy yourself :)');
}




// LISTENERS DOWN HERE 

closeBtn.addEventListener('click', modalClosing);
moduleBtn.addEventListener('click', clickIncrease);
resetBtn.addEventListener('click', reseCounting);
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modalClosing();
    }
})