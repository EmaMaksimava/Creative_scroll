gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if(ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.6,
    effects: true
  })

  gsap.fromTo('.hero-section', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'center',
      end:'800',
      scrub: true,
    }
  })

  let itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item');

  itemsLeft.forEach(item => {
    gsap.fromTo(item, { x: -50, opacity:.2 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-850',
        end: '-100',
        scrub: true,
      }
    })
  });

  let itemsRight = gsap.utils.toArray('.gallery__right .gallery__item');

  itemsRight.forEach( item => {
    gsap.fromTo(item, { x: 50, opacity:.2 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-850',
        end: '-100',
        scrub: true,
      }
    })
  })

}

