$(document).ready(function(){
  
  // function handleHover() {
  //   if ($(window).width() > 1024) {
  //     $('.pc-nav').removeClass('clicked');
  //     // $('.nav-list').removeClass('selected');
  //     // $('.mb-nav').off('click');
  //     // $('.nav-list').off('click');
  //     $('header').mouseenter(function () {
  //       $('header .inner').addClass('on');
  //       $('.nav-list > a').addClass('on');
  //       $('.logo').find('img').attr('src', './imgs/hover_logo.png');
  //     });
  //     $('header').mouseleave(function () {
  //       $('header .inner').removeClass('on');
  //       $('.nav-list > a').removeClass('on');
  //       $('.logo').find('img').attr('src', './imgs/logo.png');
  //     });
  //     $('.nav-list').mouseenter(function(){
  //       $('.sub-menu').removeClass('on');
  //       $(this).find('.sub-menu').addClass('on');
  //       $('.hover-bg').addClass('on');
  //     });
  //     $('.nav-list').mouseleave(function(){
  //       $('.sub-menu').removeClass('on');
  //       $('.hover-bg').removeClass('on');
  //     });
  //   } else {
  //     // $('.pc-nav').off('clicked');
  //     // $('.sub-menu').off('selected');
  //     $('.logo').find('img').attr('src', './imgs/hover_logo.png');
  //     $('header').off('mouseenter mouseleave');
  //     $('.nav-list').off('mouseenter mouseleave');
  //     $(window).off('scroll');

  //     $('.mb-nav').click(function(){
  //       $('.pc-nav').toggleClass('clicked');
  //     });
  //     $('.nav-list').click(function(){
  //       $(this).find('.sub-menu').toggleClass('selected');
  //     });
  //   }
  // }

  // function scrollEvent(){
  //   $(window).scroll(function(){
  //     if($(window).width() > 1024){
  //       $('.pc-nav').removeClass('clicked');
  //       if($(window).scrollTop() > 50){
  //         $('header').off('mouseenter mouseleave');
  //         $('header .inner').addClass('scroll');
  //         $('.nav-list > a').addClass('scroll');
  //         $('.logo').find('img').attr('src', './imgs/hover_logo.png');
  //       }else{
  //         $('header').mouseenter(function () {
  //           $('header .inner').addClass('on');
  //           $('.nav-list > a').addClass('on');
  //           $('.logo').find('img').attr('src', './imgs/hover_logo.png');
  //         });
  //         $('header').mouseleave(function () {
  //           $('header .inner').removeClass('on');
  //           $('.nav-list > a').removeClass('on');
  //           $('.logo').find('img').attr('src', './imgs/logo.png');
  //         });
  //         $('header .inner').removeClass('scroll');
  //         $('.nav-list > a').removeClass('scroll');
  //         $('.logo').find('img').attr('src', './imgs/logo.png');
  //       }
  
  //     }else{
  //       $('header').off('mouseenter mouseleave');
  //       $(window).off('scroll');
  //       $('.mb-nav').click(function(){
  //         $('.pc-nav').toggleClass('clicked');
  //       })
        
  //     }
  //   })
  // };

  // handleHover();
  // scrollEvent();
  
  // $(window).resize(function(){
  //   if($(window).width() > 1024){
  //     $('.pc-nav').removeClass('clicked');
  //     // $('.nav-list').removeClass('selected');
  //     // $('.mb-nav').off('click');
  //     // $('.nav-list').off('click');
  //     $(window).scroll(function () {
  //       if ($(window).scrollTop() > 50) {
  //         $('.logo').find('img').attr('src', './imgs/hover_logo.png');
  //         $('header .inner').addClass('scroll');
  //         $('.nav-list > a').addClass('scroll');
  //       } else {
  //         $('.logo').find('img').attr('src', './imgs/logo.png');
  //         $('header .inner').removeClass('scroll');
  //         $('.nav-list > a').removeClass('scroll');
  //         $('header').mouseenter(function(){
  //           $('header .inner').addClass('on');
  //           $('.nav-list > a').addClass('on');
  //           $('.logo').find('img').attr('src', './imgs/hover_logo.png');
  //         });
  //         $('header').mouseleave(function(){
  //           $('header .inner').removeClass('on');
  //           $('.nav-list > a').removeClass('on');
  //           $('.logo').find('img').attr('src', './imgs/logo.png');
  //         });
  //       }
  //     });
  //     if($(window).scrollTop() > 50){
  //       $('.logo').find('img').attr('src', './imgs/hover_logo.png');
  //       $('header').off('mouseenter mouseleave');
  //       $('header .inner').addClass('scroll');
  //       $('.nav-list > a').addClass('scroll');

  //     }else{
  //       $('.logo').find('img').attr('src', './imgs/logo.png');
  //       $('header .inner').removeClass('scroll');
  //       $('.nav-list > a').removeClass('scroll');
  //       $('header').mouseenter(function(){
  //         $('header .inner').addClass('on');
  //         $('.nav-list > a').addClass('on');
  //         $('.logo').find('img').attr('src', './imgs/hover_logo.png');
  //       });
  //       $('header').mouseleave(function(){
  //         $('header .inner').removeClass('on');
  //         $('.nav-list > a').removeClass('on');
  //         $('.logo').find('img').attr('src', './imgs/logo.png');
  //       });
  //     }
  //     $('.nav-list').mouseenter(function(){
  //       $('.sub-menu').removeClass('on');
  //       $(this).find('.sub-menu').addClass('on');
  //       $('.hover-bg').addClass('on');
  //     });
  //     $('.nav-list').mouseleave(function(){
  //       $('.sub-menu').removeClass('on');
  //       $('.hover-bg').removeClass('on');
  //     });
  //   }else{
  //     $('.mb-nav').off('clicked');
  //     $('.sub-menu').off('selected');
  //     $('header .inner').removeClass('on');
  //     $('.nav-list > a').removeClass('on');
  //     $('header').off('mouseenter mouseleave');
  //     $('.nav-list').off('mouseenter mouseleave');
  //     $('.logo').find('img').attr('src', './imgs/hover_logo.png');
  //     $(window).off('scroll');

  //     $('.mb-nav').click(function(){
  //       $('.pc-nav').toggleClass('clicked');
  //     });
  //     $('.nav-list').click(function(){
  //       $(this).find('.sub-menu').toggleClass('selected');
  //     });
  //   }
  // });

  function handleHover() {
    if ($(window).width() > 1024) {
      $('.pc-nav').removeClass('clicked');
  
      $('header').mouseenter(function () {
        $('header .inner').addClass('on');
        $('.nav-list > a').addClass('on');
        $('.logo').find('img').attr('src', './imgs/hover_logo.png');
      });
  
      $('header').mouseleave(function () {
        $('header .inner').removeClass('on');
        $('.nav-list > a').removeClass('on');
        $('.logo').find('img').attr('src', './imgs/logo.png');
      });
  
      $('.nav-list').mouseenter(function(){
        $('.sub-menu').removeClass('on');
        $(this).find('.sub-menu').addClass('on');
        $('.hover-bg').addClass('on');
      });
  
      $('.nav-list').mouseleave(function(){
        $('.sub-menu').removeClass('on');
        $('.hover-bg').removeClass('on');
      });
    } else {
      $(window).off('scroll');
      $('.logo').find('img').attr('src', './imgs/hover_logo.png');
      $('header').off('mouseenter mouseleave');
      $('.nav-list').off('mouseenter mouseleave');
  
      $('.mb-nav').off('click').on('click', function(){
        $('.pc-nav').toggleClass('clicked');
      });
  
      $('.nav-list').off('click').on('click', function(){
        // $('.sub-menu').removeClass('selected');
        $(this).find('.sub-menu').toggleClass('selected');
      });
    }
  }
  
  function scrollEvent(){
    $(window).scroll(function(){
      if ($(window).width() > 1024) {
        $('.pc-nav').removeClass('clicked');
        if ($(window).scrollTop() > 50) {
          $('header').off('mouseenter mouseleave');
          $('header .inner').addClass('scroll');
          $('.nav-list > a').addClass('scroll');
          $('.logo').find('img').attr('src', './imgs/hover_logo.png');
        } else {
          $('header').mouseenter(function () {
            $('header .inner').addClass('on');
            $('.nav-list > a').addClass('on');
            $('.logo').find('img').attr('src', './imgs/hover_logo.png');
          });
          $('header').mouseleave(function () {
            $('header .inner').removeClass('on');
            $('.nav-list > a').removeClass('on');
            $('.logo').find('img').attr('src', './imgs/logo.png');
          });
          $('header .inner').removeClass('scroll');
          $('.nav-list > a').removeClass('scroll');
          $('.logo').find('img').attr('src', './imgs/logo.png');
        }
      } else {
        $('header').off('mouseenter mouseleave');
        $(window).off('scroll');
        $('.mb-nav').off('click').on('click', function(){
          $('.pc-nav').toggleClass('clicked');
        });
      }
    });
  }
  
  handleHover();
  scrollEvent();
  
  $(window).resize(function(){
    handleHover();
    scrollEvent();
  });




  $('.sol-list').click(function(){
    const $h3 = $(this).find('h3');
    const $p = $(this).find('p');
    const $image = $('.solution figure img');
    const totalImages = 4; // 전체 이미지 개수
    let currentImageIndex = $(this).index(); // 클릭한 sol-list의 인덱스
    const nextImageIndex = (currentImageIndex % totalImages) + 1;
    $image.attr('src', `./imgs/clean0${nextImageIndex}.png`);
    $('.sol-list h3').not($h3).removeClass('on');
    $h3.toggleClass('on');

    $('.sol-list p').not($p).slideUp('fast').removeClass('on');
    $p.slideToggle('fast').toggleClass('on');
      // $('.sol-list h3').removeClass('on');
      // $(this).find('h3').toggleClass('on');
      // $('.sol-list p').removeClass('on');
      // $(this).find('p').toggleClass('on');
  });
})


