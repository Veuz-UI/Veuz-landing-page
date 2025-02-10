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


/* <!-- ==================== GSAP and Carousel Initialization ==================== --> */


/* <!-- ==================== Offcanvas ==================== --> */



/* <!-- ==================== offcanvas ==================== --> */


/* <!-- ==================== click active menu ==================== --> */

document.addEventListener("DOMContentLoaded", function() {
  // Get all links that have a hash (#) in their href
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
      link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the target section
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
          // Smooth scroll to target
          lenis.scrollTo(targetSection, {
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
      }
      });
  });
  });


  /* <!-- ==================== click active menu ==================== --> */

  /* <!-- ==================== active menu ==================== --> */


  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links li a');
    const productSection = document.getElementById('productSection');

    function updateActiveLink() {
        const scrollPosition = window.scrollY + 100;

        // Check if we've scrolled past the product section
        if (productSection && scrollPosition > (productSection.offsetTop + productSection.offsetHeight)) {
            // Remove active class from all links after product section
            navLinks.forEach(link => link.classList.remove('active'));
            return;
        }

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);
    
    // Update active link on page load
    updateActiveLink();

    // Update active link after smooth scroll completes
    lenis.on('scroll', updateActiveLink);
});

/* <!-- ==================== active menu ==================== --> */


/* <!-- ==================== Video Disable ==================== --> */

document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById('myVideo');
  
  // Force video restart on iOS/Safari
  video.addEventListener('loadeddata', function() {
      video.play();
  });

  // Handle video loading errors
  video.addEventListener('error', function() {
      video.style.display = 'none';
      // Show fallback image if needed
  });

  // iOS/Safari specific fixes
  if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
  }
});








  






































