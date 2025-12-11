/* Scroll Reveal Animation */
const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.opacity="1";
      e.target.style.transform="translateY(0)";
    }
  })
},{threshold:0.15});
revealElements.forEach(el => observer.observe(el));

/* Liquid Cursor Light */
const ripple = document.querySelector(".ripple");
document.addEventListener("mousemove", e=>{
  ripple.style.left = e.clientX + "px";
  ripple.style.top  = e.clientY + "px";
});
