const tabs = document.querySelectorAll('[role="tab"]');
const sections = document.querySelectorAll('section[role="tabpanel"]');

/**
  * Activates the tab and scrolls to the section/tab content.
  * @param tab The tab element, ie. `a[role="tab"]`.
*/

export function navigateTo(tab) {
    activateTab(tab);

    const tabContent = getTabContent(tab);
    tabContent.scrollIntoView({ behavior: 'smooth' });
}

/**
  * Returns the tab content/section element a tab controls.
  * @param tab The tab element, ie. `a[role="tab"]`.
*/

export function getTabContent(tab) {
    const tabName = tab.getAttribute('href').substring(1);
    return document.getElementById(tabName);
}

/**
  * Returns the tab assigned to a section.
  * @param tab The tab element, ie. `a[role="tab"]`.
*/
export function getSectionTab(section) {
    let sectionId = section.getAttribute('id');

    return document.getElementById(`${sectionId}-tab`);
}

/**
  * Activates a tab.
  * @param tab The tab element, ie. `a[role="tab"]`.
*/
export function activateTab(tab, skipDeactivation = false) {
    if (!skipDeactivation) deactivateTabs();

    tab.classList.add('active');
    tab.setAttribute('aria-selected', true);

    // make sure to keep work tab activated
    if (tab.classList.contains('sub-nav-item'))
    {
        activateWorkTab();
    }
}

/**
  * Deactivates all tabs.
*/
export function deactivateTabs() {
    tabs.forEach((tab) => {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', false);
    });
}

/**
  * Gets all tab elements and assigns an event listener to it.
*/
export function loadTabs() {
    console.log('loading tabs...');

    tabs.forEach((tab) => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            navigateTo(this);
        });
    });

    console.log('tabs loaded');
}

export function activateWorkTab() {
    const workTab = document.querySelector('#works-tab');

    activateTab(workTab, true);
}

export function getActiveSection() {
    let activeSection = sections[0];
    sections.forEach((section) => {
        const sectionRect = section.getBoundingClientRect();

        if (sectionRect.top >= 0 && sectionRect.top < window.innerHeight) {
            activeSection = section;
            navigateTo(getSectionTab(section));
            return;
        }
    });

    return activeSection;
  };