
  // const dropdown = document.querySelector(".dropdown");
  // const btn = dropdown.querySelector(".dropbtn");

  // btn.addEventListener("click", function(e) {
  //   e.preventDefault();
  //   dropdown.classList.toggle("show");
  // });

  // // Close if clicked outside
  // window.addEventListener("click", function(e) {
  //   if (!dropdown.contains(e.target)) {
  //     dropdown.classList.remove("show");
  //   }
  // });




const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navlinks');
const links = navLinks.querySelectorAll('a'); // all nav links

// Toggle menu on hamburger click
menuToggle.addEventListener('click', (e) => {
  navLinks.classList.toggle('active');
  e.stopPropagation(); // prevent document click from closing it immediately
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && e.target !== menuToggle) {
    navLinks.classList.remove('active');
  }
});





// Optional: stop clicks inside navLinks from closing it
// navLinks.addEventListener('click', (e) => {
//   e.stopPropagation();
// });
window.addEventListener("load", () => {
  if (window.location.hash) {
    const targetEl = document.querySelector(window.location.hash);
    if (targetEl) {
      // Refresh ScrollTrigger first so positions are correct
      ScrollTrigger.refresh();

      // Delay a bit to let GSAP finish layout calculations
      setTimeout(() => {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: targetEl, offsetY: 60 }, // offset if you have fixed navbar
          ease: "power2.out"
        });
      }, 150);
    }
  }
});

//gsap animations
const timeline = gsap.timeline();
timeline.from('.homeH1',{
  y:-200,
  opacity:0,
  duration:1.5,
})
timeline.from('.homeParagraph',{
  y:200,
  opacity:0,
  duration:1,
})
timeline.from('.buttons',{
  opacity:0,
})

if(window.innerWidth <768){
  const timeline2=gsap.timeline();
  timeline2.from('.about',{
    scrollTrigger:{
      trigger:'.about',
      scrub:true,
    },
    y:100,
    opacity:0,
    duration:1.5,
  })
  timeline2.from('.about-subtitle',{
    scrollTrigger:{
      trigger:'.about-subtitle',
      scrub:true,
    },
    y:100,
    opacity:0,
    duration:1.5,
  })
  timeline2.from('.point',{
    scrollTrigger:{
      trigger:'.point',
      scrub:true,
    },
    x:-100,
    opacity:0,
    duration:1.5,
    stagger:0.3,
  })
  timeline2.from('.imag',{
    scrollTrigger:{
      trigger:'.imag',
      scrub:true,
    },
    x:-100,
    opacity:0,
    duration:1.5,
    stagger:0.3,
  })
const timeline3=gsap.timeline();
 timeline3.from('.team-title',{
    scrollTrigger:{
      trigger:'.team-title',
      scrub:true,
    },
    y:100,
    opacity:0,
    duration:1.5,
 })
timeline3.from('.teamp',{
  scrollTrigger:{
    trigger:'.teamp',
    scrub:true,
  },
  y:100,
  opacity:0,
  duration:1.5,
})
const timeline4=gsap.timeline();
timeline4.from('.headings',{
  scrollTrigger:{
   trigger:'.headings',
   scrub:true,
  },
  y:100,
  opacity:0,
  duration:1.5,    
})
timeline4.from('.eventSubheading',{
  scrollTrigger:{
   trigger:'.eventSubheading',
   scrub:true,
  },
  y:100,
  opacity:0,
  duration:1.5,    
})
timeline4.from('.outerCard1',{
  scrollTrigger:{
   trigger:'.outerCard1',
   scrub:true,
  },
  x:-100,
  opacity:0, 
  duration:1,  
})
timeline4.from('.outerCard2',{
  scrollTrigger:{
   trigger:'.outerCard2',
   scrub:true,
  },
  x:-100,
  opacity:0, 
  duration:1,  
})
timeline4.from('.outerCard3',{
  scrollTrigger:{
   trigger:'.outerCard3',
   scrub:true,
  },
  x:-100,
  opacity:0, 
  duration:1,  
})
timeline3.from('.eventbtn',{
  scrollTrigger:{
   trigger:'.eventbtn',
   scrub:true,
  },
  x:-100,
  opacity:0, 
})
timeline4.from('.eventButton',{
  scrollTrigger:{
   trigger:'.eventButton',
   scrub:true,
  },
  x:-100,
  opacity:0, 
})
const timeline5=gsap.timeline();
timeline5.from('.contact-title',{
  scrollTrigger:{
    trigger:'.contact-title',
    scrub:true,
  },
  y:100,
  opacity:0,
})
timeline5.from('.contact-text',{
  scrollTrigger:{
    trigger:'.contact-text',
    scrub:true,
  },
  y:100,
  opacity:0,
})
timeline5.from('.contact-info',{
  scrollTrigger:{
    trigger:'.mail',
    scrub:true,
  },
  x:-30,
  opacity:0,
})
}
else{
  const timeline2=gsap.timeline();
  timeline2.from('.about',{
    scrollTrigger:{
      trigger:'.about',
      scrub:true,
    },
    y:100,
    opacity:0,
    duration:1.5,
  })
  timeline2.from('.about-subtitle',{
    scrollTrigger:{
      trigger:'.about-subtitle',
      scrub:true,
    },
    y:100,
    opacity:0,
    duration:1.5,
  })
  timeline2.from('.point',{
    scrollTrigger:{
      trigger:'.point',
      scrub:true,
    },
    x:-100,
    opacity:0,
     
  })
  timeline2.from('.imag',{
    scrollTrigger:{
      trigger:'.imag',
      scrub:true,
    },
    x:-100,
    opacity:0,
    
  })
const timeline3=gsap.timeline();
 timeline3.from('.team-title',{
    scrollTrigger:{
      trigger:'.team-title',
      scrub:true,
    },
    y:100,
    opacity:0,
    duration:1.5,
 })
timeline3.from('.teamp',{
  scrollTrigger:{
    trigger:'.teamp',
    scrub:true,
  },
  y:100,
  opacity:0,
  duration:1.5,
})
const timeline4=gsap.timeline();
timeline4.from('.headings',{
  scrollTrigger:{
   trigger:'.headings',
   scrub:true,
  },
  y:100,
  opacity:0,
  duration:1.5,    
})
timeline4.from('.eventSubheading',{
  scrollTrigger:{
   trigger:'.eventSubheading',
   scrub:true,
  },
  y:100,
  opacity:0,
  duration:1.5,    
})
timeline4.from('.outerCard1',{
  scrollTrigger:{
   trigger:'.outerCard1',
   scrub:true,
   start:"top 80%",
   end:"top 30%",
  //  markers:true,
  },
  x:-100,
  opacity:0, 
  duration:1,  
})
timeline4.from('.outerCard2',{
  scrollTrigger:{
   trigger:'.outerCard2',
   scrub:true,
   start:"top 80%",
   end:"top 30%",
  //  markers:true,
  },
  x:-100,
  opacity:0, 
  duration:1,  
})
timeline4.from('.outerCard3',{
  scrollTrigger:{
   trigger:'.outerCard3',
   scrub:true,
   start:"top 80%",
   end:"top 30%",
  //  markers:true,
  },
  x:-100,
  opacity:0, 
  duration:1,  
})
timeline3.from('.eventbtn',{
  scrollTrigger:{
   trigger:'.eventbtn',
   scrub:true,
  },
  x:-100,
  opacity:0, 
})
timeline4.from('.eventButton',{
  scrollTrigger:{
   trigger:'.eventButton',
   scrub:true,
  },
  x:-100,
  opacity:0, 
})
const timeline5=gsap.timeline();
timeline5.from('.contact-title',{
  scrollTrigger:{
    trigger:'.contact-title',
    scrub:true,
    
  },
  y:100,
  opacity:0,
})
timeline5.from('.contact-text',{
  scrollTrigger:{
    trigger:'.contact-text',
    scrub:true,
   start:"top 90%",
   end:"top 60%",
  //  markers:true,
  },
  y:100,
  opacity:0,
})
timeline5.from('.contact-info',{
  scrollTrigger:{
    trigger:'.mail',
    scrub:true,
    start:"top 80%",
   end:"top 50%",
  //  markers:true,
  },
  x:-30,
  opacity:0,
})
}

//nav active link
const navl = document.querySelectorAll(".navl");

  navl.forEach(link => {
    link.addEventListener("click", () => {
      // Remove active class from all links
      navl.forEach(l => l.classList.remove("active"));
      // Add active class to clicked link
      link.classList.add("active");
    });
  });

  const sections = document.querySelectorAll(".sections");
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop -230; // adjust for navbar height
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navl.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });