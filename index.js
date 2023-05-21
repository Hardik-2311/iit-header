const hamburger=document.getElementById("hamburger");
const wrapper=document.querySelector(".hidden");

hamburger.addEventListener('click',()=>{
    wrapper.classList.toggle("hidden");
})