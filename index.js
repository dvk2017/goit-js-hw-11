import{S as d,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function h(s){const t="https://pixabay.com/api/",o="47762015-3b880641f1939f09591269c8d",i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${t}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function p(s){return s.reduce((t,{webformatURL:o,largeImageURL:i,tags:e,likes:r,views:a,comments:u,downloads:m})=>t+=`
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
    <p>${r}</p>
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
    <p>${m}</p>
    </div>
</diw>
  
</li>
        `,"")}const n=document.querySelector(".query"),c=document.querySelector(".gallery"),f=document.querySelector(".loading-message");let g=new d(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});function y(s){s.preventDefault(),n.value.trim()!==""&&(c.innerHTML="",f.classList.remove("visually-hidden"),h(n.value).then(t=>{if(n.value="",t.hits.length===0)throw new Error("noImagesMatching");return t.hits}).then(t=>{const o=p(t);c.insertAdjacentHTML("beforeend",o),g.refresh()}).catch(t=>{t.message==="noImagesMatching"?l.show({messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",timeout:3e3,maxWidth:"432px",messageSize:"16px",icon:"material-icons",iconText:"highlight_off",iconColor:"#ffffff",color:"#ef4040",position:"topRight"}):l.show({title:`${t}`,titleColor:"#fff",messageColor:"#fff",message:"Unable loading images",timeout:3e3,maxWidth:"432px",messageSize:"16px",icon:"material-icons",iconText:"highlight_off",iconColor:"#ffffff",color:"#ef4040",position:"topRight"})}).finally(()=>f.classList.add("visually-hidden")))}const v=document.querySelector("form");v.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
