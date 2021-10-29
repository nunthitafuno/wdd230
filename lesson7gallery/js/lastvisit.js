function addDateLocal() {
  // creates var for current date/time
  let dateTime = new Date();
  // adds visit time to local storage
  localStorage.setItem('lastVisit', dateTime);
}

// compares the stored and current date
function compareDateTime() {
  // gets value of stored date
  let storedDate = localStorage.getItem('lastVisit');

  // ** this is here to test functionality of past dates ** //
  // storedDate = new Date('06/03/2020');

  if (storedDate != null) {
      // convert stored date to an active date
      let convertedStoredDate = new Date(storedDate);
      // gets current date / time
      let currentDate = new Date();
      // gets difference between old and new dates
      let diff = currentDate.getTime() - convertedStoredDate.getTime();
      // reset the local (last visit) date
      addDateLocal();
      // returns number of days difference, rounded down
      return Math.floor(diff / (1000 * 3600 * 24));
  } else {
      // set the local (last visit) date
      addDateLocal();
      return 0;   
  }
}

if ('lastVisit' in localStorage) {
  document.querySelector('#daysSinceVisit').innerHTML = `Welcome Back! It has been ${daysSinceVisit.toFixed(0)} days since your last visit`;
} else {
  document.querySelector('#daysSinceVisit').innerHTML = `It looks like this is your first visit to the gallery. Welcome to the site!`;
}

