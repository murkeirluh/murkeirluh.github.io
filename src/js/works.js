import { loadTabs, activateWorkTab, activateTab } from './tabs.js';

document.addEventListener('DOMContentLoaded', () => {
    loadTabs();

    // Intersection Observer for scrollspy
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const targetTabName = entry.target.getAttribute('id');
                const correspondingTab = document.querySelector(`[href="#${targetTabName}"]`);
                console.log(correspondingTab)
                
                if (entry.isIntersecting) {
                    activateTab(correspondingTab);
                }
            });
        },
        { 
            threshold: 0.25
        }
    );

    const sections = document.querySelectorAll('section[role="tabpanel"]');
    sections.forEach((section) => {
        observer.observe(section);
    });
});