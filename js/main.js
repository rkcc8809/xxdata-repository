"use strict";

// function EachTextAnimeControl() {
//   $('.eachTextAnime').each(function () {
//     var elemPos = $(this).offset().top - 50;
//     var scroll = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     if (scroll >= elemPos - windowHeight) {
//       $(this).addClass("appeartext");
//     } else {
//       $(this).removeClass("appeartext");
//     }
//   });
// }

// $(window).on('load', function () {
//     // spanタグを追加する
//     var element = $(".eachTextAnime");
//     element.each(function () {
//       var text = $(this).html();
//       var textbox = "";
//       var delay = 0;

//       text.split(/(<br\s*\/?>)/g).forEach(function (segment) {
//         if (segment.match(/<br\s*\/?>/)) {
//           // <br>タグはそのまま追加
//           textbox += segment;
//         } else {
//           // テキスト部分を一文字ずつ分割
//           segment.split('').forEach(function (t) {
//             if (t !== " ") {
//               textbox += '<span style="animation-delay:' + (delay * 0.05) + 's;">' + t + '</span>';
//               delay++;
//             } else {
//               textbox += t;
//             }
//           });
//         }
//       });

//       $(this).html(textbox);
//     });

//     EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/

//     // 5秒後に .s-ttl に visible クラスを追加
//     setTimeout(function () {
//       $('.s-ttl').addClass('visible');
//     }, 2200);
// });

// $(window).scroll(function () {
//   EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
// });

function EachTextAnimeControl() {
  $('.eachTextAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");
    } else {
      $(this).removeClass("appeartext");
    }
  });
}

$(window).on('load', function () {
  // spanタグを追加する
  var element = $(".eachTextAnime");
  element.each(function () {
    var text = $(this).html();
    var textbox = "";
    var delay = 0;

    // <br>および<br class="__sp">タグを対象にする正規表現に変更
    text.split(/(<br\s*\/?>|<br class="__sp"\s*\/?>)/g).forEach(function (segment) {
      if (segment.match(/<br\s*\/?>|<br class="__sp"\s*\/?>/)) {
        // <br>および<br class="__sp">タグはそのまま追加
        textbox += segment;
      } else {
        // テキスト部分を一文字ずつ分割
        segment.split('').forEach(function (t) {
          if (t !== " ") {
            textbox += '<span style="animation-delay:' + (delay * 0.05) + 's;">' + t + '</span>';
            delay++;
          } else {
            textbox += t;
          }
        });
      }
    });

    $(this).html(textbox);
  });

  // アニメーションを開始する直前に表示を設定
  element.css('visibility', 'visible');

  EachTextAnimeControl(); // アニメーション用の関数を呼ぶ

  // 5秒後に .s-ttl に visible クラスを追加
  setTimeout(function () {
    $('.s-ttl').addClass('visible');
  }, 2200);
});

$(window).scroll(function () {
  EachTextAnimeControl(); // アニメーション用の関数を呼ぶ
});






$(document).ready(function() {
  var $headerWrap = $(".header-wrap");
  var $onHeader = $(".on-header");

  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= $onHeader.offset().top) {
      $headerWrap.addClass("bg-main");
    } else {
      $headerWrap.removeClass("bg-main");
    }
  });
});


 // フェードインについて関数でまとめる
function fadeIn() {
  $('.fadeUpTrigger').each(function () { // fadeUpTriggerクラスの各要素に対して
    let scroll = $(window).scrollTop(); // スクロール位置を取得する
    let triTop = $(this).offset().top + 100; // 要素の上部より100px下の位置を取得
    let winHeight = $(window).height(); // ウィンドウの高さを取得
    if (scroll >= triTop - winHeight) { // 画面内に要素が入ったかを判断
      $(this).addClass('fadeUp'); // fadeUpクラスを付与
    } else {
      $(this).removeClass('fadeUp'); // fadeUpクラスを削除
    }
  });
  // フェードレフトについて
  $('.fadeLeftTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeLeft');
    } else {
      $(this).removeClass('fadeLeft');
    }
  });
  // フェードライトについて
  $('.fadeRightTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeRight');
    } else {
      $(this).removeClass('fadeRight');
    }
  });

  // フェードインについて
  $('.fadeInTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeIn');
    } else {
      $(this).removeClass('fadeIn');
    }
  });
}

$(window).scroll(function () { // スクロールしたら
  fadeIn(); // 関数を実行
});



// jarallax(document.querySelectorAll('.jarallax'), {
//     speed: 0
// });
jarallax(document.querySelectorAll('.jarallax'), {
  speed: 0.5, // スピードを設定
  imgPosition: '50% 50%', // 背景画像の位置を設定
  imgSize: 'cover', // 背景画像のサイズを設定
  imgRepeat: 'no-repeat', // 背景画像の繰り返しを設定
});



  




