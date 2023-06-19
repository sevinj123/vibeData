// Handle form submission
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById('name').value;
    var gender = document.getElementById('gender').value;
    var age = document.getElementById('age').value;
    var interests = document.getElementById('interests').value;
  
    // Display form data on the page
    var output = document.getElementById('output');
    output.innerHTML +=`
      <h2>Registration Details:</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Interests:</strong> ${interests}</p>
    `;
  
    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('age').value = '';
    document.getElementById('interests').value = '';
  });
  