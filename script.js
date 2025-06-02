document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const navbar = document.querySelector(".navbar");

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

    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const skillSections = document.querySelectorAll('.skill-section');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetSkill = button.dataset.skill;

      tabButtons.forEach((btn) => btn.classList.remove('active'));

      skillSections.forEach((section) => {
        section.classList.remove('active');
        if (section.dataset.skill === targetSkill) {
          section.classList.add('active');
        }
      });

      button.classList.add('active');
    });
  });

  document.querySelectorAll('.project-card').forEach((card) => {
    observer.observe(card);
  });
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


const form = document.getElementById('contact-form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      result.innerHTML = "<span style='color: green;'>✅ Thanks for your message!</span>";
      form.reset();
    } else {
      result.innerHTML = "<span style='color: red;'>❌ Oops! Something went wrong.</span>";
    }
  }).catch(error => {
    result.innerHTML = "<span style='color: red;'>❌ Oops! Something went wrong.</span>";
  });
});
