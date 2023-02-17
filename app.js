const API_URL = 'http://localhost:5000/api';
$('#navbar').load('navbar.html');

//const devices = JSON.parse(localStorage.getItem('devices')) || [];



// button = document.querySelector("add-device");
// function onClick() {
//   document.getElementById("add-device").disabled = true;
//   document.getElementById("add-device").disabled = false;
// }

// document.getElementById("add-device").addEventListener("click", function () {
//   if (document.getElementById("check").checked) {
//     // redirect to device-list
//   }
//   else {
//     alert("Please check the  checkbox")

//   }
// })

$.get(`${API_URL}/devices`)
  .then(response => {
    response.forEach(device => {
      $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`
      );
    });
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });

$('#add-device').on('click', () => {
  const name = $('#name').val();
  const user = $('#user').val();
  const sensorData = [];

  const body = {
    name,
    user,
    sensorData
  };

  $.post(`${API_URL}/devices`, body)
    .then(response => {
      location.href = './iot-data.html';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});


// button = document.querySelector("min3");
// function onClick() {
//   document.getElementById("min3").disabled = true;
//   document.getElementById("min3").disabled = false;
// }

// function onclick() {
//   document.getElementById("min3").innerHTML = "Please enter minimum 3 characters";
// }