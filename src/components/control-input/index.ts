import layout from './layout.html?raw';

export function createInput(): HTMLElement[] {
    const el = document.createElement('div');
    el.innerHTML = layout;
    return [...el.children] as HTMLElement[];
}
