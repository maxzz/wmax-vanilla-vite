import './style.css';
import './index.css';
//import typescriptLogo from './assets/typescript.svg';
//import { setupCounter } from './components/counter';
//import { createFormStatic } from './components/form-static';
//import mainHtml from './components/main/index.html?raw';
import { createForm } from './components/form-dynamic';
import { FormInput, InputType } from './store/types';
import { createHeader } from './header';

function main() {
    const app = document.querySelector<HTMLDivElement>('#app')!;

    // const el = document.createElement('div');
    // el.innerHTML = mainHtml.replace('${typescriptLogo}', typescriptLogo);
    // app.appendChild(el);
    
    // setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

    //createFormStatic().forEach((el) => app.appendChild(el));

    const header = createHeader();
    app.appendChild(header);
    
    const inputs: FormInput[] = [
        {
            label: "Input control 1",
            type: InputType.text,
            value: '',
        },
        {
            label: "Input control 2",
            type: InputType.text,
            value: '',
        },
        {
            label: "Input control 3",
            type: InputType.text,
            value: '',
        },
    ];
    const formElements = createForm(inputs);
    app.appendChild(formElements.rootEl);
}

main();
