import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as m,i as h}from"./assets/vendor-651d7991.js";let o=0,s=null;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(o=t[0]-Date.now(),o<0){h.error({theme:"red",position:"topRight",message:"Please choose a date in the future"});return}e.startBtn.removeAttribute("disabled")}};m("#datetime-picker",y);const e={startBtn:document.querySelector("button[data-start]"),days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")};e.startBtn.setAttribute("disabled",!0);e.startBtn.addEventListener("click",()=>{s||(s=setInterval(f,1e3))});function f(){o<1e3&&clearInterval(s);const{days:t,hours:a,minutes:u,seconds:d}=p(o);o-=1e3;const n=r=>r.toString().padStart(2,"0");e.days.textContent=n(t),e.hours.textContent=n(a),e.minutes.textContent=n(u),e.seconds.textContent=n(d)}function p(t){const r=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:c,minutes:i,seconds:l}}
//# sourceMappingURL=commonHelpers2.js.map
