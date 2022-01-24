const chipContainer = document.querySelector('.chip-container');
const form = document.querySelector('form');

const addChip = (chipName) => {
  chipContainer.innerHTML += `
    <div class="chip">
      <span>${chipName}</span>
      <i class="fas fa-times-circle remove-chip"></i>
    </div>
  `;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const chipName = form.input.value.trim();
  addChip(chipName);
  form.reset();
});

chipContainer.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('remove-chip')) {
    target.parentElement.remove();
  }
});
