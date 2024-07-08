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

      text.split(/(<br\s*\/?>)/g).forEach(function (segment) {
        if (segment.match(/<br\s*\/?>/)) {
          // <br>タグはそのまま追加
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

    EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/

    // 5秒後に .s-ttl に visible クラスを追加
    setTimeout(function () {
      $('.s-ttl').addClass('visible');
    }, 2200);
});

$(window).scroll(function () {
  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});



