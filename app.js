document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const activeLinkIndicator = document.getElementById('active-link-indicator');
    const hoverLinkIndicator = document.getElementById('hover-link-indicator');

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

    document.querySelector('nav').addEventListener('mouseleave', function() {
        hoverLinkIndicator.style.width = '0';
    });

    navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
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
    });
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

    // Toggle the menu when the dropdown button is clicked
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('open'); // Toggle the 'open' class
    });
});
