let searchForm = document.querySelector('.form-container');
let searchButton = document.querySelector('.search-button');
let findButton = document.querySelector('.find-button');
let interactiveMap = document.querySelector('.interactive-map');

searchForm.classList.add('search-form-hidden');

interactiveMap.classList.add('interactive-map-active');

searchButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  searchForm.classList.remove('search-form-hidden');
  if (!searchForm.classList.contains('search-form-open')) {
    searchForm.classList.remove('search-form-close');
    searchForm.classList.add('search-form-open');
  } else {
    searchForm.classList.remove('search-form-open');
    searchForm.classList.add('search-form-close');
  }
});

findButton.addEventListener('click', function (evt) {
  evt.preventDefault();
});
