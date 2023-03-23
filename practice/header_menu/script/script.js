// 이미지 슬라이드 가로형
// setInterval(function () {
//   $(".slideWrap").animate({ "margin-left": "-100%" }, function () {
//     $(".slide").first().appendTo(".slideWrap");
//     $(".slideWrap").css({ "margin-left": "0%" });
//   });
// }, 3000);

//이미지 슬라이드 세로형
// setInterval(function () {
//   $(".slideWrap").animate({ marginTop: "-300px" }, function () {
//     $(".slide:first").appendTo(".slideWrap");
//     $(".slideWrap").css({ marginTop: "0px" });
//   });
// }, 3000);

// 이미지 슬라이드 페이드
$(".slide:gt(0)").hide();
setInterval(function () {
  $(".slide:first").fadeOut(1500).next().fadeIn(1500);
  $(".slide:first").appendTo(".slideWrap");
}, 3000);
