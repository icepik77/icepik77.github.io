jQuery(function () {

    //Скрытое меню
    $(".Mens").on("click", function () {
        $(".header__men-menu").fadeIn(200);
        $(".header__women-menu").fadeOut(200);
    });
    $(".header__men-menu").on("mouseleave", function () {
        $(".header__men-menu").fadeOut(200);
    });

    $(".Womens").on("click", function () {
        $(".header__women-menu").fadeIn(200);
        $(".header__men-menu").fadeOut(200);
    });
    $(".header__women-menu").on("mouseleave", function () {
        $(".header__women-menu").fadeOut(200);
    });

    //Ассортимент

    //тест 1 
    /*$("#shop-block-1-link").on("click", function () {
        $("#shop-block-1").css({
            "display": "flex",
            "transition": "0.5s"
        });
        $("#shop-block-2").css({
            "display": "none"
        });
    });
    $("#shop-block-2-link").on("click", function () {
        $("#shop-block-1").css({
            "display": "none"
        });
        $("#shop-block-2").css({
            "display": "flex"
        });
    });*/

    //тест2 
    /*$("#shop-block-1-link").on("click", function () {
        $("#shop-block-1").fadeIn(300);
        $("#shop-block-2").fadeOut(300);
    });
    $("#shop-block-2-link").on("click", function () {
        $("#shop-block-2").fadeIn(300);
        $("#shop-block-1").fadeOut(300);
    });*/

    //тесет3 
    $("#shop-block-1-link").on("click", function () {
        $("#shop-block-2").css({
            "display": "none"
        });
        $("#shop-block-1").fadeIn(400);
    });
    $("#shop-block-2-link").on("click", function () {
        $("#shop-block-1").css({
            "display": "none"
        });
        $("#shop-block-2").fadeIn(400);
        $("#shop-block-2").css({
            "display": "flex"
        });
    });

    $("#singleSelect4").on("click", function () {
        $(".assortment__price-1").css({
            "display": "block"
        });
        $(".assortment__price-2").css({
            "display": "none"
        });
        $(".assortment__price-3").css({
            "display": "none"
        });
    });
    $("#singleSelect1").on("click", function () {
        $(".assortment__price-1").css({
            "display": "none"
        });
        $(".assortment__price-2").css({
            "display": "none"
        });
        $(".assortment__price-3").css({
            "display": "block"
        });
    });
    $("#singleSelect3").on("click", function () {
        $(".assortment__price-1").css({
            "display": "none"
        });
        $(".assortment__price-2").css({
            "display": "block"
        });
        $(".assortment__price-3").css({
            "display": "none"
        });
    });

    //Появление описания товара 
    $(".images-first").on("mouseenter", function () {
        $(".hint-first").fadeIn(200);
    });
    $(".images-first").on("mouseleave", function () {
        $(".hint-first").fadeOut(200);
    });

    $(".images-second").on("mouseenter", function () {
        $(".hint-second").fadeIn(200);
    });
    $(".images-second").on("mouseleave", function () {
        $(".hint-second").fadeOut(200);
    });

    $(".images-third").on("mouseenter", function () {
        $(".hint-third").fadeIn(200);
    });
    $(".images-third").on("mouseleave", function () {
        $(".hint-third").fadeOut(200);
    });

    $(".images-fourth").on("mouseenter", function () {
        $(".hint-fourth").fadeIn(200);
    });
    $(".images-fourth").on("mouseleave", function () {
        $(".hint-fourth").fadeOut(200);
    });

    $(".images-fifth").on("mouseenter", function () {
        $(".hint-fifth").fadeIn(200);
    });
    $(".images-fifth").on("mouseleave", function () {
        $(".hint-fifth").fadeOut(200);
    });

    $(".images-sixth").on("mouseenter", function () {
        $(".hint-sixth").fadeIn(200);
    });
    $(".images-sixth").on("mouseleave", function () {
        $(".hint-sixth").fadeOut(200);
    });


    //Выбор цены
    const selectSingle = document.querySelector('.header__select');
    const selectSingle_title = selectSingle.querySelector('.header__select__title');
    const selectSingle_labels = selectSingle.querySelectorAll('.header__select__label');

    // Toggle menu
    selectSingle_title.addEventListener('click', () => {
        if ('active' === selectSingle.getAttribute('data-state')) {
            selectSingle.setAttribute('data-state', '');
        } else {
            selectSingle.setAttribute('data-state', 'active');
        }
    });

    // Close when click to option
    for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', (evt) => {
            selectSingle_title.textContent = evt.target.textContent;
            selectSingle.setAttribute('data-state', '');
        });
    }

    // Reset title
    const reset = document.querySelector('.reset');
    reset.addEventListener('click', () => {
        selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
    });




});