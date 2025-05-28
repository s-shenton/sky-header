window.addEventListener('scroll', function() {
  const scrolled = window.scrollY;
  document.querySelector('.parallax__layer--back').style.transform = `translateY(${scrolled * 0.3}px)`;
  document.querySelector('.parallax__layer--back2').style.transform = `translateY(${scrolled * 0.6}px)`;
  document.querySelector('.parallax__layer--back3').style.transform = `translateY(${scrolled * 0.9}px)`;
});