$(document).ready(function () {
    // AOS.init();
    new WOW().init();
})


$('#scroll').click(function (event) {
    $('html, body').animate({
        scrollTop: $(".pembukaan").offset().top
    }, 300);
});
//buat animasi sticky
gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        start: "center center",
        end: "bottom top",
        scrub: 1,
        pin: true
    }
})
    .from(".text1", {
        x: innerWidth * 1,

    })
    .from(".text2", {
        x: innerWidth * 1.8
    })
    .from(".text3", {
        x: innerWidth * 1.5
    })
    .from(".text4", {
        x: innerWidth * -1
    })
    .from(".text5", {
        x: innerWidth * -1.5
    })
    .from(".text6", {
        y: innerHeight * 1.5
    })
    .from(".angkax", {
        y: innerHeight * 1,
        rotate: 360
    }).from(".angkax1", {
        y: innerHeight * 1,

    })




$('.slider-alur').slick({
    infinite: true,
    speed: 300,
    // fade: true,
    cssEase: 'linear'
});





//gaji

gsap.timeline({
    scrollTrigger: {
        trigger: ".boxx",
        start: "center center",
        end: "bottom top",
        scrub: 1,
        pin: true
    }
})
    .from(".textx", {
        x: innerWidth * 1
    })
    .from(".texty", {
        x: innerWidth * -1
    })
    .from(".textz", {
        x: innerWidth * 1
    })
    .from(".texta", {
        x: innerWidth * -1
    })
// .from(".logo", {
//     y: innerHeight * 1,
//     rotate: 360
// })


gsap.timeline({
    scrollTrigger: {
        trigger: ".box2",
        start: "center center",
        end: "bottom top",
        scrub: 1,
        pin: true
    }
})
    .from(".box2", {
        opacity: 0,
    })
    .from(".text4y", {
        y: innerHeight * 1,
        // stagger: {
        //     amount: 0.5,
        // }
    })


