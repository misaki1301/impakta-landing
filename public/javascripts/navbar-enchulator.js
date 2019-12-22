$(document).ready(function(){
    $(window).scroll(function(){
        //console.log("hola, estoy con JQUERY");
        var scroll = $(window).scrollTop();
        var isFirst = true;
        var isTransparent = false;
        if(scroll < 100){
            isTransparent = true;
            $('.navbar.fixed-top').css('background', 'transparent');
            $('.logo-impakta').css('width','75%');
            $('.logo-impakta').css('height','75%');
            $('.navbar').css('box-shadow','none');
            $('.navbar').removeClass('fadeInDown animated');
            $('.navbar').addClass('fadeIn animated');
            if (isTransparent) {
                $(".navbar-toggler").click(function () {
                    $(".navbar.fixed-top").css('background', 'black');
                    isTransparent = false;
                });
            }
            console.log("todavia no sigo");
        } else{
            $('.navbar.fixed-top').css('background', 'rgba(0, 0, 0, 1)');
            $('.logo-impakta').css('width','68.5px');
            $('.logo-impakta').css('height','81px');
            $('.navbar').css('box-shadow','0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)');
            $('.navbar').removeClass('fadeIn animated');
            $('.navbar').addClass('fadeInDown animated');
            isFirst = false;
            console.log("mama me scrollearon");
        }
    });
    $("#start").addClass('active');
    $('.navbar-nav .nav-link').click(function(){
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    });
});
