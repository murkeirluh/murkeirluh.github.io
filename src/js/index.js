document.addEventListener('DOMContentLoaded', () => {
    const navBackground = document.querySelector('#nav-background');
    const sections = document.querySelectorAll('section[role="tabpanel"]');

    changeBackgroundTo = (section) => {
        const sectionColor = window.getComputedStyle(section).getPropertyValue('background-color');

        navBackground.style.background = `linear-gradient(to bottom, ${sectionColor} 50%, transparent)`;
    }

    navigate = (tab) => {
        const tabName = tab.getAttribute('href').substring(1);
        const tabContent = document.getElementById(tabName);

        deactivateTabs();
        
        tab.classList.add('active');
        tab.setAttribute('aria-selected', true);

        tabContent.scrollIntoView({ behavior: 'smooth' });
        
        changeBackgroundTo(tabContent);
    }

    const tabs = document.querySelectorAll('[role="tab"]');

    tabs.forEach((tab) => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            navigate(this);
        });
    });

    getSectionTab = (section) => {
        let sectionId = section.getAttribute('id');

        return document.getElementById(`${sectionId}-tab`);
    }

    activateTab = (tab) => {
        deactivateTabs();

        tab.classList.add('active');
        tab.setAttribute('aria-selected', true);
        
        const tabContent = document.querySelector(`section#${tab.getAttribute('aria-controls')}`);
        changeBackgroundTo(tabContent);
    }

    deactivateTabs = () => {
        tabs.forEach((tab) => {
            tab.classList.remove('active');
            tab.setAttribute('aria-selected', false);
        });
    }

    const getActiveSection = () => {
        let activeSection = sections[0];
        sections.forEach((section) => {
            const sectionRect = section.getBoundingClientRect();

            if (sectionRect.top >= 0 && sectionRect.top < window.innerHeight) {
                activeSection = section;
                activateTab(getSectionTab(section));
                return;
            }
        });

        return activeSection;
      };

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
            threshold: 0.45
        }
    );
    
    sections.forEach((section) => {
        observer.observe(section);
    });

    const activeSection = getActiveSection();
    changeBackgroundTo(activeSection);
});
  

