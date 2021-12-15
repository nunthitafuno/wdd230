document.addEventListener('DOMContentLoaded', function() {

    let footer = document.querySelector('footer');
    let footerContent = 
        `© <span id="current-year"></span> | Nunthita Samrith | Phnom Penh
        <div class="footer-links">
            <a id="byui" href="https://www.byui.edu/online" target="_blank">BYUi Online Learning</a> | 
            <a href="https://www.termsfeed.com/live/dfe36207-bac2-4c65-8796-468a5efa4ebd" target="_blank"> 
            <a href="./attributions.html" target="_blank">Attributions</a>
        </div>
        <span id="last-updated">Modified: </span>`;
    footer.innerHTML = footerContent;
 }, false);