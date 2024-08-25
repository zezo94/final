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
});


//search




function tableFilter() {
  var input, filter, table, tbody, tr, i, td, j, txtValue;
  input = document.getElementById("table-filter-input");
  filter = input.value.toUpperCase();
  table = document.getElementById("filtered-table");
  tbody = table.getElementsByTagName("tbody")[0];
  tr = tbody.getElementsByTagName("tr");

  // Loop through all table rows, then through all row cells,
  // and hide the rows where none of the cells match the filter
  for (i = 0; i < tr.length; i++) {
    if (!(tr[i].classList.contains("subhead1") ||
      tr[i].classList.contains("subhead2"))) {
      tr[i].style.display = "none";
      td = tr[i].getElementsByTagName("td");
      for (j = 0; j < td.length; j++) {
        if (td[j]) {
          txtValue = td[j].textContent || td[j].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          }
        }
      }
    }
  }
}

function clearFilterInput() {
  var input = document.getElementById("table-filter-input");
  input.value = "";
  tableFilter(); // force the table to reset since there is no keyup action here
}
















//sort
