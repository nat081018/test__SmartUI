// popup
let modal1 = document.querySelector(".btn__start");
console.log(modal1);

let popup = document.getElementById("modal");
console.log(popup);


let open = function() {
  popup.style.display = "block";
};

modal1.addEventListener("click", open);

// closed popup
const btnClosed = document.getElementById("closed");

let close = function() {
  popup.style.display = "none";
};

btnClosed.addEventListener("click", close);