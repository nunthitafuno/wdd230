document.addEventListener('DOMContentLoaded', function() {        
    
    let getDate = new Date();
    let dayOptions = {
        weekday: 'long',
        year: 'numeric',
        day: 'numeric' ,
        month: 'long'
    };
    
    let todaysDate = getDate.toLocaleDateString('en-GB', dayOptions);
    document.querySelector('#last-updated').append(todaysDate);
}, false); 