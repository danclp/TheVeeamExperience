const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function connectToScrollTrigger() {
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  })
}

connectToScrollTrigger();

gsap.registerPlugin(ScrollTrigger);

// const sections = gsap.utils.toArray('section');

let loadHome = gsap.timeline({
  // duration: 1,
  onComplete: enableExperience
});

loadHome
  .to('.home', {
    autoAlpha: 1,
    display: 'block'
  })
  .from('.site_branding-logo', {
    opacity: 0,
    yPercent: -100
  })
  .from('.site_branding-message > *', {
    opacity: 0,
    xPercent: -100,
    stagger: 0.5
  })
  .from('.scroll_down p', {
    yPercent: 100
  })
  .from('.scroll_down-arrow', {
    opacity: 0,
    yPercent: -50
  }, "<");

let scrollExperience = gsap.timeline({
  paused: true
});

let introTxt = gsap.utils.toArray(['.intro-txt h3', '.intro-txt_1']);
// let introTxt2 = gsap.utils.toArray('.intro-txt_2');

scrollExperience
  .to('.site_branding-logo', {
    yPercent: -100
  })
  .to('.site_branding-message', {
    xPercent: -100,
    stagger: 0.3
  }, 0)
  .to('.scroll_down p', {
    yPercent: 100
  }, 0)
  .to('.scroll_down-arrow', {
    rotation: 180
  }, 0)
  .to('.scroll_down-arrow', {
    opacity: 0,
    yPercent: -300
  })
  .to('.home', {
    autoAlpha: 0,
    opacity: 0
  })
  .to('.introduction', {
    autoAlpha: 1,
    display: 'block'
  })
  .from('.introduction .intro', {
    height: "100%",
    opacity: 0
  })
  .from(introTxt, {
    autoAlpha: 0,
    yPercent: -20,
    stagger: 0.5
  }, '<1')
  .to('.intro-txt_1', {
    autoAlpha: 0,
    display: 'none',
    opacity: 0
  })
  .fromTo('.intro-txt_2', {
    autoAlpha: 0,
    display: 'none',
    opacity: 0
  }, {
    autoAlpha: 1,
    opacity: 1,
    display: 'block'
  })
  .to('.introduction', {
    autoAlpha: 0,
    opacity: 0
  })
  .to('.immensechallenges', {
    autoAlpha: 1,
    display: 'block'
  })
  .from('.immensechallenges h3', {
    opacity: 0,
    xPercent: -100
  })
  .from('.immense-box', {
    opacity: 0,
    scale: 0.1,
    y: -60,
    ease: "power1.inOut",
    stagger: {
      amount: 1.5,
      from: 'random'
    }
  })
  .to('.immensechallenges', {
    autoAlpha: 0,
    opacity: 0
  })
  .fromTo('.veeammssage', {
    autoAlpha: 0,
    display: 'none',
    yPercent: 100
  }, {
    autoAlpha: 1,
    display: 'block',
    yPercent: 0
  })
  .from('.veeammssage .message', {
    opacity: 0,
    yPercent: -50
  })
  .to('.veeammssage em', {
    color: '#00D15F'
  })
  .to('.veeammssage', {
    autoAlpha: 0,
    opacity: 0
  })
  .to('.recoverdata', {
    autoAlpha: 1,
    display: 'block'
  })
  .from('.recoverdata-header', {
    opacity: 0,
    yPercent: 100
  })
  .from('.recoverdata .quotebox', {
    opacity: 0,
    ease: "linear",
    width: 0
  })
  .from('.recoverdata .quotebox .open', {
    opacity: 0,
    x: 100
  })
  .from('.recoverdata .quotebox .close', {
    opacity: 0,
    x: -100
  }, "+=0.1")
  .from('.recoverdata .quotebox-intro p', {
    opacity: 0
  })
  .to('.recoverdata .quotebox-intro em', {
    color: '#00D15F'
  })
  .to('.recoverdata', {
    autoAlpha: 0,
    opacity: 0
  })
  .to('.extrainfo', {
    autoAlpha: 1,
    display: 'block'
  })
  .from('.extrainfo-box', {
    opacity: 0,
    width: '100%'
  })
  .from('.extrainfo-box p', {
    opacity: 0,
    xPercent: -100,
    stagger: 0.3
  })
  .to('.extrainfo-box em', {
    color: '#00D15F'
  })
  .to('.extrainfo', {
    autoAlpha: 0,
    opacity: 0
  })
  .to('.extraintro', {
    autoAlpha: 1,
    display: 'block'
  })
  .from('.extraintro .quotebox-hero', {
    opacity: 0,
    width: '0%'
  })
  .from('.extraintro .quotebox-hero h2', {
    opacity: 0
  })
  .to('.extraintro .quotebox-hero h2 em', {
    color: '#00D15F'
  })
  .from('.extraintro .quotebox-sub', {
    opacity: 0,
    xPercent: -50
  })
  .to('.extraintro', {
    autoAlpha: 0,
    opacity: 0
  })
  .to('.extramessage', {
    autoAlpha: 1,
    display: 'block'
  })
  .from('.extramessage .extramsg', {
    opacity: 0,
    width: '100%'
  })
  .from('.extramessage .extramsg-txt_1 > *', {
    opacity: 0,
    stagger: 0.3,
    xPercent: -100
  })
  .to('.extramessage .extramsg-txt_1', {
    autoAlpha: 0,
    opacity: 0,
    display: 'none'
  })
  .fromTo('.extramessage .extramsg-txt_2', {
    autoAlpha: 0,
    display: 'none',
    opacity: 0
  }, {
    autoAlpha: 1,
    display: 'block',
    opacity: 1
  })
  .from('.extramessage .extramsg-txt_2 > *', {
    opacity: 0,
    stagger: 0.3,
    xPercent: -100
  })
  .to('.extramessage', {
    autoAlpha: 0,
    opacity: 0
  })
  .to('body', {
    background: '#FFF'
  })
  .to('.answerveeam', {
    autoAlpha: 1,
    display: 'block'
  })
  .fromTo('.answerveeam', {
    opacity: 0,
    yPercent: 100
  }, {
    opacity: 1,
    yPercent: 0
  })
  .from('.answerveeam h1', {
    opacity: 0,
    yPercent: 30
  })
  .to('.answerveeam', {
    autoAlpha: 0,
    opacity: 0
  })
  .to('.extraintro-1', {
    autoAlpha: 1,
    display: 'block'
  })
  .from('.extraintro-1_content__txt___1 h3', {
    opacity: 0,
    xPercent: -100
  })
  .from('.extraintro-1_content__txt___1 p', {
    opacity: 0,
    xPercent: -100
  })
  .fromTo('.extraintro-1_content__txt___1 .blue-button', {
    opacity: 0,
    xPercent: -100
  }, {
    opacity: 1,
    xPercent: -50
  })
  .to('.extraintro-1_content__txt___1', {
    autoAlpha: 0,
    display: 'none',
    opacity: 0
  })
  .to('.extraintro-1_content__txt___2', {
    autoAlpha: 1,
    opacity: 1,
    display: 'block'
  })
  .from('.extraintro-1_content__txt___2 h3', {
    opacity: 0,
    xPercent: -100
  })
  .from('.extraintro-1_content__txt___2 p', {
    opacity: 0,
    xPercent: -100
  })
  .fromTo('.extraintro-1_content__txt___2 h4', {
    opacity: 0,
    xPercent: -100
  }, {
    opacity: 1,
    xPercent: -50
  })
  .to('body', {
    background: '#000'
  })
  .to('.extraintro-1', {
    autoAlpha: 0,
    opacity: 0
  })
  .to('.extraquote', {
    autoAlpha: 1,
    display: 'block'
  })
  .from('.extraquote .quotebox', {
    opacity: 0,
    width: '100%'
  })
  .from('.extraquote .open', {
    opacity: 0,
    xPercent: 30
  })
  .from('.extraquote .close', {
    opacity: 0,
    xPercent: -30
  }, "+=0.1")
  .from('.extraquote .quotebox-intro p', {
    opacity: 0
  })
  .to('.extraquote .quotebox-intro em', {
    color: '#00D15F'
  })
  .to('.extraquote', {
    autoAlpha: 0,
    opacity: 0
  })
  .to('.veritasresources', {
    autoAlpha: 1,
    display: 'block'
  })
  .from('.veritasresources h5', {
    opacity: 0,
    xPercent: -100
  })
  .from('.veritasresources-txt', {
    opacity: 0,
    xPercent: -100,
    stagger: 0.3
  })
  .to('.veritasresources-txt em', {
    color: '#00D15F'
  })
  .to('.veritasresources-content', {
    autoAlpha: 0,
    display: 'none',
    opacity: 0,
    xPercent: 100
  })
  .fromTo('.veritasresources .readmoreinfo', {
    autoAlpha: 0,
    display: 'none',
    opacity: 0,
    yPercent: 100
  }, {
    autoAlpha: 1,
    display: 'block',
    opacity: 1,
    yPercent: -50
  })
  .to('.veritasresources', {
    autoAlpha: 0,
    opacity: 0
  })
  .to('.testimonial', {
    autoAlpha: 1,
    display: 'block'
  })
  .from('.testimonial-block_1', {
    opacity: 0,
    xPercent: -100
  })
  .to('.testimonial-block_1 em', {
    color: '#00D15F'
  })
  .to('.testimonial-block_1', {
    autoAlpha: 0,
    display: 'none',
    opacity: 0,
    xPercent: 100
  })
  .fromTo('.testimonial-block_2', {
    autoAlpha: 0,
    display: 'none',
    opacity: 0,
    xPercent: -100
  }, {
    autoAlpha: 1,
    display: 'block',
    opacity: 1,
    xPercent: 0
  })
  .to('.testimonial', {
    autoAlpha: 0,
    opacity: 0
  })
  .to('.freetrial', {
    autoAlpha: 1,
    display: 'block'
  })
  .fromTo('.freetrial-logo', {
    yPercent: 120
  }, {
    yPercent: 3
  })
  .fromTo('.freetrial-msg', {
    opacity: 0,
    xPercent: -100
  }, {
    opacity: 1,
    xPercent: 0
  })

function enableExperience() {
  ScrollTrigger.create({
    trigger: '.pageWrap',
    start: 'top top',
    end: '+=300000',
    pin: true,
    animation: scrollExperience,
    scrub: true
  })
}