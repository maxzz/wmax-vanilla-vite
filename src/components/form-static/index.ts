import layout from './layout.html?raw';

export function createFormStatic(): HTMLElement[] {
    const el = document.createElement('div');
    el.innerHTML = layout;
    return [...el.children] as HTMLElement[];
}
