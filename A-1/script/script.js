$(document).ready(function () {
  //**** 마우스오버  ****//
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
