import { loadTabs, navigateTo, getTabContent, getActiveSection } from './tabs.js';

document.addEventListener('DOMContentLoaded', () => {
    loadTabs();
    
    const navBackground = document.querySelector('#nav-background');
    const sections = document.querySelectorAll('section[role="tabpanel"]');

    const changeBackgroundTo = (section) => {
        const sectionColor = window.getComputedStyle(section).getPropertyValue('background-color');

        navBackground.style.background = `linear-gradient(to bottom, ${sectionColor} 50%, transparent)`;
    }

    const navigate = (tab) => {
        navigateTo(tab);

        const tabContent = getTabContent(tab);
        changeBackgroundTo(tabContent);
    }

    // Intersection Observer for scrollspy
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const targetTabName = entry.target.getAttribute('id');
                const correspondingTab = document.querySelector(`[href="#${targetTabName}"]`);
                
                if (entry.isIntersecting) {
                    navigate(correspondingTab);
                }
            });
        },
        { 
            threshold: 0.45
        }
    );
    
    sections.forEach((section) => {
        observer.observe(section);
    });

    const activeSection = getActiveSection();
    changeBackgroundTo(activeSection);
});
  

