gsap.registerPlugin(ScrollTrigger);

gsap.from("#section1", {
    duration:.8, y:"10vh", opacity:0, ease:"power2",
        scrollTrigger: {
            trigger:"#section1"
        }
})

gsap.from("#section2", {
    duration:1, y:"10vh", opacity:0, ease:"power2",
        scrollTrigger: {
            trigger:"#section2"
        }
})

gsap.from("#section3", {
    duration:1, y:"10vh", opacity:0, ease:"power2",
        scrollTrigger: {
            trigger:"#section3"
        }
})

gsap.from("#section4", {
    duration:1, y:"10vh", opacity:0, ease:"power2",
        scrollTrigger: {
            trigger:"#section4"        
        }
})
