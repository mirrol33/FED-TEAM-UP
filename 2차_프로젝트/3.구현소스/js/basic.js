// basic.js

// 내함수 가져오기 ////
import myFn from "./my_function.js";

// Vuex store 불러오기
import store from "./store.js";
import proComp from "./products.js";

// 다른 컴포넌트 불러오기
import { headerComp, footerComp } from "./layout.js";
import aboutComp from "./about.js";
import joinComp from "./join.js";
import loginComp from "./login.js";

// 전체 요소 #app 태그로 감싸기!
$("header, main, footer").wrapAll('<div id="app"></div>');

// 상,하단 컴포넌트 태그 추가하기!
myFn.qs("header").innerHTML = `<header-comp></header-comp>`;
myFn.qs("footer").innerHTML = `<footer-comp></footer-comp>`;

// 뷰 인스턴스 생성 ////
new Vue({
  el: "#app",
  components: {
    "header-comp": headerComp,
    "footer-comp": footerComp,
    "about-comp": aboutComp,
    "products-comp": proComp,
    "join-comp": joinComp,
    "login-comp": loginComp,
  },
  store,
  // data: () => ({}),
  // methods: {},
  // mounted() {},
});