$(function () {
  $("ul.lv2, .subBg").hide();
  $("li.lv1").mouseover(function () {
    $("ul.lv2, .subBg").stop().fadeIn(300);
  });
  $("li.lv1").mouseleave(function () {
    $("ul.lv2, .subBg").stop().fadeOut(300);
  });

  $(".slide li:gt(0)").hide();

  setInterval(function () {
    $(".slide ul li:first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo(".slide ul");
  }, 2000);

  $(".tabMenu li").click(function () {
    var idx = $(this).index();

    $(".tabItem >*").hide().removeClass("on");
    $(".tabItem >*").eq(idx).show().addClass("on");

    $(".tabMenu li").removeClass("on");
    $(this).addClass("on");
  });

  $(".popupBox").hide();
  $(".notice li:nth-child(1)").click(function () {
    $(".popupBox").show();
  });
  $(".popup button").click(function () {
    $(".popupBox").hide();
  });
});
