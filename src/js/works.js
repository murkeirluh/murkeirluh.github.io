import { loadTabs, getActiveSection } from './tabs.js';

document.addEventListener('DOMContentLoaded', () => {
    loadTabs();
    getActiveSection();
});