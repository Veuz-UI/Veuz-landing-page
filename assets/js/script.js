/* <!-- ==================== Fixed Header ==================== --> */

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* <!-- ==================== Fixed Header ==================== --> */





/* <!-- ==================== Fixed Header ==================== --> */
// ...existing code...

/* <!-- ==================== GSAP and Carousel Initialization ==================== --> */
document.addEventListener("DOMContentLoaded", function() {
  // Initialize GSAP and ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Initialize Lenis
  const lenis = new Lenis();
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Initialize Owl Carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    smartSpeed: 500,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 4 }
    }
  });

  // Counter Animation Function


  // Item animations
  gsap.utils.toArray(".item").forEach((box, index) => {
    gsap.fromTo(box, 
      { x: 100, opacity: 0 }, 
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: box,
          start: "top 90%",
          end: "bottom 10%",
          scrub: 1
        }
      }
    );
  });
});














































