document.addEventListener('DOMContentLoaded', () => {
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
    }

    const tabs = document.querySelectorAll('[role="tab"]');

    tabs.forEach((tab) => {
        tab.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            navigate(this); // Activate the clicked tab
        });
    });

    deactivateTabs = () => {
        tabs.forEach((tab) => {
            tab.classList.remove('active');
            tab.setAttribute('aria-selected', false);
        });
    }

    const options = { 
        threshold: 1
    };

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
                }
            });
        },
        options
    );
    
    const sections = document.querySelectorAll('section[role="tabpanel"]');
        sections.forEach((section) => {
            observer.observe(section);
    });
});
  

