class Toggle{constructor(e,t){this.target=document.querySelector(e),this.btn=document.querySelector(t),this.removeOtherToggleClass=document.querySelectorAll(".toggle"),this.events()}events(){this.btn.onclick=(()=>{Boolean(this.target.classList.contains("active"))?this.target.classList.remove("active"):(this.removeOtherToggleClass.forEach(e=>{e.classList.remove("active")}),this.target.classList.add("active"))}),window.onscroll=(()=>{this.removeOtherToggleClass.forEach(e=>{e.classList.remove("active")})})}}const searchForm=new Toggle(".search-form","#search-btn"),loginForm=new Toggle(".login-form","#login-btn"),shoppingCart=new Toggle(".shopping-cart","#cart-btn"),menu=new Toggle(".navbar","#menu-btn");var swiper=new Swiper(".product-slider",{loop:!0,spaceBetween:20,autoplay:{delay:6500,disableOnInteraction:!1},centeredSlides:!0,breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},1020:{slidesPerView:3}}});swiper=new Swiper(".review-slider",{loop:!0,spaceBetween:20,autoplay:{delay:5500,disableOnInteraction:!1},centeredSlides:!0,breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},1020:{slidesPerView:3}}});document.addEventListener("DOMContentLoaded",function(){var e;if("IntersectionObserver"in window){e=document.querySelectorAll(".lazy");var t=new IntersectionObserver(function(e,n){e.forEach(function(e){if(e.isIntersecting){var n=e.target;n.src=n.dataset.src,n.classList.remove("lazy"),t.unobserve(n)}})});e.forEach(function(e){t.observe(e)})}else{var n;function s(){n&&clearTimeout(n),n=setTimeout(function(){var t=window.pageYOffset;e.forEach(function(e){e.offsetTop<window.innerHeight+t&&(e.src=e.dataset.src,e.classList.remove("lazy"))}),0==e.length&&(document.removeEventListener("scroll",s),window.removeEventListener("resize",s),window.removeEventListener("orientationChange",s))},20)}e=document.querySelectorAll(".lazy"),document.addEventListener("scroll",s),window.addEventListener("resize",s),window.addEventListener("orientationChange",s)}});