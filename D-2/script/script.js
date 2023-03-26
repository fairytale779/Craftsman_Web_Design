$(function () {
  $("li.lv1").mouseenter(function () {
    $(this).find("ul.lv2").stop().slideDown();
  });
  $("li.lv1").mouseleave(function () {
    $("ul.lv2").stop().slideUp();
  });

  setInterval(function () {
    $(".slide ul").animate({ "margin-left": "-100%" }, function () {
      $(".slide ul li:first").appendTo(".slide ul");
      $(".slide ul").css({ "margin-left": "0" });
    });
  }, 3000);

  $(".tabMenu li").click(function () {
    var idx = $(this).index();

    $(".tabItem >*").hide().removeClass("on");
    $(".tabItem >*").eq(idx).show().addClass("on");

    $(".tabMenu li").removeClass("on");
    $(this).addClass("on");
  });

  $(".modal").hide();
  $(".notice li:nth-child(1)").click(function () {
    $(".modal").show();
  });
  $(".popup button").click(function () {
    $(".modal").hide();
  });
});
