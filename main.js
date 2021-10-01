class Toggle {
  constructor(target, btn) {
    this.target = document.querySelector(target)
    this.btn = document.querySelector(btn)
    this.removeOtherToggleClass = document.querySelectorAll(".toggle")
    this.events()
  }
  events() {
    this.btn.onclick = () => {
      let checkClass = Boolean(this.target.classList.contains("active"))
      if (checkClass) {
        this.target.classList.remove("active")
      } else {
        this.removeOtherToggleClass.forEach((el) => {
          el.classList.remove("active")
        })
        this.target.classList.add("active")
      }
    }
    window.onscroll = () => {
      this.removeOtherToggleClass.forEach((el) => {
        el.classList.remove("active")
      })
    }
  }
}

const searchForm = new Toggle(".search-form", "#search-btn")
const loginForm = new Toggle(".login-form", "#login-btn")
const shoppingCart = new Toggle(".shopping-cart", "#cart-btn")
const menu = new Toggle(".navbar", "#menu-btn")

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
})

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
})
