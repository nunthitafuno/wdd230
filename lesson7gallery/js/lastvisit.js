const getDate = new Date()
const dayOpition = {
    day: "numeric",
  };
  const dayVisit = getDate.toLocaleDateString(undefined, dayOpition);
localStorage.setItem('dateLastvisit',dayVisit)

sessionStorage.setItem('dateLastvisit',dayVisit)

const firstvisit = localStorage.getItem('dateLastvisit')
const lastvisit = sessionStorage.getItem('dateLastvisit')
const different = firstvisit - lastvisit;

document.getElementById('lastVisitdate').innerHTML = "Hey! It has been " + different + " days since you last visit the Gallery.";
