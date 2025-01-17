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
      <div class="ham-nav-btn">
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
        <li><a href="./">Home</a></li>
        <li><a href="#none">About</a></li>
        <li><a href="#none">Story</a></li>
        <li><a href="#none">Video</a></li>
        <li><a href="#none">Products</a></li>
      </ul>
    </nav>
    <div class="ham-nav-wrap open">
      <div class="header__menu-circle n1"></div>
      <div class="header__menu-circle n2"></div>
      <div class="header__menu-circle n3"></div>
      <div class="header__menu-circle n4"></div>
      <div class="header__menu-circle n5"></div>
      <ul class="ham-nav">
        <li @mouseover="addClass" @mouseout="removeClass"><a href="./">Home</a></li>
        <li @mouseover="addClass" @mouseout="removeClass"><a href="#none">About</a></li>
        <li @mouseover="addClass" @mouseout="removeClass"><a href="#none">Story</a></li>
        <li @mouseover="addClass" @mouseout="removeClass"><a href="#none">Video</a></li>
        <li @mouseover="addClass" @mouseout="removeClass"><a href="#none">Products</a></li>
        <li>
          <a href="#none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
          </a>
          <a href="#none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </a>
        </li>
      </ul>
    </div>
    </div>
  `,
  methods: {
    // 마우스 오버 시
    addClass(e) {
      let tg = e.currentTarget;
      tg.classList.add("on");
      // 풍선이미지 추가
      let addSpan = document.createElement("span");
      addSpan.innerHTML = `<img src="./images/Balloon.svg">`;
      addSpan.className = "balloon";
      // 만약 .balloon 가 존재하면 추가 안함!
      if(!tg.querySelector('.balloon')){
        tg.appendChild(addSpan);
      }
    },
    // 마우스 아웃 시
    removeClass(e) {
      let tg = e.currentTarget;
      tg.classList.remove("on");
      // 풍선이미지 삭제
      tg.removeChild("balloon");
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
myFn.addEvt(window, "wheel", (e) => {
  let delta = e.wheelDelta;
  // 스크롤 윈도우 top 값 구하기
  let scrollTop = window.scrollY;
  console.log(scrollTop);

  // wheelDelta값이 마이너스는 아랫방향
  // -> #header에 .on을 줘서 숨기기
  if (delta < 0) headerMenu.classList.remove("on");
  else headerMenu.classList.add("on");
  if (scrollTop < 200) headerMenu.classList.remove("on");
}); ///////// wheel 이벤트 함수 ////////

$(".ham-nav-btn").click(() => {
  $(".ham-nav-wrap").toggle();
  $(".ham-nav-btn").toggleClass("active");
});
