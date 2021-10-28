
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

//adds imageloading function
const images = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -30px 0px"
}

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
}

const imgObsrvr  = new IntersectionObserver((lists, imgObsrvr ) => {
    lists.forEach(list => {
        if (!list.isIntersecting){
            return;
        } else {
            list.target.classList.add('flyIn');
            preloadImage(list.target);
            imgObsrvr.unobserve(list.target);
        }
    });
}, imgOptions);

images.forEach(image => {
    imgObsrvr .observe(image);
});