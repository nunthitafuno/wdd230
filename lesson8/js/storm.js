function changeColor() {
    var element = document.getElementById("dateColor");
    element.classList.remove("dateColor");
  }
  
  var slider = document.getElementById("severityRangeInput");
  var output = document.getElementById("severityRange");
  output.innerHTML = slider.value; 
  slider.oninput = function() {
    output.innerHTML = this.value;
  }