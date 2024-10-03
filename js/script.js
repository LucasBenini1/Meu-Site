
/* Interatividade dos Icones */

document.querySelectorAll(".iconSite").forEach(function(item) {
    item.addEventListener("mouseover", function() {
        this.classList.add("show")
    });
});
document.querySelectorAll(".iconSite").forEach(function(item) {
    item.addEventListener("mouseout", function() {
        this.classList.remove("show")
    });
});

document.getElementById("pointer").addEventListener("mouseover", function() {
    this.style.transition = '0.5s'
    this.style.transform = 'translateY(-10px) rotateX(-45deg)'
})
document.getElementById("pointer").addEventListener("mouseout", function() {
    this.style.transform = 'rotateX(0deg)'
})

document.querySelectorAll(".rotate-icons").forEach(function(item) {
    item.addEventListener("mouseover", function() {
        this.classList.add("show")
    });
});
document.querySelectorAll(".rotate-icons").forEach(function(item) {
    item.addEventListener("mouseout", function() {
        this.classList.remove("show")
    });
});



/* ----------------------------------------------- */
/* Menu Hamburguer */

function toggleMenu(element) {
    element.classList.toggle('active');
    document.getElementById("menu-options").classList.toggle("active")
  }


let i = 0
document.getElementById("aboutBtn").addEventListener("click", () => {
    i++
    document.getElementById("aboutDiv").classList.toggle("active")

    if(i % 2 == 1){
        setTimeout(() => {
            document.querySelectorAll(".footerText").forEach((item) => {
                item.style.display = 'block'
            })
        }, 1000)
    } else{

            document.querySelectorAll(".footerText").forEach((item) => {
                item.style.display = 'none'
            })
    }

})


/* ----------------------------------------------- */
/* Tiny Slider Carrossel */

var slider = tns({
    container: '.templatesImg',
    items: 3,
    slideBy: 'page',
    autoplay: false,
    mouseDrag: true,
    autoplayButtonOutput: false,
    controls: false,
    nav: true,
    rewind: false,
    swipeAngle: 35,
    responsive: {
        0: {
            items: 1,
            swipeAngle: 35,
            controls: true
        },
        600: {
            items: 1,
            swipeAngle: 35,
        },
        900: {
            items: 2,
        },
        1600: {
            items: 3
        }
    }
  });
  document.querySelector('.tns-controls [data-controls="prev"]').textContent = '<';
  document.querySelector('.tns-controls [data-controls="next"]').textContent = '>';

  /* ----------------------------------------------- */
  /* TypeWriter */


  const text = "Seja bem-vindo ao meu portfólio!!";
  const textElement = document.getElementById('idAge');
  const typingSpeed = 100;
  let index = 0;
  let isDeleting = false;
  let delayBetweenWords = 2000;

  function typeWriter() {
    if (isDeleting) {
      textElement.innerHTML = text.substring(0, index);
      index--;
    } else {
      textElement.innerHTML = text.substring(0, index);
      index++;
    }

    let speed = typingSpeed;
    if (!isDeleting && index === text.length) {
      speed = delayBetweenWords;
      isDeleting = true;
    } else if (isDeleting && index === 0) {
      isDeleting = false;
      speed = typingSpeed;
    }

    setTimeout(typeWriter, speed);
  }

  window.onload = typeWriter;

  /* ----------------------------------------------- */
  /* Para Cima */

  const elements = document.querySelectorAll('.element');

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  elements.forEach(element => {
      observer.observe(element);
  });

    /* ----------------------------------------------- */
    /* Para Esquerda */

  const elementsLeft = document.querySelectorAll('.elementLeft');

  const observerLeft = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  elementsLeft.forEach(element => {
      observerLeft.observe(element);
  });

    /* ----------------------------------------------- */
    /* Para Direita */

      const elementsRight = document.querySelectorAll('.elementRight');

      const observerRight = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('show');
                  observer.unobserve(entry.target);
              }
          });
      }, { threshold: 0.1 });
    
      elementsRight.forEach(element => {
          observerRight.observe(element);
      });
    

