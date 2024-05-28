// importing gsap
import { gsap } from "gsap";



// setting timeline for hero animations
let tl = gsap.timeline({
    defaults: {
        duration: .8,
        ease: 'none',
    },
    onComplete: () => {
        // console.log("finished")
    },
}
)


// Bold hero text
tl.fromTo(".hero-h1", {y: -100, opacity: 0, scale: .5}, {
    opacity: 1,
    y: 0,
    scale: 1,
})


// hero text
tl.fromTo(".hero-p", {x: 100, opacity: 0}, {
    opacity: 1,
    x: 0,
})


// hero buttons
tl.to(".hero-btn", {
    opacity: 1,
})