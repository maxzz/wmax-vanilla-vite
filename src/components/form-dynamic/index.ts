import { FormInput } from '@/store/types';
import { controlFromLayout } from '@/utils';

import layout from './layout.html?raw';
import controlInput from './control-input.html?raw';
import controlSelect from './control-select.html?raw';
import controlTextarea from './control-textarea.html?raw';
import controlCheckbox from './control-checkbox.html?raw';

export function createForm(inputs: FormInput[]): HTMLElement {
    const parent = controlFromLayout(layout);
    const insElm = parent.querySelector('.insert-area')!;

    inputs.forEach((input) => {
        const el = controlFromLayout(controlInput);
        insElm.insertBefore(el, insElm.firstChild);
    });

    return parent;
}
