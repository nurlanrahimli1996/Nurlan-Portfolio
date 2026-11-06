"use strict";
const menu=document.querySelector(".nav-toggle");
const nav=document.querySelector("#site-nav");
if(menu&&nav){
 menu.addEventListener("click",()=>{
  const willOpen=menu.getAttribute("aria-expanded")!=="true";
  menu.setAttribute("aria-expanded",String(willOpen));
  menu.setAttribute("aria-label",willOpen?"Close navigation":"Open navigation");
  nav.classList.toggle("open",willOpen);
 });
 nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  nav.classList.remove("open");
  menu.setAttribute("aria-expanded","false");
  menu.setAttribute("aria-label","Open navigation");
 }));
}
document.querySelectorAll('[role="tablist"]').forEach(list=>{
 const tabs=Array.from(list.querySelectorAll('[role="tab"][data-tab]'));
 function activate(selected,focus){
  tabs.forEach(tab=>{
   const active=tab===selected;
   tab.setAttribute("aria-selected",String(active));
   tab.setAttribute("tabindex",active?"0":"-1");
   const panel=document.getElementById("panel-"+tab.dataset.tab);
   if(panel)panel.hidden=!active;
  });
  if(focus)selected.focus();
 }
 tabs.forEach((tab,index)=>{
  tab.addEventListener("click",()=>activate(tab,false));
  tab.addEventListener("keydown",event=>{
   const move=event.key==="ArrowRight"?1:event.key==="ArrowLeft"?-1:0;
   if(!move&&event.key!=="Home"&&event.key!=="End")return;
   event.preventDefault();
   const target=event.key==="Home"?0:event.key==="End"?tabs.length-1:(index+move+tabs.length)%tabs.length;
   activate(tabs[target],true);
  });
 });
});
const year=document.getElementById("year");if(year)year.textContent=String(new Date().getFullYear());
