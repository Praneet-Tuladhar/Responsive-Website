// const hamburger = document.getElementById('hamburger');
// const navUL = document.getElementById('nav-ul');

// hamburger.addEventListener('click', () => {
//     navUL.classList.toggle('show');
// });

var blur=document.getElementById("main");
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");
hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
  blur.classList.toggle("blur");
  if (navUL.classList.contains("show")){
    document.body.style.overflowY="hidden";
  }
  else{
    document.body.style.overflowY="scroll";
  }

});

var slider = [...document.getElementsByClassName("slider")];
slider.forEach((element, ind) => {
    element.addEventListener("click", () => {
    element.classList.add("show");
    slider.forEach((e,i) => {
        if (i!=ind){
            e.classList.remove("show");
        }
    })
    
});
});

