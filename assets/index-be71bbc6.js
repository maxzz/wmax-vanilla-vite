var m=Object.defineProperty;var h=(t,e,r)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var i=(t,e,r)=>(h(t,typeof e!="symbol"?e+"":e,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();function b({doRemoveClass:t=!1}={}){return(e,r="active",o="transition")=>{const n=e.classList.contains(r);if(t&&!n||!t&&n)return Promise.resolve();const s=new Promise(d=>{function f(p){p.target===e&&(console.log("transitionend"),e.removeEventListener("transitionend",f),e.classList.remove(o),d())}e.classList.add(o),requestAnimationFrame(()=>{e.addEventListener("transitionend",f),e.classList[t?"remove":"add"](r)})}),l=new Promise(d=>{setTimeout(()=>{console.log("transitionTimeout"),d()},1e3)});return Promise.race([s,l])}}const v=b();function u(t){const e=document.createElement("div");if(e.innerHTML=t,!e.firstChild)throw new Error(`Bad template: ${t}`);return e.firstElementChild}function a(t,e=document){const r=e.querySelector(t);if(!r)throw new Error(`Failed to get element by '${t}' selector.`);return r}const g=`<div class="my-12 px-4 grid grid-cols-[1fr_minmax(15ch,65ch)_1fr]">\r
    <!-- <b class="bg-blue-200"></b> -->\r
\r
    <div class="col-start-2 px-4 py-4 text-2xl font-semibold tracking-tighter bg-slate-200 select-none">\r
        Form caption\r
    </div>\r
\r
    <div class="p-4 col-start-2 bg-slate-100 grid insert-point">\r
\r
\r
        <div class="mt-4 flex justify-end gap-x-2 select-none">\r
            <input class="px-4 py-2 hover:bg-slate-200 border-slate-500 border rounded active:scale-[.97] form-focus-element" type="button" value="OK">\r
            <input class="px-4 py-2 hover:bg-slate-200 border-slate-500 border rounded active:scale-[.97] form-focus-element" type="button" value="Cancel">\r
        </div>\r
    </div>\r
\r
    <!-- <b class="bg-blue-200"></b> -->\r
</div>\r
`,x=`<label class="grid select-none">\r
    <span>Input label</span>\r
    <input class="border-slate-500 border rounded-sm form-focus-element" type="text">\r
    <span class="invisible text-xs leading-3 font-semibold text-red-500">The field value cannot be empty.</span>\r
</label>\r
`;class E{constructor(e){i(this,"rootEl");i(this,"inputEl");i(this,"errorEl");i(this,"data");i(this,"onInput",()=>{this.updateErrorMessage(!this.inputEl.value)});const r=u(x),o=a(":nth-child(1)",r);o.innerText=e.label;const n=a(":nth-child(2)",r),s=a(":nth-child(3)",r);s.classList.remove("invisible"),this.rootEl=r,this.inputEl=n,this.errorEl=s,this.data=e,this.inputEl.addEventListener("blur",this.onInput),this.updateErrorMessage(!1)}updateErrorMessage(e){this.errorEl.style.visibility=e?"visible":"hidden"}}function y(t){const e=u(g),r=a(".insert-point",e),o=t.map(s=>new E(s));return o.reverse().forEach(s=>{r.insertBefore(s.rootEl,r.firstChild)}),{elements:o,rootEl:e}}var c=(t=>(t[t.text=0]="text",t[t.select=1]="select",t[t.check=2]="check",t[t.radio=3]="radio",t[t.area=4]="area",t))(c||{});const L=`<header class="px-3 py-3 bg-slate-200 flex justify-between header2">\r
    <div class="text-2xl leading-6 hue-rotate-[270deg] opacity-10">💎</div>\r
    <div class="pb-1 text-xl leading-6 font-semibold tracking-tighter uppercase text-slate-400">UI playground</div>\r
</header>\r
`;function w(){return u(L)}function C(){const t=document.querySelector("#app"),e=w();t.appendChild(e),v(e,"active","transition");const r=[{label:"Input control 1",type:c.text,value:""},{label:"Input control 2",type:c.text,value:""},{label:"Input control 3",type:c.text,value:""}],o=y(r);t.appendChild(o.rootEl)}C();
