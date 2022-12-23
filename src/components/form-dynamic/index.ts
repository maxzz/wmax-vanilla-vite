import { FormInput } from '@/store/types';
import { textToElement, query } from '@/utils';

import layout from './layout.html?raw';
import controlInput from './control-input.html?raw';
import controlSelect from './control-select.html?raw';
import controlTextarea from './control-textarea.html?raw';
import controlCheckbox from './control-checkbox.html?raw';

function createText(data: FormInput) {
    const template = textToElement(controlInput);
    const label = query(':nth-child(1)', template);
    label.innerText = data.label;
    
    return template;
}

export function createForm(inputs: FormInput[]): HTMLElement {
    const parent = textToElement(layout);
    const insElm = query('.insert-point', parent);

    inputs.reverse().forEach((input) => {
        const el = createText(input);
        insElm.insertBefore(el, insElm.firstChild);
    });

    return parent;
}
