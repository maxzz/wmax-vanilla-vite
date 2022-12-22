import './style.css';
import './index.css';
import typescriptLogo from './assets/typescript.svg';

import { setupCounter } from './counter';
import { createInput } from './components/control-input';
import mainHtml from './components/main/index.html?raw';

const app = document.querySelector<HTMLDivElement>('#app')!;

const el = document.createElement('div');
el.innerHTML = mainHtml.replace('${typescriptLogo}', typescriptLogo);
app.appendChild(el);

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

createInput().forEach((el) => app.appendChild(el));
