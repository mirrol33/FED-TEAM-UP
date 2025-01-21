// 스크롤 등장액션 셋팅 함수 /////


// 나의 함수 불러오기
import myFn from "./my_function.js";

export default function scrollAction(scrollAct){
// scrollAct - 스크롤 액션 등장할 대상요소
    
// 스크롤 등장요소의 위치값 담기
// offsetTop은 맨위에서 부터 요소의 위치값
// 배열변수에 순서대로 담는다!
const posEl = [];
scrollAct.forEach((el, idx) => (posEl[idx] = el.offsetTop));

console.log("위치값:", posEl);

// 2. 이벤트 설정하기 ////////
// (1) 스크롤시 요소등장 함수 호출
myFn.addEvt(window, "scroll", showEl);

// 기준값 만들기 : 화면 높이값을 사용(화면의 2/3)
const CRITERIA = (window.innerHeight / 3) * 2;
console.log("기준값:", CRITERIA);

// 3. 함수만들기 /////////////
// (1) 요소 등장 함수 /////////
function showEl() {
  // (1) 함수호출확인
  // console.log('나야나!',window.scrollY);

  scrollAct.forEach((el) => {
    // 각 등장요소의 바운딩 top값
    let bcrVal = myFn.getBCR(el);
    // console.log(bcrVal,
    //     el.getBoundingClientRect());

    // 화면의 2/3위치에서 클래스 넣기(등장)
    if (bcrVal < CRITERIA) el.classList.add("on");
    // 기준값 전에는 다시 클래스 제거(원위치)
    else el.classList.remove("on");
  }); ///// forEach /////
} /////// showEl함수 ////////////////

} ///////////// scrollAction 함수 ///////////