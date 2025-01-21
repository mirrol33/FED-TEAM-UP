// 메인 비주얼 페이지 JS


// 나의 함수 불러오기
import myFn from "./my_function.js";


// 스크롤등장액션 함수 불러오기
import scrollAction from "./scroll_action.js";

// 호출시 대상요소 선택하여 보내줌!
scrollAction(myFn.qsa('.sc-target'));