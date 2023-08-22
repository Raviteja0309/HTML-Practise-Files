const toggleButton = document.getElementById('toggleButton');
let isOn = false;

function updateButtonState() {
  if (isOn) {
    toggleButton.textContent = 'ON';
    toggleButton.style.backgroundColor = 'green';
  } else {
    toggleButton.textContent = 'OFF';
    toggleButton.style.backgroundColor = 'red';
  }
}

toggleButton.addEventListener('click', () => {
  isOn = !isOn;
  updateButtonState();
});

// Initial update
updateButtonState();
