const joinButton = document.getElementById('join');

joinButton.addEventListener('click', function () {

  const roomName = document.getElementById("room-name").value;

  if (roomName === '') {
    alert('Fill room name');
    return;
  }

  const secretKey = prompt('Enter secret-key');

  var url = "./pub/" + "?room=" + roomName + "&key=" + secretKey;
  window.location.href = url;

});