console.log("JS loaded");


document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const back = document.querySelector('.parallax__layer--back');
    const back2 = document.querySelector('.parallax__layer--back2');
    const back3 = document.querySelector('.parallax__layer--back3');
    if (back) back.style.transform = `translateY(${scrolled * 0.3}px)`;
    if (back2) back2.style.transform = `translateY(${scrolled * 0.6}px)`;
    if (back3) back3.style.transform = `translateY(${scrolled * 0.9}px)`;
  });
});