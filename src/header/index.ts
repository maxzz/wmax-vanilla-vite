import { textToElement } from '@/utils';
import header from './index.html?raw';
import './index.scss';

//console.log('css', css.transition);

export function createHeader() {
    return textToElement(header);
}