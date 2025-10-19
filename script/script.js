// selection
const section = document.querySelectorAll(".section");
const tabsContainer = document.querySelector(".nav");
const btn = document.querySelectorAll(".btn-section");
const scrollBtn = document.querySelector(".settings-btn");
const appFooter = document.querySelector(".app-footer");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn-section");
  if (!clicked) return;

  btn.forEach((b) => b.classList.remove("button-active"));
  clicked.classList.add("button-active");

  section.forEach((s) => s.classList.remove("active-section"));

  document
    .querySelector(`.section--${clicked.dataset.tab}`)
    .classList.add("active-section");
});

// scrool
scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 1, behavior: "smooth" });
});
//  footer
window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY; // چقدر اسکرول شده
  const windowHeight = window.innerHeight; // ارتفاع ویوپورت
  const docHeight = document.documentElement.scrollHeight; //‌ ارتفاع کل صفحه
  if (scrollTop + windowHeight‌ + 10 >= docHeight) {
    appFooter.style.width = "100%";
    appFooter.style.borderRadius = "0";
  } else {
    if (this.window.innerWidth >= 315) {
      appFooter.style.borderRadius = "35px";
      appFooter.style.width = "300px";
    }
  }
});
