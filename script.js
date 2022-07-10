const nightModeButton = document.querySelector('.night-mode');
const root = document.querySelector(':root');

nightModeButton.addEventListener('click', e => {
    nightModeButton.classList.toggle('active');
    if (root.classList.contains('dark')) {
        root.setAttribute('class','light');
    } else {
        root.setAttribute('class','dark');
    }
});