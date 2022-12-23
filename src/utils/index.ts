export function textToElement<T extends HTMLElement = HTMLElement>(str: string): T {
    const el = document.createElement('div');
    el.innerHTML = str;
    if (!el.firstChild) {
        throw new Error(`Bad template: ${str}`);
    }
    return el.firstElementChild as T;
}

export function query<T extends Element = HTMLElement>(selector: string, parent: Element | Document = document): T {
    const el = parent.querySelector<T>(selector);
    if (!el) {
        throw new Error(`Failed to get element by '${selector}' selector.`);
    }
    return el;
}
