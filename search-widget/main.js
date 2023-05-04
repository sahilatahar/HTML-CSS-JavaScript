const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');

searchIcon.addEventListener('click', (e) => {
  searchInput.classList.toggle('show');
});
