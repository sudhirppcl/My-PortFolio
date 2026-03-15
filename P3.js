// typing effect
const typing = document.getElementById("typing");
const roles = ["Web Developer", "Programmer", "Designer"];
let i = 0, j = 0;

function typeEffect() {
  if (j < roles[i].length) {
    typing.innerHTML += roles[i].charAt(j);
    j++;
    setTimeout(typeEffect, 120);
  } else {
    setTimeout(eraseEffect, 1200);
  }
}

function eraseEffect() {
  if (j > 0) {
    typing.innerHTML = roles[i].substring(0, j - 1);
    j--;
    setTimeout(eraseEffect, 80);
  } else {
    i = (i + 1) % roles.length;
    setTimeout(typeEffect, 300);
  }
}
typeEffect();

// reveal on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) el.classList.add("active");
  });
});

// hamburger menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.onclick = () => {
  navMenu.classList.toggle("show");
};

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("https://script.google.com/u/0/home/projects/1FTkT2bfz1kTHDnKPk2pwepUN67UrgBl416ldELO78i3jls6G9Y1rqcVf/edit", {
    method: "POST",
    body: formData
  })
  .then(() => {
    alert("Message sent successfully!");
    this.reset();
  })
  .catch(() => {
    alert("Error sending message");
  });
});