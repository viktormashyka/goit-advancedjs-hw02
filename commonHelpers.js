import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */function n(){return Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}const e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]"),o=document.querySelector("body");let t=null;e.addEventListener("click",()=>{t||(t=setInterval(l,1e3))});r.addEventListener("click",a);function l(){o.style.backgroundColor=`#${n()}`}function a(){clearInterval(t),o.style.backgroundColor="",t=null}
//# sourceMappingURL=commonHelpers.js.map
