import { FormInput } from '@/store/types';
import { textToElement, query } from '@/utils';

import layout from './layout.html?raw';
import controlInput from './control-input.html?raw';
import controlSelect from './control-select.html?raw';
import controlTextarea from './control-textarea.html?raw';
import controlCheckbox from './control-checkbox.html?raw';

export type DOMElementType = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export type Element = {
    rootEl: HTMLElement;
    inputEl: DOMElementType;
    errorEl: HTMLElement;
    data: FormInput;
};

export type FormElements = {
    elements: Element[];
    rootEl: HTMLElement;
}

class ElementText implements Element {
    rootEl: HTMLElement;
    inputEl: DOMElementType;
    errorEl: HTMLElement;
    data: FormInput;

    constructor(data: FormInput) {
        const template = textToElement(controlInput);
        const label = query(':nth-child(1)', template);
        label.innerText = data.label;

        const input = query<DOMElementType>(':nth-child(2)', template);

        const error = query(':nth-child(3)', template);
        error.classList.remove('invisible');

        this.rootEl = template;
        this.inputEl = input;
        this.errorEl = error;
        this.data = data;

        this.inputEl.addEventListener('blur', this.onInput);
        this.updateErrorMessage(false);
    }

    updateErrorMessage(show: boolean) {
        this.errorEl.style.visibility = show ? 'visible' : 'hidden';
    }

    onInput = () => {
        this.updateErrorMessage(!this.inputEl.value);
    };
}

export function createForm(inputs: FormInput[]): FormElements {
    const parent = textToElement(layout);
    const insElm = query('.insert-point', parent);

    const allElements = inputs.map((input) => new ElementText(input));

    allElements.reverse().forEach((el) => {
        insElm.insertBefore(el.rootEl, insElm.firstChild);
    });

    const res: FormElements = {
        elements: allElements,
        rootEl: parent,
    }

    return res;
}
