
function compareDateTime() {
    let storedDate = localStorage.getItem('lastVisit');
    if (storedDate != null) {
     
        let convertedStoredDate = new Date(storedDate);
     
        let currentDate = new Date();
    
        let daysSinceVisit= currentDate.getTime() - convertedStoredDate.getTime();
      
        addDateLocal();
      
        return Math.floor( daysSinceVisit / (1000 * 3600 * 24));
    } else {
      
        addDateLocal();
        return 0;   
    }
}

if ('lastVisit' in localStorage) {
    document.querySelector('#daysSinceVisit').innerHTML = `Welcome Back! It has been ${daysSinceVisit.toFixed(0)} days since your last visit`;
} else {
    document.querySelector('#daysSinceVisit').innerHTML = `It seems like this is your first visiing to the Whether Weather site. Welcome to Gallery Page!`;
}



