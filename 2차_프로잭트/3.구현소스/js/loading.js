// 로딩화면 JS - loading.js

function counter() {
  var count = setInterval(function () {
    var c = parseInt($(".counter").text());
    $(".counter").text((++c).toString());
    if (c === 100) {
      clearInterval(count);
      $(".counter").addClass("hide");
      $(".loading").addClass("active");
    }
  }, 10);
}
counter();

document.addEventListener("load", function () {
  window.scrollTo(0, 0);
});
