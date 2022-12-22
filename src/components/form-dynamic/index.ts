import { FormInput } from '@/store/types';
import layout from './layout.html?raw';

export function createForm(inputs: FormInput[]): HTMLElement {

    const parent = document.createElement('div');
    parent.innerHTML = layout;

    const el = parent.firstElementChild as HTMLElement;
    return el;
}
//insert-area
