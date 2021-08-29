$(document).ready(function () {

    $(".wrap").on("scroll touchmove mousewheel", function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });

    $(document).on("click", function () {
        $(".clicktext").css("visibility", "hidden");
        $(".clicktext").css("opacity", "0");
        $(".text1").css("visibility", "visible");
        $(".text1").css("opacity", "1");
        $(".text2").css("visibility", "visible");
        $(".text2").css("opacity", "1");
        $(".menu").css("visibility", "visible");
        $(".menu").css("opacity", "1");
        $(".contentA").css("visibility", "visible");
        $(".contentA").css("opacity", "1");
        $(".contentB").css("visibility", "visible");
        $(".contentB").css("opacity", "1");
        $(".contentC").css("visibility", "visible");
        $(".contentC").css("opacity", "1");
        $(".wrap").off("scroll touchmove mousewheel");
        $(".cls-1").css("visibility", "visible");
        $(".cls-1").css("opacity", "1");
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        nav: true,
        center: true,
        margin: 20,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });


    $(document).scroll(function () {
        console.log($(document).scrollTop());
        var documentHeight = $(document).scrollTop();

        console.log("바디 태그의 높이", $("body").height());
        console.log("Document(화면)의 높이", $(window).height());

        var scrollLimit = $("body").height() - $(window).height();
        var percentage = ($(document).scrollTop() / scrollLimit) * 100;



        if (32 <= percentage <= 39) {
            $(".photo").css("visibility", "visible");
            $(".photo").css("opacity", ((percentage - 32) / 7 * 1));
            $(".text-picture1").css("visibility", "visible");
            $(".text-picture1").css("opacity", ((percentage - 32) / 7 * 1));
        } else {
            $(".photo").css("visibility", "hidden");
            $(".text-picture1").css("visibility", "hidden");
        };


        if (43 <= percentage <= 45) {
            $(".deco-box1").css("visibility", "visible");
            $(".deco-box1").css("opacity", ((percentage - 43) / 2 * 1));
            $(".deco-box2").css("visibility", "visible");
            $(".deco-box2").css("opacity", ((percentage - 43) / 2 * 1));
        } else {
            $(".deco-box1").css("visibility", "hidden");
            $(".deco-box2").css("visibility", "hidden");
        };

        if (58 <= percentage <= 64) {
            $(".fly").css("display", "block");
            $(".fly").css("right", -1200 + ((percentage - 58) / 6 * 1200) + "px");
        } if (percentage >= 64) {
            $(".fly").css("right", "0px");
        };

        console.log("현재스크롤 퍼센테이지", percentage);

    });

    $(".round0").on("click", function () {
        $(".main-photo").attr("src", "img/round0.jpg");
        $(".backcolor").css("background-color", "#e5f1f7");
        $(".innercolor").css("background-color", "#D9A689");
        $(".textcolor").css("color", "#735949");
    });

    $(".round1").on("click", function () {
        $(".main-photo").attr("src", "img/round1.jpg");
        $(".backcolor").css("background-color", "#e2d6cf");
        $(".innercolor").css("background-color", "#365902");
        $(".textcolor").css("color", "#8d6e52");
    });

    $(".round2").on("click", function () {
        $(".main-photo").attr("src", "img/round2.jpg");
        $(".backcolor").css("background-color", "#F2E5D5");
        $(".innercolor").css("background-color", "#8C4303");
        $(".textcolor").css("color", "#978371");
    });

    $(".round3").on("click", function () {
        $(".main-photo").attr("src", "img/round3.jpg");
        $(".backcolor").css("background-color", "#743d29");
        $(".innercolor").css("background-color", "#8C857D");
        $(".textcolor").css("color", "#EBF2F2");
    });

    $(".round4").on("click", function () {
        $(".main-photo").attr("src", "img/round4.jpg");
        $(".backcolor").css("background-color", "#2B3040");
        $(".innercolor").css("background-color", "#BAAEBF");
        $(".textcolor").css("color", "#d47971");
    });

    $(".round5").on("click", function () {
        $(".main-photo").attr("src", "img/round5.jpg");
        $(".backcolor").css("background-color", "#7a766c");
        $(".innercolor").css("background-color", "#733B2F");
        $(".textcolor").css("color", "#9e9e97");
    });

    $(".round6").on("click", function () {
        $(".main-photo").attr("src", "img/round6.jpg");
        $(".backcolor").css("background-color", "#ad9f9c");
        $(".innercolor").css("background-color", "#8C8369");
        $(".textcolor").css("color", "#734E40");
    });

});