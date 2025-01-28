// 상단 컴포넌트 ////
const headerComponent = {
  template: `
  <div class="header">
    <div class="inner">
      <h1><a href="./"><img src="./images/layout/logo.png" alt="logo" /></a></h1>
      <div @click="toggleShow" class="ham-nav-btn">
        <a href="#none">
        <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="4" width="43" height="2" fill="#333" class="burger-line__top"></rect>
        <rect y="10" width="43" height="2" fill="#333" class="burger-line__bottom"></rect>
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
          <a href="https://www.youtube.com/@pixar"><img src="./images/layout/youtube_icon.svg"></a>
          <a href="https://www.instagram.com/pixar"><img src="./images/layout/instagram_icon.svg"></a>
        </li>
      </ul>
    </div>
  </div>
  `,
  data: () => ({
    // 메뉴 리스트
    menus: [
      {name: "Home", link: "./"},
      {name: "About", link: "./about.html"},
      {name: "Story", link: "./story.html"},
      {name: "Video", link: "./video.html"},
      {name: "Products", link: "./products.html"},
    ],
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
      const headerMenu = document.querySelector(".ham-nav-btn");
      let nextScrollTop = window.scrollY;
      // console.log('scroll',nextScrollTop);
      if (this.preScrollTop < nextScrollTop || nextScrollTop < 100) {
        // .ham-nav-btn 요소에 스크롤 내려갈때 on 클래스 삭제
        headerMenu.classList.remove("on");
      } else {
        // .ham-nav-btn 요소에 스크롤 올라갈때 on 클래스 추가
        headerMenu.classList.add("on");
      }
      this.preScrollTop = nextScrollTop;
    },
  },
  mounted() {
    // 햄버거 메뉴 스크롤 이벤트 실행
    window.addEventListener("scroll", this.scrollFn);
  },
};

// 하단 컴포넌트 ////
const footerComponent = {
  template: `
    <div class="footer">
    <p>@2025 All Rights Reserved.</p>
    <p>Created by UP TEAM</p>
    </div>
  `,
};

export {headerComponent, footerComponent};
