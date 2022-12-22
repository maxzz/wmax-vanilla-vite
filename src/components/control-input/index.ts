import layout from './layout.html?raw';

export function createInput() {
    const el = document.createElement('div');
    el.innerHTML = layout;
    return el.firstChild;
}
