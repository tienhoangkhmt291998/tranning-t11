
var navbar = document.querySelector(".fa-bars");
var banner = document.querySelector(".banner__groups");
var close = document.querySelector(".fa-window-close");



// add class

function Add(){
    banner.classList.add("translatex");
}

// remove class

function Remove(){
    banner.classList.remove("translatex");
}

// remove class in object windown


function RemoveWindow(e){
   if((e.target !== banner) && (e.target !== navbar)){
        banner.classList.remove("translatex");
   }
}



navbar.addEventListener("click",Add)

close.addEventListener("click",Remove);

window.addEventListener("click",RemoveWindow);