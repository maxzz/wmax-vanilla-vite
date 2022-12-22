export function elementFromString<T extends HTMLElement = HTMLElement>(layout: string): T {
    const el = document.createElement('div');
    el.innerHTML = layout;
    if (!el.firstChild) {
        throw new Error('bad template');
    }
    return el.firstChild as T;
}
