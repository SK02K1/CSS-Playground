const button = document.querySelector('.btn');
const snackbar = document.querySelector('.snackbar');
const btnCloseSnackbar = document.querySelector('.btn-close-snackbar');

button.addEventListener('click', (e) => {
  snackbar.classList.remove('hide');
  setTimeout(() => {
    snackbar.classList.add('hide');
  }, 3000);
});

btnCloseSnackbar.addEventListener('click', (e) => {
  snackbar.classList.add('hide');
});
