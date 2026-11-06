"use strict";
const menu=document.querySelector(".menu-button"),nav=document.querySelector(".main-nav");
menu?.addEventListener("click",()=>{const opened=menu.getAttribute("aria-expanded")==="true";menu.setAttribute("aria-expanded",String(!opened));nav?.classList.toggle("open",!opened)});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu?.setAttribute("aria-expanded","false")}));
const toggles=[...document.querySelectorAll("[data-chart-view]")];toggles.forEach(button=>button.addEventListener("click",()=>{const view=button.dataset.chartView;toggles.forEach(b=>{const active=b===button;b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active))});document.querySelectorAll("[data-series]").forEach(series=>{const active=view==="both"||series.dataset.series===view;series.style.opacity=active?"1":".08"});document.querySelectorAll("[data-legend]").forEach(legend=>{legend.style.opacity=view==="both"||legend.dataset.legend===view?"1":".35"})}));
const year=document.getElementById("year");if(year)year.textContent=String(new Date().getFullYear());
const academicEmail="";if(academicEmail){const link=document.getElementById("email-link");if(link){link.href="mailto:"+academicEmail;link.textContent=academicEmail+" ↗";link.removeAttribute("aria-disabled");document.querySelector(".contact-hint")?.remove()}}
