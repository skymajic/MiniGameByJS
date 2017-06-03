(function(){
  'use strict';

  // ページトップへ
  $(function(){
    $('#toTop').hide();

    $(window).scroll(function(){

      if ($(window).scrollTop() > 100) {
        $('#toTop').fadeIn(500);
      } else {
        $('#toTop').fadeOut(500);
      }

    });

    $('#toTop').click(function(){
      $('body').animate({
        scrollTop:0
      },600);
      return false;
    });

  });


  // GameBox_01
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  var youbi = "";

  if (today.getDay() === 0) {
    youbi = "Sun";
  } else if(today.getDay() === 1) {
    youbi = "Mon";
  } else if(today.getDay() === 2) {
    youbi = "Tue";
  } else if(today.getDay() === 3) {
    youbi = "Wed";
  } else if(today.getDay() === 4) {
    youbi = "Thu";
  } else if(today.getDay() === 5) {
    youbi = "Fri";
  } else if(today.getDay() === 6) {
    youbi = "Stu";
  }

  var calender = document.getElementById('calender');

  calender.addEventListener('click', function(){
    calender.innerHTML = year + "/" + month + "/" + day + "/" + youbi;
  });


  /* info */
  var running = true;
  var countDown = document.getElementById('info');

  countDown.addEventListener('click',function(){

    if (running === true) {
      var i = 10;
      function add(){
        var timerId = setTimeout(function(){
          countDown.innerHTML = i--;
          add();
        },500);
        if (i < -1) {
          clearTimeout(timerId);
          countDown.innerHTML = "What a beautiful day!";
        }
      }
      add();
      running = false;
    }

  });




     // 診断機能
     // GameBox_02
     var resultDatabases = [
       "王様タイプ",
       "お姫様タイプ",
       "剣士タイプ",
       "学者タイプ",
       "賢者タイプ",
       "雑魚キャラ",
       "ラスボスタイプ",
       "魔王タイプ"
     ];

    var check = document.getElementById('check');
    var button = document.getElementById('button');

    button.addEventListener('click',function(){
      var result = resultDatabases[Math.floor(Math.random() * resultDatabases.length)];
      check.innerHTML = result;
    });






})();
