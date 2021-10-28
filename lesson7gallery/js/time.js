
function compareDateTime() {
    let storedDate = localStorage.getItem('lastVisitDate');
    if (storedDate != null) {
     
        let convertedStoredDate = new Date(storedDate);
     
        let currentDate = new Date();
    
        let diff = currentDate.getTime() - convertedStoredDate.getTime();
      
        addDateLocal();
      
        return Math.floor(diff / (1000 * 3600 * 24));
    } else {
      
        addDateLocal();
        return 0;   
    }
}

if ('lastVisit' in localStorage) {
    document.querySelector('#daysSinceVisit').innerHTML = `Welcome Back! It has been ${daysSinceVisit.toFixed(0)} days since your last visit`;
} else {
    document.querySelector('#daysSinceVisit').innerHTML = `It looks like this is your first visit to the gallery. Welcome to the Whether Weather site!`;
}



