// 이미지 슬라이드 페이드
$(".slide:gt(0)").hide();
setInterval(function () {
  $(".slide:first").fadeOut(1500).next().fadeIn(1500);
  $(".slide:first").appendTo(".slideWrap");
}, 3000);
