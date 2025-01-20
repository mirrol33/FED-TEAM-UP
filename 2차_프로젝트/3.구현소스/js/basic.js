// basic.js

// 내함수 가져오기 ////
import myFn from "./my_function.js";
// console.log(myFn);

// 상단/하단 영역 컴포넌트 지역화 ////
const headerComponent = {
  template: `
  <div class="header">
    <div class="inner">
      <h1><a href="./"><img src="./images/logo.png" alt="logo" /></a></h1>
      <div @click="toggleShow" class="ham-nav-btn">
        <a href="#none">
        <svg data-v-f0103df8="" width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect data-v-f0103df8="" y="4" width="43" height="2" fill="#333" class="burger-line__top"></rect>
        <rect data-v-f0103df8="" y="10" width="43" height="2" fill="#333" class="burger-line__bottom"></rect>
        </svg>
        </a>
      </div>
    </div>
    <nav class="header-menu">
      <ul>
      <li v-for="(menu, idx) in menus">
        <a :href="menu.link">{{ menu.name }}</a>
      </li>
      </ul>
    </nav>
    <div class="ham-nav-wrap open">
      <div v-for="n in 5" class="header__menu-circle" :class="'n' + n">
    </div>
      <ul class="ham-nav">
        <li @mouseover="addClass" @mouseout="removeClass" v-for="(menu, idx) in menus"><a :href="menu.link">{{ menu.name }}</a></li>
        <li>
          <a href="https://www.youtube.com/@pixar"><img src="./images/youtube_icon.svg"></a>
          <a href="https://www.instagram.com/pixar"><img src="./images/instagram_icon.svg"></a>
        </li>
      </ul>
    </div>
    </div>
  `,
  data: () => ({
    menus: [
      {name: "Home", link: "./"},
      {name: "about", link: "./about.html"},
      {name: "story", link: "./story.html"},
      {name: "video", link: "./video.html"},
      {name: "products", link: "./products.html"},
    ],
  }),
  methods: {
    // 마우스 오버 시
    addClass(e) {
      let tg = e.currentTarget;
      tg.classList.add("on");
      // 풍선이미지 추가
      let addSpan = document.createElement("span");
      addSpan.innerHTML = `<img src="./images/Balloon_icon.svg">`;
      addSpan.className = "balloon";
      // 만약 .balloon 가 존재하면 추가 안함!
      if (!tg.querySelector(".balloon")) {
        tg.appendChild(addSpan);
      }
    },
    // 마우스 아웃 시
    removeClass(e) {
      let tg = e.currentTarget;
      tg.classList.remove("on");
      let addSpan = tg.querySelector(".balloon");
      // 풍선이미지 삭제
      if (tg.querySelector(".balloon")) {
        tg.removeChild(addSpan);
      }
    },
    toggleShow() {
      this.show = !this.show;
      const hamMenuWrap = myFn.qs(".ham-nav-wrap");
      if(this.show){
        //.ham-nav-wrap 요소에 .active 클래스 추가
        hamMenuWrap.classList.add("active");
      }else{
        //.ham-nav-wrap 요소에.active 클래스 제거
        hamMenuWrap.classList.remove("active");
      }
    },
  },
};
const footerComponent = {
  template: `
    <div class="footer">
    <p>@2025 All Rights Reserved.</p>
    <p>Created by UP TEAM</p>
    </div>
  `,
};

new Vue({
  el: "#app",
  components: {
    "header-component": headerComponent,
    "footer-component": footerComponent,
  },
});

const headerMenu = myFn.qs(".ham-nav-btn");
let preScrollTop = 0;
window.addEventListener("scroll", () => {
  let nextScrollTop = window.scrollY;
  // console.log('scroll',nextScrollTop);

  if (preScrollTop < nextScrollTop || nextScrollTop < 100) {
    // console.log('Down!');
    headerMenu.classList.remove("on");
  } else {
    // console.log('Up!');
    headerMenu.classList.add("on");
  }
  preScrollTop = nextScrollTop;
});