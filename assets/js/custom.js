$(document).ready(function(){

    var nav = $('.main-menu');
    nav.find('.menu-item').click(function(e){
        $(this).parent('li').toggleClass('active');
        $(this).siblings('.sub-menu').slideToggle();
        e.preventDefault();
    });

    nav.find('.sub-menu-item').click(function(){
        nav.find('.sub-menu-item').removeClass('active');
        $(this).addClass('active');
        var id = $('.page-content').children($(this).attr('href'));
        id.fadeIn().siblings('.hentry').hide();
        if(history.pushState) {
            history.pushState(null, null, '#'+id.attr('id'));
        }
        else {
            location.hash = '#'+id.attr('id');
        }
        return false;
    });

    // show article on load
    if(window.location.hash) {
        var urlID = $(window.location.hash);
        var target = $("a[href='" + urlID.selector + "']");
        target.addClass('active');
        target.closest('.sub-menu').slideDown();
        target.parents('li').addClass('active');
        target.fadeIn().siblings('.hentry').hide();
        console.log( '.' +urlID.attr('id') );
    } else {
        $('.page-content .hentry').first().show();
    }
});
