document.addEventListener('DOMContentLoaded', function() {

    let footer = document.querySelector('footer');
    let footerContent = 
        `© <span id="current-year"></span> | Nunthita Samrith | Phnom Penh
        <div class="footer-links">
            <a id="byui" href="https://www.byui.edu/online" target="_blank">BYUi Online Learning</a> | 
            <a href="./attributions.html" target="_blank">Attributions</a>
        </div>
        <span id="last-updated">Modified: </span>`;
    footer.innerHTML = footerContent;
 }, false);