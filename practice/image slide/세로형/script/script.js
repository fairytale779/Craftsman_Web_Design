//이미지 슬라이드 세로형
setInterval(function () {
  $(".slideWrap").animate({ marginTop: "-300px" }, function () {
    $(".slide:first").appendTo(".slideWrap");
    $(".slideWrap").css({ marginTop: "0px" });
  });
}, 3000);
