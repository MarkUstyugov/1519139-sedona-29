var searchForm = document.querySelector('.form-container');
var searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle('search-form-open');
});
