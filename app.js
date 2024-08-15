gsap.registerPlugin(ScrollTrigger)

// YOUR CODE HERE

let lineOneTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".line-one",
        start: 'top',
        end: 'bottom',
        pin: true,
        scrub: true,
        markers: true,
    },
})

lineOneTl
    .from('.line-one span', { y: '100vh', stagger: 0.5 })
    .to('.line-one', { backgroundColor: 'yellow' })
    .from('.sun', { x: '100vw' })
    .to('.line-one span', { x: '100vw', delay: 1 })
    .to('.line-one', { backgroundColor: "white" }, '<')
    .to('.sun', { right: '100vw' }, '<')


let lineTwoTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".line-two",
        start: 'top',
        end: 'bottom',
        pin: true,
        scrub: true,
        markers: true,
    },
})

lineTwoTl
    .from('.line-two span:first-child ', { x: '-100vw', scale: 10, opacity: 0 })
    .from('.line-two span:last-child ', { x: '100vw', scale: 10, opacity: 0 }, '<')
    .to('.line-two span:first-child ', { y: '-20px' })
    .to('.line-two span:first-child ', { y: '0' })
    .to('.line-two span:last-child ', { y: ' -20px' }, '-=.5')
    .to('.line-two span:last-child ', { y: '0px' },)


let lineThreeTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".line-three",
        start: 'top',
        end: 'bottom',
        pin: true,
        scrub: true,
        markers: true,
    },
})

lineThreeTl
    .from('.line-three span', { y: '100vh', stagger: 0.5 })
    .to('.line-three span', { color: 'white' })
    .to('.line-three', { backgroundPosition: "0% 0%" }, '<')
    .from('.moon', { x: '100vw' }, '-=.5')