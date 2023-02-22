const modalButtons = document.querySelectorAll('.show-modal');
const modalContainer = document.querySelector('.modal-container');
const overlay = document.querySelector('.overlay');

modalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.dataset.modalTarget;
    const modal = modalContainer.querySelector(`#${modalId}`);

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    const closeButton = modal.querySelector('.close-modal');
    closeButton.addEventListener('click', () => {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    });
  });
});

overlay.addEventListener('click', () => {
  const modals = modalContainer.querySelectorAll('.modal:not(.hidden)');
  modals.forEach(modal => {
    modal.classList.add('hidden');
  });
  overlay.classList.add('hidden');
});
