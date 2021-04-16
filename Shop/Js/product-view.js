jQuery(function () {
    var NextArrow = $(".view-product__right-arrow");
    var PrevArrow = $(".view-product__left-arrow");
    var WidthImg = 570;
    var index = 1;
    NextArrow.on("click", function () {
        var RightMove = -WidthImg * index;
        $(".view-product__slides").css({
            "transform": "translateX(" + RightMove + "px)",
            "transition": "0.3s"
        });

        if (index == 4) {
            index = 0;
            alert("here");
        }
        index++;
    });
    PrevArrow.on("click", function () {

    });

});