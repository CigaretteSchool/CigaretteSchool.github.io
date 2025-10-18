// select all section
const section = document.querySelectorAll('.section');
const tabsContainer = document.querySelector('.nav');
const btn = document.querySelectorAll('.btn-section');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.btn-section');
  if (!clicked) return;

  btn.forEach(b => {
    b.classList.remove('text-primary');
    b.classList.add('text-default');
  });
  clicked.classList.remove('text-neutral-500');
  clicked.classList.add('text-primary');

  section.forEach(s => s.classList.remove('active-section'));

  document
    .querySelector(`.section--${clicked.dataset.tab}`)
    .classList.add('active-section');
});
