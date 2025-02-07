// 업 : 비디오파트

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 사이즈별 변경
  breakpoints: {
    // when window width is >= 100px
    100: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    500: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
  // 자동 넘김 기능
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});

const tg = document.querySelectorAll(".swiper-slide");

const btns = document.querySelectorAll('.arrow-icon i');

btns[0].onclick = ()=> swiper.slidePrev();
btns[1].onclick = ()=> swiper.slideNext();

tg.forEach((el) => {
  el.onclick = (e) => {
    let mvid = e.currentTarget.getAttribute("data-mv");
    if(!mvid) mvid = "4uSn4Dem9i0";
    console.log(mvid);
    // 예고편 플레이 함수호출!
    playMovie(mvid);
  };
});

// 
function playMovie(mcode) {
  // mcode 영화아이디
  // 함수호출 및 전달값 확인
  console.log("예고편상영이요~~!", mcode);

  // 1. 대상선정 : #mvbox
  let mvbox = document.querySelector("#mvbox");

  // 2. 영화박스에 아이프레임 넣기
  mvbox.innerHTML = `
      <div id="mv">
        <!-- 유튜브 아이프레임 -->
        <iframe src="https://www.youtube.com/embed/${mcode}?autoplay=1" allow="autoplay"></iframe>
        <!-- 닫기버튼 -->
        <button class="cbtn">×</button>
      </div>
              `;

  // 3. 삽입된 동영상 박스 CSS설정하기
  let mv = document.querySelector("#mv");
  let css = mv.style;

  css.position = "fixed";
  css.top = "50%";
  css.left = "50%";
  css.zIndex = "9999";
  css.transform = "translate(-50%, -50%)";
  css.width = "70vw";
  css.aspectRatio = "16/9";
  css.backgroundColor = "#000";
  
  // 4. 아이프레임 CSS설정
  let ifr = mv.querySelector("iframe");
  let ifrcss = ifr.style;
  ifrcss.border = "none";
  ifrcss.width = "100%";
  ifrcss.height = "100%";

  // 5. 닫기버튼  CSS셋팅하기
  let cbtn = mv.querySelector(".cbtn");
  // style.cssText 로 셋팅하자!
  // 개별셋팅과 차이점은 이 설정은 모든 style속성의
  // CSS 설정을 덮어씀! 주의!!!
  // 반면 한 속성씩 셋팅하는 것은 한껀씩 개별 업데이트됨!
  cbtn.style.cssText = `
      position : absolute;
      top : 0;
      right : -70px;
      width : 50px;
      height : 50px;
      border : none;
      color : #fff;
      background-color : blue;
      font-size : 40px;
      font-weight : bold;
      border-radius: 50%;
      cursor : pointer;
      line-height : 50px;
    `;

  // 6. 닫기버튼 클릭시 #mv 제거하기
  cbtn.onclick = function () {
    mv.remove();
    // remove() 는 DOM 메서드임!
    // 선택요소를 제거함!

    // body 암전효과 클래스 on 제거하기
    document.body.classList.remove("on");
  }; //////// 닫기버튼 이벤트함수 ///////

  // 7. body 요소에 클래스 on주기
  // 동영상 배경 암전효과
  document.body.classList.add("on");
} ///////////// playMovie 함수 ///////////
///////////////////////////////////////////


// window.addEventListener("resize", function(){
//   window.location.reload();
// })