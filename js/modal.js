var parent = document.querySelector(".modal-parent"),
    btn = document.querySelector("button"),
    X = document.querySelector(".X"),
    section = document.querySelector("section");
function appear() {
  parent.style.display = "block";
  section.style.filter = "blur(10px)"
}
    
function disappearX() {
  parent.style.display = "none";
  section.style.filter = "blur(0px)"
}
    
function disappearParent(e) {
  if (e.target.className == "modal-parent") {
    parent.style.display = "none";
    section.style.filter = "blur(0px)"
  }
}

btn.addEventListener("click", appear);
X.addEventListener("click", disappearX);
parent.addEventListener("click", disappearParent); 
