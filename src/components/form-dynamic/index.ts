import { FormInput } from '@/store/types';
import { textToElement, query } from '@/utils';

import layout from './layout.html?raw';
import controlInput from './control-input.html?raw';
import controlSelect from './control-select.html?raw';
import controlTextarea from './control-textarea.html?raw';
import controlCheckbox from './control-checkbox.html?raw';

type DOMElementType = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

type Element = {
    rootEl: HTMLElement;
    inputEl: DOMElementType;
    errorEl: HTMLElement;
    data: FormInput;
};

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

        this.inputEl.addEventListener('change', this.onInput);
    }

    updateErrorMessage() {
        this.errorEl.style.visibility = !this.inputEl.value ? 'visible' : 'hidden';
    }

    onInput = () => {
        this.updateErrorMessage();
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
