// basic.js

// 내함수 가져오기 ////
import myFn from "./my_function.js";
// console.log(myFn);

// 상단/하단 영역 컴포넌트 지역화 ////
const headerComponent = {
  template: `
  <div class="header">
        <h1><a href="./"><img src="./images/logo.png" alt="logo" /></a></h1>
        <nav class="header-menu">
          <ul>
            <li><a href="./">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Story</a></li>
            <li><a href="#">Video</a></li>
            <li><a href="#">Products</a></li>
          </ul>
        </nav>
        <div class="ham-nav-btn"><a href="">ham</a></div>
        <div class="ham-nav-wrap open">
          <div class="header__menu-circle n1"></div>
          <div class="header__menu-circle n2"></div>
          <div class="header__menu-circle n3"></div>
          <div class="header__menu-circle n4"></div>
          <div class="header__menu-circle n5"></div>
          <ul class="ham-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Story</a></li>
            <li><a href="#">Video</a></li>
            <li><a href="#">Products</a></li>
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
