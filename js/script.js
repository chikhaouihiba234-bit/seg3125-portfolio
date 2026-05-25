// Smooth scroll for in-page nav links
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Collapse the mobile nav menu after clicking a link
var navLinks = document.querySelectorAll('.nav-link');
var navCollapse = document.getElementById('navLinks');

navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    if (navCollapse.classList.contains('show')) {
      var bsCollapse = new bootstrap.Collapse(navCollapse);
      bsCollapse.hide();
    }
  });
});

// Scroll fade-in — watches for elements with class "fade-in"
// and adds "visible" once they enter the viewport
var fadeEls = document.querySelectorAll('.fade-in');

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(function(el) {
  observer.observe(el);
});

// Active nav link highlight on scroll
var sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function() {
  var scrollY = window.scrollY;

  sections.forEach(function(section) {
    var top = section.offsetTop - 90;
    var height = section.offsetHeight;
    var id = section.getAttribute('id');
    var link = document.querySelector('.nav-link[href="#' + id + '"]');

    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    }
  });
});
