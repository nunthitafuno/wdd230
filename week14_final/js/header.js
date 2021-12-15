document.addEventListener('DOMContentLoaded', function() {
    let header = document.querySelector('header');
    let headerContent = 
        `<div>
            <a href="./index.html">
                <img src="./images/logopp.png" alt="phnom penh chamber of commerce logo">
                <p class="hidden">.</p>
            </a>
        </div>`;
    header.innerHTML = headerContent;
 }, false);
