import './style.css';
import './index.css';
//import typescriptLogo from './assets/typescript.svg';
//import { setupCounter } from './components/counter';
//import { createFormStatic } from './components/form-static';
//import mainHtml from './components/main/index.html?raw';
import { createForm } from './components/form';

const app = document.querySelector<HTMLDivElement>('#app')!;

// const el = document.createElement('div');
// el.innerHTML = mainHtml.replace('${typescriptLogo}', typescriptLogo);
// app.appendChild(el);

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

createForm().forEach((el) => app.appendChild(el));
//createFormStatic().forEach((el) => app.appendChild(el));
