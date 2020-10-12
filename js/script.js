var searchForm = document.querySelector('.form-container');
var searchButton = document.querySelector('.search-button');

searchForm.classList.add('search-form-hidden');

searchButton.addEventListener('click', function () {
  searchForm.classList.remove('search-form-hidden');
  searchForm.classList.add('search-form-open');
});
