const outputDiv = document.getElementById('output');

function requestInvoiceData() {
  fetch('/ajax-data')
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      outputDiv.innerText = text;
    });
}

requestInvoiceData();
