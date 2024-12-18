function showText(id) {
    const element = document.getElementById(id);
    element.classList.toggle('active');
  }


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const activeLinkIndicator = document.getElementById('active-link-indicator');
    const hoverLinkIndicator = document.getElementById('hover-link-indicator');
    const logo = document.querySelector('.logo'); 
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');


    function updateIndicator(link, indicator) {
        const linkRect = link.getBoundingClientRect();
        indicator.style.width = linkRect.width + 'px';
        indicator.style.left = linkRect.left + 'px';
    }

    function disableHoverEffects() {
        hoverLinkIndicator.style.display = 'none';
        activeLinkIndicator.style.display = 'none';
    }

    function enableHoverEffects() {
        hoverLinkIndicator.style.display = '';
        activeLinkIndicator.style.display = '';
        navLinks.forEach(link => {
            link.addEventListener('mouseover', () => updateIndicator(link, hoverLinkIndicator));
        });

        logo.addEventListener('mouseover', () => updateIndicator(logo, hoverLinkIndicator));
        document.querySelector('nav').addEventListener('mouseleave', () => {
            hoverLinkIndicator.style.width = '0';
        });
    }

    if (window.innerWidth <= 1024) {
        disableHoverEffects();
    } else {
        enableHoverEffects();
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 1024) {
            disableHoverEffects();
        } else {
            enableHoverEffects();
        }
    });

    //:::::

    function smoothScroll(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerOffset = document.querySelector('header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            updateIndicator(link, activeLinkIndicator);
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => updateIndicator(link, hoverLinkIndicator));
    });

    logo.addEventListener('mouseover', () => updateIndicator(logo, hoverLinkIndicator));

    document.querySelector('nav').addEventListener('mouseleave', () => {
        hoverLinkIndicator.style.width = '0';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            smoothScroll(targetId);
        });
    });

    logo.addEventListener('click', scrollToTop);
    document.querySelector('.nav-link[href="#home"]').addEventListener('click', scrollToTop);

    function scrollToTop(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // MENU TOGGLE FOR MOBILE
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open'); 
    });

    // IMAGE CAROUSEL FUNCTIONALITY
    const images = ['images/roof1.jpg', 'images/roof2.jpg', 'images/roof3.jpg'];
    let currentIndex = 0;
    const imageContainer = document.querySelector('.imagewheel img'); 

    document.getElementById('arrow').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; 
        updateImage();
    });

    document.getElementById('arrow2').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; 
        updateImage();
    });

    function updateImage() {
        imageContainer.style.transition = "opacity 0.5s ease";
        imageContainer.style.opacity = 0;

        setTimeout(() => {
            imageContainer.src = images[currentIndex];
            imageContainer.style.opacity = 1;
        }, 500);
    }

  
    document.querySelectorAll('#service-method .service, #service-method .method, #background .text-overlay').forEach(section => {
        section.classList.add('show');
    });

    setTimeout(() => {
        document.querySelectorAll('#service-method .service, #service-method .method, #background .text-overlay').forEach(section => {
            section.classList.add('show');
        });
    }, 500); 
});
