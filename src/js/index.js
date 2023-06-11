document.addEventListener('DOMContentLoaded', () => {
    const navBackground = document.querySelector('#nav-background');

    changeBackgroundTo = (section) => {
        const sectionColor = window.getComputedStyle(section).getPropertyValue('background-color');
        navBackground.style.background = `linear-gradient(to bottom, ${sectionColor} 50%, transparent)`;
    }

    navigate = (tab) => {
        const tabName = tab.getAttribute('href').substring(1);
        const tabContent = document.getElementById(tabName);

        const allTabs = document.querySelectorAll('[role="tab"]');
        
        allTabs.forEach((t) => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', false);
        });
        
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

    deactivateTabs = () => {
        tabs.forEach((tab) => {
            tab.classList.remove('active');
            tab.setAttribute('aria-selected', false);
        });
    }

    // Intersection Observer for scrollspy
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const targetTabName = entry.target.getAttribute('id');
                const correspondingTab = document.querySelector(`[href="#${targetTabName}"]`);
                
                if (entry.isIntersecting) {
                    deactivateTabs();

                    correspondingTab.classList.add('active');
                    correspondingTab.setAttribute('aria-selected', true);
                    
                    const tabContent = document.querySelector(`#${targetTabName}`);
                    changeBackgroundTo(tabContent);
                }
            });
        },
        { 
            threshold: 0.85
        }
    );
    
    const sections = document.querySelectorAll('section[role="tabpanel"]');
        sections.forEach((section) => {
            observer.observe(section);
    });
});
  

