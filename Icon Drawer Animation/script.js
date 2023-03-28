const icons = document.querySelectorAll('.icon');
let isOpen = false;
function showAndHide() {
    if (!isOpen) {
        icons[0].style['transform'] = 'translate(0px,0px)';
        icons[1].style['transform'] = 'translate(-110px,0px)';
        icons[2].style['transform'] = 'translate(-80px,-80px)';
        icons[3].style['transform'] = 'translate(0px,-110px)';
        icons[4].style['transform'] = 'translate(80px,-80px)';
        icons[5].style['transform'] = 'translate(110px,0px)';
    } else {
        for (let i = 0; i < icons.length; i++) {
            icons[i].style['transform'] = `translate(0,0)`;
        }
    }
    isOpen = !isOpen;
}