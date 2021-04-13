$(function() {
    /*-------------------------------*/
    /*---��𧢲�罸�詨�?--*/
    /*-------------------------------*/
    var RWD = navigator.userAgent,
        winWidth = $(window).width(),
        anoWidth = 0,
        nowstatus = 0;
    var $mask = $('<div class="mask"></div>').hide();
    $('#page').after($mask);

    if (RWD.match(/iPhone|iPad|iPod|Android|BlackBerry/i)) {
        $('#nav-toggle').on('touchstart', MENU);
        $('.mask').on('touchstart', MENU);
    } else {
        $('#nav-toggle').on('click', MENU);
        $('.mask').on('click', MENU);
    }

    $("#menu a").click(function(evt) {
        $(this).next().slideToggle(400);
        $(evt.currentTarget).find('span').toggleClass('icon-plus').toggleClass('icon-minus');
    });

    BGIMG();

    $(window).resize(function() {
        $mask.hide();
        $('#nav-toggle').removeClass('show');
        $('#page').removeClass('show');
        $('html,body').removeClass('show');
        $('#hed').removeClass('show');
        $('#menu').removeClass('show');
        delay(function() {
            BGIMG();
        }, 300);
    })

    function MENU() {
        $mask.fadeToggle(300);
        $('#nav-toggle').toggleClass('show');
        $('#page').toggleClass('show');
        $('html,body').toggleClass('show');
        $('#hed').toggleClass('show');
        $('#menu').toggleClass('show');
        return false;
    }

    function MENUMODE(e) {
        if (e < 1264) {
            nowstatus = 0;
            console.log('mobile menu');
        } else {
            nowstatus = 1;
            console.log('desktop menu');
        }

    }
    /*-------------------------------*/
    /*---editor ?��??����?����??��---*/
    /*-------------------------------*/
    if ($('.edit').size() != 0) {
        $('.edit img').removeAttr('style');
        $('img.big').unwrap('p');
    }

    var delay = (function() {
        var timer = 0;
        return function(callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();


    function BGIMG() {
        winWidth = $(window).width();
        MENUMODE(winWidth);
        if ($('.bg').size() !== 0 && winWidth > 767) {
            console.log($('.bg').size());
            console.log('winWidth = ' + winWidth + 'screen width:' + anoWidth);
            $('.bg').each(function(index, el) {
                var bgpic = 'url("' + $(this).find('img').attr('data-src') + '")';
                $(this).css({
                    'background-image': bgpic
                });
                console.log(index + '/' + bgpic);
            });
        } else {
            $('.bg').removeAttr('style');
            console.log('winWidth = ' + winWidth + 'screen width:' + anoWidth);
        }

    }

})

//=================================== �����r�� ========================================
$(function(){
    var len = 55; // �W�L50�Ӧr�H"..."���N
    $(".news-txt").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});

//=================================== language button ========================================
var myLanguageBtn = new languageBtn();

			function languageBtn(){
				var list = $(".language");
				var btn = $(".language .sel-tit");
				var atag = $(".language a");
				
				btn.bind("click",function(e){
					e.preventDefault();
					list.toggleClass('on');
				});
			}