$(document).ready(function () {
  //서브메뉴 숨기고 시작
  $(".subMenu").hide();
  // 마우스 오버
  $(".mainMenu")
    .mouseover(function () {
      $(".subMenu").stop().slideDown(300);
    })
    .mouseout(function () {
      $(".subMenu").stop().slideUp(300);
    });
});

// 이미지 슬라이드

setInterval(function () {
  $(".slideWrap").animate({ "margin-top": "-300" }, function () {
    $(".slide:first").appendTo(".slideWrap");
    $(".slideWrap").css({ "margin-top": "0" });
  });
}, 3000);

$(".tabMenu li").click(function () {
  var idx = $(this).index();

  $(".tabItem >*").hide().removeClass("on");
  $(".tabItem >*").eq(idx).show().addClass("on");

  $(".tabMenu li").removeClass("on");
  $(this).addClass("on");
});

//popUpBox---------------------------------------------------------
$(".notice li:nth-child(1)").click(function () {
  $(".popUpBox").show();
});

$(".popUpBox button").click(function () {
  $(".popUpBox").hide();
});
