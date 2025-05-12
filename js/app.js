

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
        x: innerWidth * 1
    })
    .from(".text12", {
        x: innerWidth * 2
    })
    .from(".text13", {
        x: innerWidth * 3
    })
    .from(".text2", {
        x: innerWidth * -1
    })
    .from(".text23", {
        x: innerWidth * -2
    })
    .from(".text24", {
        x: innerHeight * -2
    })
    .from(".angkax", {
        y: innerHeight * 1,
        rotate: 360
    }).from(".angkax1", {
        y: innerHeight * 1,

    })
