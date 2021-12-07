const hamButton = document.querySelector('.ham');
const mainMenu = document.querySelector('.navigation');

hamButton.addEventListener('click', () =>{mainMenu.classList.toggle('responsive')}, false);

window.onresize = () => {
    if(window.innerWidth > 760){
        mainMenu.classList.remove('responsive');
    }
}



document.getElementById("outcome").innerHTML = days[currentDate.getDay()] + ", " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear();
const lastvisiting = document.lastModified;
document.getElementById("outcome").textContent = "Last Updated: " + lastvisiting;
const currentYear = new Date();
document.getElementById("Year").textContent = currentYear.getFullYear();