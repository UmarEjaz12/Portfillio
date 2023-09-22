
var cir = document.querySelector(".cursor")
var bady = document.querySelector("nav a ")
var body = document.querySelector("nav a span ")

bady.addEventListener("mousemove", function (dets) {

    cir.style.top = dets.y * 1 + "px"
    cir.style.left = dets.x * 1 + "px"
    cir.style.transform = "scale(2)"
})
bady.addEventListener("mouseleave", function (dets) {

    cir.style.top = dets.y + "px"
    cir.style.left = dets.x + "px"
    cir.style.transform = "scale(0)"
})
body.addEventListener("mousemove", function (dets) {

    cir.style.top = dets.y * 1 + "px"
    cir.style.left = dets.x * 1 + "px"
    cir.style.transform = "scale(2)"
    // body.style.backgroundColor = "rgb(68, 67, 68)"
    // cir.style.zIndex = 3
})
body.addEventListener("mouseleave", function (dets) {

    cir.style.top = dets.y + "px"
    cir.style.left = dets.x + "px"
    cir.style.transform = "scale(0)"
})


var tl = gsap.timeline()
tl.from(".navbar ", {
    y: 100,
    duration: .5,
    opacity: 0
})
tl.from(".navbar nav a", {
    x: -200,
    opacity: 0,
    duration: .5,
    stagger: .5
})
tl.to(".wppic h1", {
    transform: "translateX(-100%)",
    scrollTrigger: {
        trigger: ".page1",
        scroll: "body",
        start: "top 0",
        end: ("top -200%"),
        scrub: 2,
        pin: true
    }
})
tl.from(".wppic h2", {
    y: 100,
    color: "purple",
    scrollTrigger: {
        trigger: ".wppic h2",
        scroll: "body",
        scrub: 1
    }
})

var page2 = gsap.timeline();

page2.from(".page2 .left h1, .page2 .right h1", {
    // x:-200,
    y: 300,
    opacity: 0,
    scrollTrigger: {
        trigger: ".page2 .left h1, .page2 .right h1",
        scroll: "body",
        start: "top 80%",
        end: "top 40%",
        // markers:true,
        scrub: 3
    }
}

)
page2.from(".page2 .left h2", {
    y: 40,
    opacity: 0,
    scrollTrigger: {
        trigger: ".page2 .left h2",
        scroll: "body",
        start: "top 80%",
        end: "top 40%",
        // markers:true,
        scrub: 2
    }
}

)
page2.from(".page2 .right h2", {
    x: -400,
    opacity: 0,
    scrollTrigger: {
        trigger: ".page2 .right h2",
        scroll: "body",
        start: "top 80%",
        end: "top 40%",
        // markers:true,
        scrub: 2
    }
}

)
page2.from(".page2 img", {
    opacity: 0,
    y: 400,
    scrollTrigger: {
        trigger: ".page2 img",
        scroll: "body",
        start: "top 80%",
        end: "top 40%",
        // markers:true,
        scrub: 2,
        // pin:true
    }
}

)
page2.from(".page2 ", {
    opacity: 0,
    y: -200,
    scrollTrigger: {
        trigger: ".page2",
        scroll: "body",
        start: "top 80%",
        end: "top 40%",
        // markers:true,
        scrub: 2,
        // pin:true,
    }
}

)
gsap.from(".page3 h1 ", {
    x: -110,
    duration: 2,
    scrollTrigger: {
        trigger: ".page3 h1 ",
        start: "top 80%",
        scroll: "body",
        scrub: 2
    }
})


gsap.from(".page3 h1 span", {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".page3 h1 span",
        start: "top 80%",
        scroll: "body",
        scrub: 5
    }
})


var kk = gsap.timeline();

kk.from(".page3 .logos .logo img ", {
    y: 110,
    duration: .5,
    opacity: 0,
    stagger: .1,
    scrollTrigger: {
        trigger: ".page3",
        scroll: "body",
        start:"top 50%",
        end:"top 50%",
       
        
        scrub: 3,
        pin: true

    }
}
)

gsap.from(".page4 img", {
    y: 10,
    opacity: 0,
    scrollTrigger: {
        trigger: ".page4 img",
        scroll: "body",
        scrub: 2,
        top: "top150%",
        end: "top 50%"

    }
})

gsap.to(".textpage :nth-child(2) , .textpage :nth-child(4)", {
    transform: "translateX(-200%)",
    yoyo: true,
    duration: 6,
    repeat: -1,
    // scrollTrigger: {
    //     trigger: ".textpage :nth-child(2) ,.textpage :nth-child(4) ",
    //     scroll: "body",
    //     start: "top 80%",
    //     end: ("top 40%"),
    //     markers:true,
    //     scrub: 2,
    //     // pin: true
    // }
})
gsap.from(".textpage :nth-child(1) , .textpage :nth-child(3)", {
    transform: "translateX(-200%)",
    yoyo: true,
    duration: 6,
    repeat: -1,
    // scrollTrigger: {
    //     trigger: ".textpage :nth-child(2) ,.textpage :nth-child(4) ",
    //     scroll: "body",
    //     start: "top 80%",
    //     end: ("top 40%"),
    //     markers:true,
    //     scrub: 2,
    //     // pin: true
    // }
})
