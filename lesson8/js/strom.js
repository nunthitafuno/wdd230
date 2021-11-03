const hamButton = document.querySelector('.ham');
const mainMenu = document.querySelector('.navigation');

hamButton.addEventListener('click', () =>{mainMenu.classList.toggle('responsive')}, false);

window.onresize = () => {
    if(window.innerWidth > 760){
        mainMenu.classList.remove('responsive');
    }
}

var currentDate = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("outcome").innerHTML = days[currentDate.getDay()] + ", " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear();

//storm center function
function changeColor() {
    var element = document.getElementById("dateColor");
    element.classList.remove("dateColor");
  }
  
  let slider = document.getElementById("severityRangeInput");
  let output = document.getElementById("severityRange");
  output.innerHTML = slider.value; 
  slider.oninput = function() {
    output.innerHTML = this.value;
  }