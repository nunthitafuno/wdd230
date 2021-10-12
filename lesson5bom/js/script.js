const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    let value = input.value;
 
    const liList = document.createElement('li');
    const listbtn = document.createElement('button');
      
    listbtn.className = 'delete-btn';
    liList.textContent = value;
    listbtn.textContent = 'X';
    list.appendChild(liList).appendChild(listbtn);
    listbtn.onclick = function() {
    list.removeChild(liList);
        }
    
    input.focus();
   
    input.value = '';
});