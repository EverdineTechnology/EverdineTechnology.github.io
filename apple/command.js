$(document).ready(function(e) {
    
	// 網頁版選單
	$(document).ready(function() {
		$('ul.menu-bt li').hover(function(){
			$(this).find('ul:first').stop(true, true).fadeIn('fast');
			$(this).addClass('hover');
		},
		function(){
			$(this).find('ul').stop(true, true).fadeOut('slow');
			$(this).removeClass('hover');
		});
	});
	
	// Scroll top
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	$('.scrollToTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
	
	//滑動後選項上方縮起
	$(document).ready(function(e) {
	  // header
	  var $header = $('#header');
	  $(window).on('scroll', function(e) {
		if ($header.offset().top > 80) {
		  $header.addClass('top-nav');
		} else {
		  $header.removeClass('top-nav');
		}
	  }).trigger('scroll');
	});
	
	//手機版選單三條線
	$(document).ready(function(){
		  $(".hamburger").click(function(){
		    $(this).toggleClass("is-active");
		  });
	});
	
	//自動縮圖
	$(document).ready(function () {
		$(".imgLiquidFill").imgLiquid({fill:true});
        $(".imgLiquidNoFill").imgLiquid({fill:false});
	});
	
});

// 內頁選單
$(document).ready(function(e) {

  var $win = $(window);

  $navBtn = $('.btn-cate');
  $navBtn.on('click init', function(e) {
    if($navBtn.hasClass('icon-open')){
      $('.nav-category').slideDown(500);
      $navBtn.removeClass('icon-open');
      $navBtn.addClass('icon-close');
    }
    else {
      $('.nav-category').slideUp(500);
      $navBtn.addClass('icon-open');
      $navBtn.removeClass('icon-close');
    }
  });
});