// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".modal-overlay");
modalBtn.addEventListener("click", function(){
    if(overlay.classList.contains("open-modal")){
        overlay.classList.remove("open-modal");
    }
    else{
        overlay.classList.add("open-modal");
    }
})

closeBtn.addEventListener("click", function(){
    overlay.classList.remove("open-modal");
})