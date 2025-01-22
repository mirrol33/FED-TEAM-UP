// basic.js

// 내함수 가져오기 ////
import myFn from "./my_function.js";
// console.log(myFn);

// 전체 요소 #app 태그로 감싸기!
$("header, main, footer").wrapAll('<div id="app"></div>');
// 상,하단 컴포넌트 태그 추가하기!
myFn.qs("header").innerHTML = `<header-component></header-component>`;
myFn.qs("footer").innerHTML = `<footer-component></footer-component>`;

// 상단 컴포넌트 지역화 ////
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
    <div class="ham-nav-wrap">
      <div v-for="n in 5" class="header__menu-circle" :class="'n' + n"></div>
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
      {name: "About", link: "./about.html"},
      {name: "Story", link: "./story.html"},
      {name: "Video", link: "./video.html"},
      {name: "Products", link: "./products.html"},
    ],
    show: false,
  }),
  methods: {
    // 마우스 오버 시
    addClass(e) {
      let tg = e.currentTarget;
      tg.classList.add("on");
      // 풍선SVG 추가
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
      // 풍선SVG 삭제
      if (tg.querySelector(".balloon")) {
        tg.removeChild(addSpan);
      }
    },
    toggleShow() {
      this.show = !this.show;
      if (this.show) {
        headerMenu.classList.add("active");
        //.ham-nav-wrap 요소에 .active 클래스 추가
        headerMenuWrap.classList.add("active");
      } else {
        headerMenu.classList.remove("active");
        //.ham-nav-wrap 요소에.active 클래스 제거
        headerMenuWrap.classList.remove("active");
      }
    },
  },
};

// 하단 컴포넌트 지역화 ////
const footerComponent = {
  template: `
    <div class="footer">
    <p>@2025 All Rights Reserved.</p>
    <p>Created by UP TEAM</p>
    </div>
  `,
};

// 뷰 인스턴스 생성 ////
new Vue({
  el: "#app",
  components: {
    "header-component": headerComponent,
    "footer-component": footerComponent,
  },
  data: () => ({
    preScrollTop: 0,
  }),
  methods: {
    // 햄버거 메뉴 스크롤 함수
    scrollFn() {
      let nextScrollTop = window.scrollY;
      // console.log('scroll',nextScrollTop);
      if (preScrollTop < nextScrollTop || nextScrollTop < 100) {
        // .ham-nav-btn 요소에 스크롤 내려갈때 on 클래스 삭제
        headerMenu.classList.remove("on");
      } else {
        // .ham-nav-btn 요소에 스크롤 올라갈때 on 클래스 추가
        headerMenu.classList.add("on");
      }
      preScrollTop = nextScrollTop;
    },
  },
  mounted() {
    // 햄버거 메뉴 스크롤 이벤트 실행
    window.addEventListener("scroll", this.scrollFn);
  },
});

// 햄버거 메뉴 변수선언!!
const headerMenu = myFn.qs(".ham-nav-btn");
const headerMenuWrap = myFn.qs(".ham-nav-wrap");
let preScrollTop = 0;


// window.addEventListener("scroll", scrollFn);
// function scrollFn() {
//   let nextScrollTop = window.scrollY;
//   // console.log('scroll',nextScrollTop);
//   if (preScrollTop < nextScrollTop || nextScrollTop < 100) {
//     // .ham-nav-btn 요소에 스크롤 내려갈때 on 클래스 삭제
//     headerMenu.classList.remove("on");
//   } else {
//     // .ham-nav-btn 요소에 스크롤 올라갈때 on 클래스 추가
//     headerMenu.classList.add("on");
//   }
//   preScrollTop = nextScrollTop;
// }
