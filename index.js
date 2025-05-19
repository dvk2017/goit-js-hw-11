import{S as h,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function d(t){const i="https://pixabay.com/api/",s="47762015-3b880641f1939f09591269c8d",o=new URLSearchParams({key:s,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${i}?${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function p(t){return t.reduce((i,{webformatURL:s,largeImageURL:o,tags:e,likes:r,views:n,comments:u,downloads:m})=>i+=`
        <li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src="${s}"
      data-source="${o}"
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
    <p>${n}</p>
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
        `,"")}const a=document.querySelector(".query"),c=document.querySelector(".gallery"),f=document.querySelector(".loading-message");let g=new h(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});function y(){a.value.trim()!==""&&(c.innerHTML="",w(),d(a.value).then(t=>{if(a.value="",t.hits.length===0)throw new Error("noImagesMatching");return t.hits}).then(t=>{const i=p(t);c.insertAdjacentHTML("beforeend",i),g.refresh()}).catch(t=>{t.message==="noImagesMatching"?l.show({messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",timeout:3e3,maxWidth:"432px",messageSize:"16px",icon:"material-icons",iconText:"highlight_off",iconColor:"#ffffff",color:"#ef4040",position:"topRight"}):l.show({title:`${t}`,titleColor:"#fff",messageColor:"#fff",message:"Unable loading images",timeout:3e3,maxWidth:"432px",messageSize:"16px",icon:"material-icons",iconText:"highlight_off",iconColor:"#ffffff",color:"#ef4040",position:"topRight"})}).finally(()=>S()))}const v=document.querySelector("form");v.addEventListener("submit",t=>{t.preventDefault(),y()});function w(){f.classList.remove("visually-hidden")}function S(){return f.classList.add("visually-hidden")}
//# sourceMappingURL=index.js.map
