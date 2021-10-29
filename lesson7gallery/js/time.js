const getDate = new Date()
const dayOpition = {
    day: "numeric",
  };
  const dayVisit = getDate.toLocaleDateString(undefined, dayOpition);
localStorage.setItem('day',dayVisit)

sessionStorage.setItem('day',dayVisit)

const firstvisit = localStorage.getItem('day')
const lastvisit = sessionStorage.getItem('day')
const different = firstvisit - lastvisit;

document.getElementById('lastvisit').innerHTML = "Hey! It has been " + different + " days since you last visit the Whether Weather site.";
