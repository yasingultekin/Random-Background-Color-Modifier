const button = document.getElementsByClassName('button')[0];

const container = document.getElementById('bg');

button.addEventListener('click', change);

function change() {
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);

    container.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}