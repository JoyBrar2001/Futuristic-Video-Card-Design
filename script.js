const blob = document.querySelector('#blob');

document.body.onpointermove = e => {
    const {clientX, clientY} = e;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
    },{ duration: 3000, fill: 'forwards'})
}

const screen = document.querySelector('.screen');
const popup = document.querySelector('.screen-watch-now');

screen.addEventListener('mouseover', () => {
    popup.classList.add('active');
})

screen.addEventListener('mouseout', () => {
    popup.classList.remove('active');
})