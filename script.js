// Scroll Logic

// Selecting Elements
const header = document.querySelector('.header');
const scrollThreshold = 50;

// Define Logic
function toggleScrolledClass() {
    if (window.scrollY > scrollThreshold) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
}

//Attach Scroll Event
window.addEventListener('scroll', toggleScrolledClass);

// Check on Page load
window.addEventListener('load', toggleScrolledClass);

//Mobile Menu Logic
// Select Elements
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('is-open');

    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
})

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-list a');

const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector(`.nav-list a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// About Me Carousel

const bioCards = document.querySelector('.bio-cards');
const carouselDots = document.querySelector('.carousel-dots');
const aboutCards = document.querySelectorAll('.about-card');

// Only run on mobile

if (window.innerWidth < 768 && bioCards && carouselDots) {

    // Create dots based on the number of cards
    aboutCards.forEach((card, index) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.setAttribute('aria-label', `Go to card ${index + 1}`);

        // Set first dot as active
        if (index === 0) {
            dot.classList.add('active');
        }

        // Click dot to scroll to card
        dot.addEventListener('click', () => {
            card.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        });

        carouselDots.appendChild(dot);
    });

    //Update active dot on scroll

    const dots = document.querySelectorAll('.carousel-dots .dot');

    bioCards.addEventListener('scroll', () => {
        const scrollPosition = bioCards.scrollLeft;
        const cardWidth = aboutCards[0].offsetWidth;
        const gap = parseInt(getComputedStyle(bioCards).gap);
        const activeIndex = Math.round(scrollPosition / (cardWidth + gap));

        // Update dots
        dots.forEach((dot, index) => {
            if (index === activeIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    });
}

// Reinitialize on window resize

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Removes dots if switching to desktop

        if (window.innerWidth >= 768) {
            carouselDots.innerHTML = '';
        }
    }, 250);
});

lucide.createIcons();