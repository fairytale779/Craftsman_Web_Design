$("li.lv1").mouseenter(function () {
  $(this).find("ul.lv2").stop().fadeIn();
});

$("li.lv1").mouseleave(function () {
  $("ul.lv2").stop().fadeOut();
});
