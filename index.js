document.querySelector('.locate-me').addEventListener('click', function () {
  navigator.geolocation.getCurrentPosition(function (position) {
    document.getElementById("latA").value = position.coords.latitude
    document.getElementById("lonA").value = position.coords.longitude
  })
})

const circleAngleEl = document.querySelector('#result').querySelector('#angle');

// Only executed our code once the DOM is ready.
function render_all() {
  // Get a reference to the canvas object
  renderCircle(getAngle());
}

function toRad(deg) {
  return deg * Math.PI / 180
}

function toDeg(rad) {
  return rad / (Math.PI / 180)
}

function getAngle() {
  var latA = parseFloat(document.getElementById("latA").value);
  var lonA = parseFloat(document.getElementById("lonA").value);
  var latB = parseFloat(document.getElementById("latB").value);
  var lonB = parseFloat(document.getElementById("lonB").value);
  const cos = Math.cos(toRad(latA))*Math.cos(toRad(latB))*Math.cos(toRad(lonB-lonA))+Math.sin(toRad(latA))*Math.sin(toRad(latB)); 
  return toDeg(Math.acos(cos))
}

function renderCircle(angle) {
  circleAngleEl.setAttribute('stroke-dasharray', `${toRad(angle) / 2 * 10} 31.4`)
}
