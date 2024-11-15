const point1 = document.querySelector(".point1");
const point2 = document.querySelector(".point2");
const point3 = document.querySelector(".point3");
const point4 = document.querySelector(".point4");
const point5 = document.querySelector(".point5");
const point6 = document.querySelector(".point6");
const point7 = document.querySelector(".point7");
const card = document.querySelector("#porfile-mob");
const points = document.querySelector(".profiles__points");
const sliders = document.querySelector(".slider__items");

card.ontouchmove = function(){
    setTimeout(setColor, 200);

    function setColor(){
        for (var index = 0; index<sliders.children.length; index++){
            if (sliders.children[index].classList.contains("slider__item_active")){
                console.log("find");
                for (var i=0; i<points.children.length; i++){
                    points.children[i].classList.remove("profiles__point_active");
                }
                points.children[index].classList.add("profiles__point_active");
            }
        }
    }
}