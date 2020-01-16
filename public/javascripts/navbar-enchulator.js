$(document).ready(function(){
    $(function() {
        $('.pop').on('click', function() {
            $('.imagepreview').attr('src', $(this).find('img').attr('src'));
            $('#imagemodal').modal('show');
        });
    });

    let navbarHeight = $('#super-nav').height();
    $('body').scrollspy(
        {
            target:'#super-nav',
            offset: navbarHeight
        }
    );

    console.log(navbarHeight+" la altura del navbar");

    let isVisible = $( ".collapse" ).is( ":visible" );
    //console.log(isVisible);

    $(".navbar-toggler").click(function () {
        isVisible = true;
        if (!isVisible) {
            $(".navbar.fixed-top").css('background','black');
            isVisible = true;
        }else if(!isVisible && $(window).scrollTop() < 100) {
            $(".navbar.fixed-top").css('background', 'black');
            isVisible = false;
        } else if(isVisible && $(window).scrollTop() < 100) {
            $(".navbar.fixed-top").css('background','black');
            isVisible = true;
        }
    });

    $(window).scroll(function(){
        //console.log("hola, estoy con JQUERY");
        var scroll = $(window).scrollTop();
        var isFirst = true;
        var isTransparent = true;

        if(scroll < 100){
            //isTransparent = true;
            $('.navbar.fixed-top').css('background', 'transparent');
            $('.logo-impakta').css('width','75%');
            $('.logo-impakta').css('height','75%');
            $('.navbar').css('box-shadow','none');
            $('.navbar').removeClass('fadeInDown animated');
            $('.navbar').addClass('fadeIn animated');
            //console.log("todavia no sigo");
        } else{
            $('.navbar.fixed-top').css('background', 'rgba(0, 0, 0, 1)');
            $('.logo-impakta').css('width','68.5px');
            $('.logo-impakta').css('height','81px');
            $('.navbar').css('box-shadow','0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)');
            $('.navbar').removeClass('fadeIn animated');
            $('.navbar').addClass('fadeInDown animated');
            isFirst = false;
            //console.log("mama me scrollearon");
        }
    });
    $("#start").addClass('active');
    $('.navbar-nav .nav-link').click(function(){
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    });
});
