localStorage.counter&&!isNaN(localStorage.counter)||(localStorage.counter=0);const closeBtn=document.querySelector("#close-btn"),moduleBtn=document.querySelector("#module-btn"),modal=document.querySelector("#modal"),resetBtn=document.querySelector("#modal-reset-btn"),modalClosing=()=>{modal.classList.remove("active")},alert=e=>{modal.classList.add("active"),e.innerHTML=localStorage.counter+" times"},clickIncrease=()=>{localStorage.counter++;var e=document.querySelector("#modal-counter");5<=localStorage.counter&&(localStorage.counter=5,alert(e))},resetCounting=()=>{localStorage.counter=0,modalClosing(),console.log("You can now click again ! Enjoy yourself :)")};closeBtn.addEventListener("click",modalClosing),moduleBtn.addEventListener("click",clickIncrease),resetBtn.addEventListener("click",resetCounting),window.addEventListener("click",e=>{e.target===modal&&modalClosing()});