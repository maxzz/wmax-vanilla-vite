import { FormInput } from '@/store/types';
import { textToElement, query } from '@/utils';

import layout from './layout.html?raw';
import controlInput from './control-input.html?raw';
import controlSelect from './control-select.html?raw';
import controlTextarea from './control-textarea.html?raw';
import controlCheckbox from './control-checkbox.html?raw';

type Element = {
    rootEl: HTMLElement;
    errorEl: HTMLElement;
    data: FormInput;
};

class ElementText implements Element {
    rootEl: HTMLElement;
    errorEl: HTMLElement;
    data: FormInput;
    
    constructor(data: FormInput) {
        const template = textToElement(controlInput);
        const label = query(':nth-child(1)', template);
        label.innerText = data.label;
    
        const error = query(':nth-child(3)', template);
        error.classList.remove('invisible');

        this.rootEl = template;
        this.errorEl = error;
        this.data = data;
    }
}

function createText(data: FormInput): Element {
    const template = textToElement(controlInput);
    const label = query(':nth-child(1)', template);
    label.innerText = data.label;

    const error = query(':nth-child(3)', template);
    error.classList.remove('invisible');

    //const res =

    return {
        rootEl: template,
        errorEl: error,
        data: data,
    };
}

export function createForm(inputs: FormInput[]): HTMLElement {
    const parent = textToElement(layout);
    const insElm = query('.insert-point', parent);

    const allElements = inputs.map((input) => new ElementText(input));

    allElements.reverse().forEach((el) => {
        insElm.insertBefore(el.rootEl, insElm.firstChild);
    });

    return parent;
}
