// layout.js
import store from "./store.js"; // Vuex store 가져오기
// 상단 컴포넌트 ////
const headerComp = {
  template: `
  <div class="header">
    <div class="header_inner">
      <h1><a href="./"><img src="./images/layout/logo.png" alt="logo" /></a></h1>
      <nav class="header-menu">
        <ul>
        <li v-for="(menu, idx) in menus" :key="idx">
          <a :href="menu.link">{{ menu.name }}</a>
        </li>
        </ul>
      </nav>
      <!-- 회원 추가메뉴 -->
      <nav class="add-menu">
          <ol :class="$store.state.loginCls">
            <li 
              v-for="(v,k) in addMenu"
              @click.prevent="handleMenuClick(k)"
            >
            <a href="#">
              <i :class="v" :title="k"></i>
            </a>
          </li>
        </ol>
        </nav>
    </div>
    <div @click="toggleShow" class="ham-nav-btn">
      <a href="#none">
      <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="4" width="43" height="2" fill="#333" class="burger-line__top"></rect>
      <rect y="10" width="43" height="2" fill="#333" class="burger-line__bottom"></rect>
      </svg>
      </a>
    </div>
    <div class="ham-nav-wrap">
      <div v-for="n in 5" :key="n" class="header__menu-circle" :class="'n' + n"></div>
      <ul class="ham-nav">
        <li @mouseover="addClass" @mouseout="removeClass" v-for="(menu, idx) in menus"><a :href="menu.link">{{ menu.name }}</a></li>
        <li>
          <a href="https://www.youtube.com/@pixar"><img src="./images/layout/youtube_icon.svg"></a>
          <a href="https://www.instagram.com/pixar"><img src="./images/layout/instagram_icon.svg"></a>
        </li>
      </ul>
    </div>
  </div>
  `,
  // computed: {
  //   loginCls() {
  //     return this.$store.state.loginCls; // Vuex에서 상태 가져오기
  //   }
  // },
  data: () => ({
    // 메뉴 리스트
    menus: [
      { name: "Home", link: "./" },
      { name: "About", link: "./about.html" },
      { name: "Story", link: "./story.html" },
      { name: "Video", link: "./video.html" },
      { name: "Products", link: "./products.html" },
    ],
    // 회원메뉴 데이터 : 키는 메뉴, 값은 폰트어썸 클래스
    addMenu: {
      로그인: "fa-solid fa-right-to-bracket",
      로그아웃: "fa-solid fa-right-from-bracket",
      회원가입: "fa-solid fa-user",
      // 장바구니: "fa-solid fa-cart-shopping",
    },
    // 햄버거 메뉴 토글 상태
    show: false,
    // 햄버거 메뉴 스크롤 위치
    preScrollTop: 0,
  }),
  methods: {
    // 마우스 오버 시
    addClass(e) {
      let tg = e.currentTarget;
      tg.classList.add("on");
      // 풍선요소 추가
      let addSpan = document.createElement("span");
      addSpan.innerHTML = `<img src="./images/layout/Balloon_icon.svg">`;
      addSpan.className = "balloon";
      // 만약 풍선(.balloon) 존재하면 추가 안함!
      if (!tg.querySelector(".balloon")) {
        tg.appendChild(addSpan);
      }
    },
    // 마우스 아웃 시
    removeClass(e) {
      let tg = e.currentTarget;
      tg.classList.remove("on");
      let addSpan = tg.querySelector(".balloon");
      // 풍선요소 삭제
      if (tg.querySelector(".balloon")) {
        tg.removeChild(addSpan);
      }
    },
    // 햄버거 메뉴 토글 함수
    toggleShow() {
      this.show = !this.show;
      const headerMenuWrap = document.querySelector(".ham-nav-wrap");
      const headerMenu = document.querySelector(".ham-nav-btn");
      if (this.show) {
        // 요소에 .active 클래스 추가
        headerMenu.classList.add("active");
        headerMenuWrap.classList.add("active");
      } else {
        // 요소에.active 클래스 제거
        headerMenu.classList.remove("active");
        headerMenuWrap.classList.remove("active");
      }
    },
    // 햄버거 메뉴 스크롤 함수
    scrollFn() {
      let nextScrollTop = window.scrollY;
      // console.log('scroll',nextScrollTop);
      if (this.preScrollTop < nextScrollTop || nextScrollTop < 100) {
        // 스크롤 내려갈때 on 클래스 삭제
        $(".ham-nav-btn").removeClass("on");
      } else {
        // 스크롤 올라갈때 on 클래스 추가
        $(".ham-nav-btn").addClass("on");
      }
      this.preScrollTop = nextScrollTop;
    },
    handleMenuClick(gubun) {
      if (gubun === "로그아웃") {
        this.logout();
      } else {
        this.goPage(gubun);
      }
    },
    // 회원메뉴 링크이동 함수 : goPage
    goPage(gubun) {
      // gubun - 구분키(키명)
      console.log(gubun);
      // 페이지명 셋팅변수
      let pgName;
      // 구분키별 분기
      switch (gubun) {
        case "로그인":
          pgName = "login";
          break;
        case "로그아웃":
          pgName = "index";
          break;
        case "회원가입":
          pgName = "member";
          break;
        // case "장바구니":
        //   pgName = "cart_list";
        //   break;
      } /// switch ///
      // 페이지 이동하기 //
      location.href = pgName + ".html";
    }, /// goPage 메서드 ///
    logout() {
      if (confirm("로그아웃 하시겠습니까?")) {
        sessionStorage.removeItem("login-user"); // 로그인 정보 삭제
        store.commit("setLogout"); // Vuex 상태 업데이트
        location.href = "index.html"; // 메인 페이지로 이동
      }
    }, /// logout ///
    // 모바일버전 체크 함수
    isMobile() {
      return (
        window.innerWidth <= 768 ||
        /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(
          navigator.userAgent
        )
      );
    },
    // 새로고침 또는 리사이즈시 햄메뉴 여부체크
    checkMobileView() {
      if (this.isMobile()) {
        document.querySelector(".ham-nav-btn").classList.add("on");
        window.removeEventListener("scroll", this.scrollFn);
      } else {
        document.querySelector(".ham-nav-btn").classList.remove("on");
        window.addEventListener("scroll", this.scrollFn);
      }
    },
  }, //// methods ////
  mounted() {
    // 초기 로딩 시 모바일 여부 체크
    this.checkMobileView();

    // 리사이즈 이벤트 추가
    window.addEventListener("resize", this.checkMobileView);

    // head 공통 추가
    $("head").append(`
      <!-- 어썸폰트 -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
      <!-- 파비콘 -->
      <link rel="icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/564dcb60-ccdb-4239-ae2b-da87c3c08f09/favicon.ico?format=100w">
      `);
  },
};

// 하단 컴포넌트 ////
const footerComp = {
  template: `
    <div class="footer">
    <p>@2025 All Rights Reserved.</p>
    <p>Created by UP TEAM</p>
    </div>
  `,
};

export { headerComp, footerComp };
