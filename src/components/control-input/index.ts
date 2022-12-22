import layout from './layout.html?raw';

export function createInput() {
    const el = document.createElement('div');
    el.outerHTML = layout;
    return el;
}
