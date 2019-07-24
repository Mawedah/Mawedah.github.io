alert("Hello, Welcome to Mawedah's Website");
window.onload = setup;


function setup() {
  var button = document.getElementById("button1");
  button.onclick = colorChange;
  var button2 = document.getElementById("button2");
  button2.onclick = timeDate;
}


function colorChange() {
  document.getElementById("color").style.color = "red";
}


function timeDate() {
  document.getElementById("date").innerHTML = Date();
}
