document.addEventListener('DOMContentLoaded', function() {
    // get header element
    let header = document.querySelector('header');
    // create header content
    let headerContent = 
        `<div>
            <a href="./index.html">
                <img src="./images/logopp.png" alt="phnom penh chamber of commerce logo">
                <p class="hidden">.</p>
            </a>
        </div>`;
    // output the header content
    header.innerHTML = headerContent;
 }, false);
