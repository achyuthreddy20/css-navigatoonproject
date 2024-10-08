window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#3498db'; // Change background color on scroll
    navbar.querySelectorAll('a').forEach(function(item) {
      item.style.color = '#fff'; // Change font color on scroll
    });
  } else {
    navbar.style.backgroundColor = '#fff'; // Reset background color
    navbar.querySelectorAll('a').forEach(function(item) {
      item.style.color = '#333'; // Reset font color
    });
  }
});
