

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
    fade: true,
    cssEase: 'linear'
});



