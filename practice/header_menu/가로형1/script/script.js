$("header nav >ul").mouseenter(function () {
  $("ul.lv2").stop().slideDown(800);
});

$("header nav >ul").mouseleave(function () {
  $("ul.lv2").stop().slideUp(500);
});
