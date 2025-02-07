/* 컨셉아트 페이지 JS - story.js */

// 나의 함수 불러오기
import myFn from "./my_function.js";

/* 
    [ 라잇박스 플러그인 ]
    - 기능: 썸네일 이미지를 클릭하면 전체화면에 큰 이미지보기
    기능으로 갤러리를 구성해주는 플러그인
    - 구현방법: 상단에 라잇박스 CSS, JS를 불러온 후 코딩한다.
    - 플러그인 호출함수: lightBox() 메서드
    - 사용할 썸네일에 a요소로 기본 셋팅이 필요함(하단에 기술함)
*/
// 라잇박스 플러그인 호출하기!
// 대상: .view
// 옵션변경하려면 기본 메서드 호출시 파라미터 객체를 셋팅한다!
// lightBox({객체셋팅})
$(".view").lightBox({
  overlayBgColor: "black", // 배경색 변경
  overlayOpacity: 0.7, // 배경색 투명도
  containerResizeSpeed: 300,
  // 이미지 리사이즈 속도(1/1000초)
  maxWidth: 100,
}); ///// lightBox /////////
