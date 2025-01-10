import{S as m,i as d}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(s){const r="https://pixabay.com/api/",o="47762015-3b880641f1939f09591269c8d",i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function h(s){return s.reduce((r,{webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:u,downloads:f})=>r+=`
        <li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${o}"
      data-source="${i}"
      alt="${e}"
    />
  </a>
  
<diw class="img-prop-wrap">
    <div class="img-prop">
    <h3>Likes</h3>
    <p>${t}</p>
    </div>
  <div class="img-prop">
    <h3>Viewes</h3>
    <p>${a}</p>
    </div>
  <div class="img-prop">
    <h3>Comments</h3>
    <p>${u}</p>
    </div>
  <div class="img-prop">
    <h3>Downloads</h3>
    <p>${f}</p>
    </div>
</diw>
  
</li>
        `,"")}const n=document.querySelector(".query"),c=document.querySelector(".gallery"),l=document.querySelector(".loading-message");let g=new m(".gallery .gallery-link",{captionsData:'<input type="email" name="email" autofocus />',captionDelay:250});function y(s){s.preventDefault(),n.value.trim()!==""&&(c.innerHTML="",l.classList.remove("visually-hidden"),p(n.value).then(r=>{if(n.value="",r.hits.length===0)throw d.show({messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",timeout:3e3,maxWidth:"432px",messageSize:"16px",icon:"material-icons",iconText:"highlight_off",iconColor:"#ffffff",color:"#ef4040",position:"topRight"}),new Error("there are no images matching your search query");return r.hits}).then(r=>{const o=h(r);c.insertAdjacentHTML("beforeend",o),g.refresh()}).catch(r=>console.log(r)).finally(()=>l.classList.add("visually-hidden")))}const v=document.querySelector("form");v.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
