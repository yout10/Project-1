const form = document.getElementById('myForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Check if all fields are filled
  if (name && email && message) {
    // Redirect to a new page
    window.location.href = '../thankyou.html';
  } else {
    // Display an error message if any field is empty
    resultDiv.innerText = 'Please fill out all fields!';
  }
});
