import { textToElement } from '@/utils';
import header from './index.html?raw';

export function createHeader() {
    return textToElement(header);
}