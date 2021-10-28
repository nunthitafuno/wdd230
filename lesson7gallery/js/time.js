document.addEventListener ("onclick",function() {
    // get the name from local storage
    let usersName = localStorage.getItem('uName');
        // calls and passes name to banner function
        welcomeBanner(usersName);
 }, false);

function welcomeBanner(name) {
   
    let greetingArray = [
        'We\'re so glad you\'re here.',
        'Have a wonderful day!',
 ];

    let b = document.getElementsByClassName('welcome-banner')[0];
  
    if (name != null) {
      
        let getNum = Math.floor(Math.random() * greetingArray.length);
     
        b.textContent = `Hey ${name}, ${greetingArray[getNum]}! It's been ${compareDateTime()} days since your last visit.`;
       
        b.classList.remove('hidden');
    } else {
     
        b.textContent = `Hello, it's been ${compareDateTime()} days since your last visiting.`;
    
        b.classList.remove('hidden');
}
    }

function addDateLocal() {
    let dateTime = new Date();
    localStorage.setItem('lastVisitDate', dateTime);
}

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