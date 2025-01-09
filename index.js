import{S as m,i as p}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(a){return a.reduce((t,{webformatURL:o,largeImageURL:i,tags:e,likes:r,views:s,comments:u,downloads:d})=>t+=`
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
    <p>${s}</p>
    </div>
  <div class="img-prop">
    <h3>Comments</h3>
    <p>${u}</p>
    </div>
  <div class="img-prop">
    <h3>Downloads</h3>
    <p>${d}</p>
    </div>
</diw>
  
</li>
        `,"")}const n=document.querySelector(".query"),c=document.querySelector(".gallery"),l=document.querySelector(".loading-message");let h=new m(".gallery .gallery-link",{captionsData:'<input type="email" name="email" autofocus />',captionDelay:250});function g(a){if(a.preventDefault(),n.value.trim()==="")return;c.innerHTML="";const t="https://pixabay.com/api/",o="47762015-3b880641f1939f09591269c8d",i=new URLSearchParams({key:o,q:n.value,image_type:"photo",orientation:"horizontal",safesearch:!0});return l.classList.remove("visually-hidden"),fetch(`${t}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(n.value="",e.hits.length===0)throw p.show({messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",timeout:0,maxWidth:"432px",messageSize:"16px",iconUrl:"../img/cancel-circle.svg",color:"#ef4040",position:"topRight"}),new Error("there are no images matching your search query");return e.hits}).then(e=>{const r=f(e);c.insertAdjacentHTML("beforeend",r),h.refresh()}).catch(e=>console.log(e)).finally(()=>l.classList.add("visually-hidden"))}const y=document.querySelector("form");y.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
