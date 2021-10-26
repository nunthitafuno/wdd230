const images = document.querySelectorAll("img[data-src]");
function preloadImage(img){
 
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }
    img.src = src;
    img.removeAttribute('data-src');
}
const imgChoice = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};
const imgObsrvr = new IntersectionObserver((lists, imgObsrvr) => {
    lists.forEach(list => {
        if (!list.isIntersecting) {
            return;
        } else {
            preloadImage(list.target);
            imgObsrvr.unobserve(list.target);
        }
    })
},  imgChoice);
images.forEach(image => {
    imgObsrvr.observe(image);
})

