function shuffleDots() {
  unClear()
  const dotContainer = document.querySelector(".dice");
  const dots = dotContainer.querySelectorAll("span");
  const dotArray = Array.from(dots);
  // Shuffle the dot array using Fisher-Yates shuffle algorithm
  for (let i = dotArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [dotArray[i], dotArray[j]] = [dotArray[j], dotArray[i]];
  }

  // Update the dot container with the shuffled dots
  dotContainer.innerHTML = '';
  dotArray.forEach((dot) => dotContainer.appendChild(dot));

  // Add shuffling animation to the dot container
  dotContainer.classList.add('dot-container-shuffling');

  // Remove shuffling animation after 1 second
  setTimeout(() => {
      dotContainer.classList.remove('dot-container-shuffling');
  }, 1900);
}