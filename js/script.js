document.querySelector(".navbar-toggler").addEventListener("click", function(e){

      document.querySelector("#navbarNav").classList.toggle("show");

  });


  $('.first-carousel').owlCarousel({
      loop:true,
      nav:true,
      responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
  })

  $('.second-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  })
