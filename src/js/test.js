function changeColor() {
  var button = document.getElementById("colorButton").style.background;
  if (button !== "purple") {
    document.getElementById("colorButton").style.background = "purple";
  } else if (button == "purple") {
    document.getElementById("colorButton").style.background = "orange";
  }
}
