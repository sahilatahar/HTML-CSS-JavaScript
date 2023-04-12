const icons = document.querySelectorAll('.icon');
let isOpen = false;
function showAndHide() {
    if (!isOpen) {
        icons[0].style['transform'] = `translate(calc(var(--size)/2 * -1px), calc(var(--size)/2 * -1px))`;
        icons[1].style['transform'] = `translate(calc(var(--size)*2 * -1px), calc(var(--size)/2 * -1px))`;
        icons[2].style['transform'] = 'translate(calc(var(--size)*1.5 * -1px), calc(var(--size)*-2px - var(--size)/2 * -1px))';
        icons[3].style['transform'] = 'translate(calc(var(--size)/2 * -1px),calc(var(--size)*2 * -1px))';
        icons[4].style['transform'] = 'translate(calc(var(--size)*0.5px),calc(var(--size)*-2px - var(--size)/2 * -1px))';
        icons[5].style['transform'] = 'translate(calc(var(--size) * 1px), calc(var(--size)/2 * -1px))';
    } else {
        for (let i = 0; i < icons.length; i++) {
            icons[i].style['transform'] = `translate(calc(var(--size)/2 * -1px), calc(var(--size)/2 * -1px))`;
        }
    }
    isOpen = !isOpen;
}