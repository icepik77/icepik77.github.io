jQuery(function () {

    //slider

    var NextArrow = $(".view-product__right-arrow");
    var PrevArrow = $(".view-product__left-arrow");
    
    var index = 0;
    NextArrow.on("click", function () {
        index++;
        if (document.documentElement.clientWidth > 425) {
            var WidthImg=570;
        } else {
            var WidthImg=300;
        };
        if (index > 3) {
            index = 0;
        }
        var RightMove = -WidthImg * index;
        
        $(".view-product__slides").css({
            "transform": "translateX(" + RightMove + "px)",
            "transition": "0.3s"
        });

        
        
    });
    PrevArrow.on("click", function () {
        index--;
        if (document.documentElement.clientWidth > 425) {
            var WidthImg=570;
        } else {
            var WidthImg=300;
        };
        if (index < 0) {
            index = 3;
        }

        var RightMove = -WidthImg * index;
        $(".view-product__slides").css({
            "transform": "translateX(" + RightMove + "px)",
            "transition": "0.3s"
        });

        
    });


    //qty input

    var qtyArrowUp = $(".view-product__select-arrow-up"); 
    var qtyArrowDown = $(".view-product__select-arrow-down");
    var qtyText = $(".view-product__select-qty-text");       
    var qtyIndex=0;
    var number;

    qtyArrowUp.on("click", function () {
        index--;

        if (index < 0) {
            index =0;
        }

        

        if (number!=null){
            number.innerHTML="";
            number.innerHTML=index;
            qtyText.append(number);
        }
        else{
            number = document.createElement("div");
            number.innerHTML=index;
            qtyText.append(number);
        }

        
    });    

    qtyArrowDown.on("click", function () {
        index++;

        if (number!=null){
            number.innerHTML="";
            number.innerHTML=index;
            qtyText.append(number);
        }
        else{
            number = document.createElement("div");
            number.innerHTML=index;
            qtyText.append(number);
        }

        
    });
    
    //tab

    var tab1=$(".tab__first");
    var tab2=$(".tab__second");
    var tab3=$(".tab__third");
    var tab4=$(".tab__fourth");
    var tab5=$(".tab__fifth");


    tab1.on("click",function(){

        $(".tab__text-1").show(200);
        $(".tab__text-2").hide(200);
        $(".tab__text-3").hide(200);
        $(".tab__text-4").hide(200);
        $(".tab__text-5").hide(200);
    });

    tab2.on("click",function(){
        
        $(".tab__text-1").hide(200);
        $(".tab__text-2").show(200);
        $(".tab__text-3").hide(200);
        $(".tab__text-4").hide(200);
        $(".tab__text-5").hide(200);
    });
    tab3.on("click",function(){
        
        $(".tab__text-1").hide(200);
        $(".tab__text-2").hide(200);
        $(".tab__text-3").show(200);
        $(".tab__text-4").hide(200);
        $(".tab__text-5").hide(200);
    });
    tab4.on("click",function(){
        
        $(".tab__text-1").hide(200);
        $(".tab__text-2").hide(200);
        $(".tab__text-3").hide(200);
        $(".tab__text-4").show(200);
        $(".tab__text-5").hide(200);
    });
    tab5.on("click",function(){
        
        $(".tab__text-1").hide(200);
        $(".tab__text-2").hide(200);
        $(".tab__text-3").hide(200);
        $(".tab__text-4").hide(200);
        $(".tab__text-5").show(200);
    });
});