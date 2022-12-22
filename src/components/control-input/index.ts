import layout from './layout.html?raw';

export function createInput() {
    const el = document.createElement('div');
    el.innerHTML = layout;

    if (el.children.length > 1) {
        return el.children;
    }
    
    if (!el.firstChild) {
        throw new Error('bad template');
    }
    return el.firstChild;
}
