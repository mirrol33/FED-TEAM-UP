// basic.js

// 내함수 가져오기 ////
import myFn from "./my_function.js";


// 컴포넌트 불러오기
import { headerComponent, footerComponent } from "./layout.js";
import aboutComp from "./about.js";
import proComp from "./products.js";
import joinComp from "./join.js";
import loginComp from "./login.js";

// 전체 요소 #app 태그로 감싸기!
$("header, main, footer").wrapAll('<div id="app"></div>');

// 상,하단 컴포넌트 태그 추가하기!
myFn.qs("header").innerHTML = `<header-component></header-component>`;
myFn.qs("footer").innerHTML = `<footer-component></footer-component>`;

// 뷰 인스턴스 생성 ////
new Vue({
  el: "#app",
  // store,
  components: {
    "header-component": headerComponent,
    "footer-component": footerComponent,
    "about-component": aboutComp,
    "products-component": proComp,
    "join-comp": joinComp,
    "login-comp": loginComp,
  },
  // data: () => ({}),
  // methods: {},
  // mounted() {},
});