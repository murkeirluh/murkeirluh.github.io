import { loadTabs, activateWorkTab, activateTab } from './tabs.js';

const lightbox = document.querySelector('#lightbox');

document.addEventListener('DOMContentLoaded', () => {
    loadTabs();

    // Intersection Observer for scrollspy
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const targetTabName = entry.target.getAttribute('id');
                const correspondingTab = document.querySelector(`[href="#${targetTabName}"]`);
                
                if (entry.isIntersecting) {
                    activateTab(correspondingTab);
                }
            });
        },
        { 
            threshold: 0.5
        }
    );

    const sections = document.querySelectorAll('section[role="tabpanel"]');
    sections.forEach((section) => {
        observer.observe(section);
    });

    const images = document.querySelectorAll('.lightbox-image');
    
    images.forEach(image => {
        image.addEventListener('click', function() {
            showLightbox(this.src);
        });
    });
});

function showLightbox(imageSrc) {
    const lightbox = document.querySelector('#lightbox');
    const displayImage = document.querySelector('#lightbox img');

    displayImage.setAttribute("src", imageSrc);
    lightbox.classList.toggle('hidden');
    lightbox.toggleAttribute('aria-hidden');
}

function closeLightbox() {
    lightbox.classList.toggle('hidden');
    lightbox.toggleAttribute('aria-hidden');
}

lightbox.querySelector('.close-lightbox').addEventListener('click', (e) => {
    closeLightbox();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
        closeLightbox();
    }
});

lightbox.addEventListener('click', function(e) {
    console.log(e)
    if (e.target.parentElement === lightbox) {
        closeLightbox();
    }
});