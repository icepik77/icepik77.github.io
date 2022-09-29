jQuery(function () {

	//Меню бургер
	$(".menu-burger").on("click", function () {
        $('.menu-burger, .nav-mobile').toggleClass('active');
    });

    $('a[href^="#"').on('click', function() {

        let href = $(this).attr('href');
    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });

});

