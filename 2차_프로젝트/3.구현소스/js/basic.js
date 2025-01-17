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
      <div class="ham-nav-btn"><a href="#none"><svg data-v-f0103df8="" width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect data-v-f0103df8="" y="4" width="43" height="2" fill="#333" class="burger-line__top"></rect><rect data-v-f0103df8="" y="10" width="43" height="2" fill="#333" class="burger-line__bottom"></rect></svg></a></div>
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
        <li><a href="./">Home</a></li>
        <li><a href="#none">About</a></li>
        <li><a href="#none">Story</a></li>
        <li><a href="#none">Video</a></li>
        <li><a href="#none">Products</a></li>
      </ul>
    </div>
    </div>
  `,
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

const headerMenu = myFn.qs('.ham-nav-btn');
myFn.addEvt(window,'wheel',(e)=>{
    let delta = e.wheelDelta;
    // 스크롤 윈도우 top 값 구하기
    let scrollTop = window.pageYOffset;
    console.log(scrollTop);

    // wheelDelta값이 마이너스는 아랫방향
    // -> #header에 .on을 줘서 숨기기
    if(delta < 0) headerMenu.classList.remove('on');
    else headerMenu.classList.add('on');
    if(scrollTop < 200) headerMenu.classList.remove('on');

}); ///////// wheel 이벤트 함수 ////////