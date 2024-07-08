"use strict";

$('.slider').slick({
  autoplaySpeed: 2500, // 自動再生の速度
  speed: 1200, // スライド自体の速度
  autoplay: true, // 自動再生の設定
  infinite: true, // 永続化
  slidesToShow: 3, // スライド数
  slidesToScroll: 1, // 1回のスクロールで1枚の写真を表示
  prevArrow: '<div class="slick-prev"></div>', // 矢印部分のHTMLを変更
  nextArrow: '<div class="slick-next"></div>', // 矢印部分のHTMLを変更
  centerMode: true, // 要素の中央揃え
  variableWidth: true,
  centerPadding: '0', // 中央のスライドの左右の余白
  dots: true, // 下部ドットナビゲーションの表示
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 481,
      settings: {
        arrows: true,
        centerMode: false,
        variableWidth: false,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});
