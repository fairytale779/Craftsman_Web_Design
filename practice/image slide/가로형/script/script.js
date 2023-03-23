// 이미지 슬라이드 가로형
setInterval(function () {
  $(".slideWrap").animate({ "margin-left": "-100%" }, function () {
    $(".slide").first().appendTo(".slideWrap");
    $(".slideWrap").css({ "margin-left": "0%" });
  });
}, 3000);
