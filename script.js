document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: "smooth"
        });
      }
    });
  });

  window.addEventListener("scroll", function () {
    let fromTop = window.scrollY + 100;
    navLinks.forEach((link) => {
      const section = document.querySelector(link.getAttribute("href"));
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;
  const btn = this.querySelector('.send-btn');
  
  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email');
    return;
  }

  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    alert('Message sent!');
    this.reset();
    btn.textContent = 'Send Message';
    btn.disabled = false;
  }, 1000);
});




