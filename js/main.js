
$(function () {
    $(".hoge-item .img-box > img").click(function () {
        var src = $(this).attr("src");
        var cap = $(this).attr("alt");
        $(".modal-block").fadeIn().css("display", "flex");
      
        $("#popup").attr("src", src);
        $(".caption").text(cap);
      });
      
      $(".modal-block").click(function (e) {
        // モーダルの外側をクリックした場合にのみモーダルを閉じる
        if (e.target === this) {
          $(this).css("display", "none");
        }
      });
      
      $(".img-section > span").click(function () {
        // モーダルを閉じるボタンがクリックされた場合にモーダルを閉じる
        $(".modal-block").css("display", "none");
      });
});

$(".hoge-item .img-box > img").click(function () {
  var src = $(this).attr("src");
  var cap = $(this).attr("alt");
  $(".modal-block").fadeIn().css("display", "flex");

  $("#popup").attr("src", src);
  $(".caption").text(cap);
});

$(".modal-block").click(function (e) {
  // モーダルの外側をクリックした場合にのみモーダルを閉じる
  if (e.target === this) {
    $(this).css("display", "none");
  }
});

$(".img-section > span").click(function () {
  // モーダルを閉じるボタンがクリックされた場合にモーダルを閉じる
  $(".modal-block").css("display", "none");
});



$(function(){
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  hamburger.addEventListener('click', function () {
    mobileNav.classList.toggle('open');
  });
});
$(function () {
  $('.hamburger').on('click', function () {
    $(this).toggleClass('open');
    $('.mobile-nav').toggleClass('open');
  });
});

$(function () {
  $('.hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('.mobile-nav').toggleClass('open');
  });
});

