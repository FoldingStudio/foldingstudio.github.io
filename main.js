
    window.addEventListener('scroll', () => {
      const scrollArrow = document.getElementById('scrollArrow');
      if (window.scrollY > 0) {
        scrollArrow.style.opacity = '0';
      } else {
        scrollArrow.style.opacity = '1';
      }
    });

    const paragraphs = document.querySelectorAll(".paragraph");
    
window.addEventListener('scroll', () => {
    const scrollArrow = document.getElementById('scrollArrow');
    const titleContainer = document.getElementById('titleContainer');

    if (window.scrollY > 0) {
        scrollArrow.style.opacity = '0'; // Nasconde la freccia
        titleContainer.classList.add('hidden'); // Nasconde il logo e il testo
    } else {
        scrollArrow.style.opacity = '1'; // Mostra la freccia
        titleContainer.classList.remove('hidden'); // Mostra il logo e il testo
    }
});

window.addEventListener('scroll', () => {
    const scrollArrow = document.getElementById('scrollArrow');
    const titleContainer = document.getElementById('titleContainer');

    if (window.scrollY > 0) {
        scrollArrow.style.opacity = '0'; // Nasconde la freccia
        titleContainer.classList.add('hidden'); // Nasconde il logo e il testo
    } else {
        scrollArrow.style.opacity = '1'; // Mostra la freccia
        titleContainer.classList.remove('hidden'); // Mostra il logo e il testo
    }
});

document.addEventListener("scroll", function () {
        const paragraphs = document.querySelectorAll('.paragraph, .titlebold_italic');
        paragraphs.forEach(paragraph => {
            if (isInView(paragraph)) {
                paragraph.classList.add("paragraph_visible");
            }
           
        });
});
    
function isInView(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.bottom > 0 &&
            rect.top < (window.innerHeight - 150)
        );
}
    

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const secondSectionTop = document.querySelector('.section2').offsetTop;
    const fadeStart = 0;
    const fadeEnd = secondSectionTop;

    if (scrollY > fadeStart && scrollY <= fadeEnd) {
        const opacity = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        header.style.opacity = opacity;
        header.style.transform = `translateY(${(1 - opacity) * -20}px)`;
    } else if (scrollY > fadeEnd) {
        header.classList.add('visible');
    } else {
        header.classList.remove('visible');
        header.style.opacity = 0;
        header.style.transform = 'translateY(-20px)';
    }
});

/*Animazione carosello*/
const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * track.clientWidth;
    track.style.transform = `translateX(${offset}px)`;
    toggleArrows();
}

function toggleArrows() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === items.length - 1;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

window.addEventListener('resize', updateCarousel);
updateCarousel();


