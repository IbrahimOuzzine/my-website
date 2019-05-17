//modal
let modalFront = document.getElementById('card-modal-front');
let modalBack = document.getElementById('card-modal-back');
let modalFrame = document.getElementById('card-modal-frame');



//button


//close option
let span = document.getElementsByClassName("close")[0];

 


// front-end card open
function modalBtnFront() {
    modalFront.style.display = "block";


}
//back-end card open
function modalBtnBack() {
    modalBack.style.display = "block";
}



// framework card open
function modalBtnFrame() {
    modalFrame.style.display = "block";
}






    
// modal-cards closes
function closeModal() {
    modalFrame.style.display = "none";
    modalFront.style.display = "none";
    modalBack.style.display = "none";
}