import './style.css';
import typescriptLogo from './typescript.svg';
import { setupCounter } from './counter';
import { createInput } from './components/control-input';
import mainHtml from './components/main/index.html?raw';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = mainHtml.replace('${typescriptLogo}', typescriptLogo);

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

createInput().forEach((el) => document.body.appendChild(el));
