
gsap.registerEffect({
    name: "zoom",
    effect: (targets, config) => {
        const vars = { transformOrigin: "0px 0px", ...config },
            { scale, origin } = config,
            clamp = gsap.utils.clamp(-100 * (scale - 1), 0);
        delete vars.origin;
        vars.xPercent = clamp((0.5 - origin[0] * scale) * 100);
        vars.yPercent = clamp((0.5 - origin[1] * scale) * 100);
        vars.overwrite = "auto";
        return gsap.to(targets, vars);
    },
    extendTimeline: true,
    defaults: { origin: [0.5, 0.5], scale: 2 }
});



// for each section, we define the zoom data here
const zoomData = [ //kiri, atas
    // { scale: 1, origin: [0.5, 0.5] },
    // { scale: 2.5, origin: [0.5, 0.8] }, // radiator
    // { scale: 1, origin: [0.5, 0.5] },
    // { scale: 2.3, origin: [0.4, 0.6] }, //oli mesin
    // { scale: 1, origin: [0.5, 0.5] },
    // { scale: 2.5, origin: [.7, .4] }, // ac
    // { scale: 1, origin: [0.5, 0.5] },
    // { scale: 2.5, origin: [.5, .4] }, // tune up
    // { scale: 1, origin: [0.5, 0.5] },
    // { scale: 2.5, origin: [.7, .7] },// komponen pendukung
    // { scale: 1, origin: [0.5, 0.5] },
    // { scale: 3, origin: [.68, .48] },//sistem rem
    // { scale: 1, origin: [0.5, 0.5] },
    // { scale: 1, origin: [0.5, 0.5] }, // roda ban backup 0.8, 1
    // { scale: 1, origin: [0.5, 0.5] },
    { scale: 1, origin: [0.5, 0.5] }, //indo
    { scale: 2.5, origin: [0.4, 0.4] }, //pontianak
    { scale: 3, origin: [0.3, 0.7] }, // bandung barat
    { scale: 4, origin: [0.4, .7] }, // Blitar
    // { scale: 1, origin: [0.5, 0.5] },
    { scale: 4, origin: [0.43, 0.7] }, // Malang
    { scale: 4, origin: [0.47, 0.7] }, // gianyar
    { scale: 3.5, origin: [0.7, 0.4] }, //teodore
    { scale: 3, origin: [0.4, 0.4] }, // kapuas hulu
    { scale: 2.5, origin: [.5, .8] }, // ac
    { scale: 1, origin: [0.5, 0.5] },
    { scale: 2.5, origin: [.5, .2] }, // tune up
    { scale: 1, origin: [0.5, 0.5] },
    { scale: 2.5, origin: [.5, .3] },// komponen pendukung
    { scale: 1, origin: [0.5, 0.5] },
    { scale: 2, origin: [.5, .2] },//sistem rem
    { scale: 1, origin: [0.5, 0.5] },
];

// now loop through each section and create the ScrollTrigger accordingly.
// when that section enters from either direction, it'll fire off the zoom animation.
gsap.utils.toArray(".bagian").forEach((section, index) => {
    const zoom = zoomData[index];
    ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        end: "+=125%",
        onToggle(self) {
            if (self.isActive) { // if it enters forward or backward
                gsap.effects.zoom(".photo", {
                    scale: zoom.scale,
                    origin: zoom.origin,
                    duration: 1,
                    ease: "power1.inOut"
                });
            }
        }
    });
});