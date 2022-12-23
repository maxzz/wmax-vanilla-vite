export function elementFromString<T extends HTMLElement = HTMLElement>(layout: string): T {
    const el = document.createElement('div');
    el.innerHTML = layout;
    if (!el.firstChild) {
        throw new Error('bad template');
    }
    return el.firstChild as T;
}

export function controlFromLayout(str: string): HTMLElement {
    const el = document.createElement('div');
    el.innerHTML = str;
    return el.firstElementChild as HTMLElement;
}

export function query<T extends Element = HTMLElement>(selector: string, parent: Element | Document = document): T {
    const el = parent.querySelector<T>(selector);
    if (!el) {
        throw new Error(`cannot get element by '${selector}' selector`);
    }
    return el;
}