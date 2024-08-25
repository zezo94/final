document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // Add your login logic here
  alert(`Username: ${username}\nPassword: ${password}`);
});


document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // Add your registration logic here
  alert(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
});

document.getElementById('suggestionForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const suggestion = document.getElementById('suggestion').value;
  // Add your form submission logic here
  alert(`Thank you for your suggestion, ${name}!`);
});


document.getElementById('uploadButton').addEventListener('click', () => {
  const fileInput = document.getElementById('fileInput');
  const resultsDiv = document.getElementById('results');

  if (fileInput.files.length === 0) {
    alert('Please select a file to upload.');
    return;
  }

  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append('file', file);

  fetch('/api/upload', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        resultsDiv.innerHTML = `
        <h3>Test Results</h3>
        <p>Status: ${data.result.status}</p>
        <p>Details: ${data.result.details}</p>
      `;
      } else {
        resultsDiv.innerHTML = '<p>Error classifying the results. Please try again.</p>';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      resultsDiv.innerHTML = '<p>An error occurred. Please try again later.</p>';
    });















  /*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
  //
// Scripts
//

  window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
      // Uncomment Below to persist sidebar toggle between refreshes
      // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
      //     document.body.classList.toggle('sb-sidenav-toggled');
      // }
      sidebarToggle.addEventListener('click', event => {
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
      });
    }

  });


  // Sample data to be displayed in the table
  const data = [
    ["Data 1", "Data 2", "Data 3"],
    ["Data 4", "Data 5", "Data 6"],
    ["Data 7", "Data 8", "Data 9"]
  ];

  // Function to populate the table with data
  function populateTable(tableId, data) {
    const table = document.getElementById(tableId);

    data.forEach(rowData => {
      const row = document.createElement('tr');

      rowData.forEach(cellData => {
        const cell = document.createElement('td');
        cell.textContent = cellData;
        row.appendChild(cell);
      });

      table.appendChild(row);
    });
  }

  // Populate the table when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    populateTable('resultTable', data);
  });
});





// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


