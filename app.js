document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const activeLinkIndicator = document.getElementById('active-link-indicator');
    const hoverLinkIndicator = document.getElementById('hover-link-indicator');
    const scrollToContactButton = document.getElementById('scrollToContactButton');
    const logo = document.querySelector('.logo'); 
    

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

    function updateIndicator(link, indicator) {
        const linkRect = link.getBoundingClientRect();
        indicator.style.width = linkRect.width + 'px';
        indicator.style.left = linkRect.left + 'px';
    }

    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            updateIndicator(link, activeLinkIndicator);
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            updateIndicator(link, hoverLinkIndicator);
        });
    });


    logo.addEventListener('mouseover', function() {
        updateIndicator(logo, hoverLinkIndicator); 
    });

    document.querySelector('nav').addEventListener('mouseleave', function() {
        hoverLinkIndicator.style.width = '0';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            smoothScroll(targetId);
        });
    });

    scrollToContactButton.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = scrollToContactButton.getAttribute('href').substring(1);
        smoothScroll(targetId);
    });

    document.querySelector('.logo').addEventListener('click', scrollToTop);
    document.querySelector('.nav-link[href="#home"]').addEventListener('click', scrollToTop);

    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    function scrollToTop(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'images/roof1.jpg',
        'images/roof2.jpg',
        'images/roof3.jpg' 
    ];
    
    let currentIndex = 0; 
    const imageContainer = document.querySelector('.method img'); 

    document.getElementById('arrow').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length; 
        imageContainer.src = images[currentIndex]; 
        imageContainer.style.transition = "opacity 0.5s ease";
        imageContainer.style.opacity = 0; 

        setTimeout(() => {
            imageContainer.src = images[currentIndex]; 
            imageContainer.style.opacity = 1;
        }, 500);
    });

    document.getElementById('arrow2').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length; 
        imageContainer.src = images[currentIndex]; 
        imageContainer.style.transition = "opacity 0.5s ease";
        imageContainer.style.opacity = 0; 

        setTimeout(() => {
            imageContainer.src = images[currentIndex]; 
            imageContainer.style.opacity = 1;
        },  500);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#service-method .service, #service-method .method, #background .text-overlay').forEach(function(section) {
        section.classList.add('show');
    });

    setTimeout(function() {
        document.querySelectorAll('#service-method .service, #service-method .method, #background .text-overlay').forEach(function(section) {
            section.classList.add('show');
        });
    }, 500); 
});

document.addEventListener('DOMContentLoaded', function() {
    var bgVideo = document.getElementById('bg-video');
    var bgImage = document.getElementById('bg-image');

    function checkWidth() {
        var screenWidth = window.innerWidth;
        if (screenWidth <= 1024) {
            bgVideo.style.display = 'none';
            bgImage.style.display = 'block';
        } else {
            bgVideo.style.display = 'block';
            bgImage.style.display = 'none';
        }
    }

    checkWidth(); 
    window.onresize = checkWidth; 
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('open'); 
    });
});
