const form = document.getElementById("myForm");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();
  
  if (name === "") {
    result.textContent = "Please enter your name.";
    result.style.color = "red";
  } else {
    result.textContent = `Hello, ${name}!`;
    result.style.color = "green";
  }
});
