// Global Variables
let currentProject = null;

// DOM Elements
const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const projectModal = document.getElementById('project-modal');

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    initializeNavigation();
    initializeScrollEffects();
});

// ── Navigation ──
function initializeNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu + smooth scroll on nav link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');

            // Scroll to section
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

function initializeScrollEffects() {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ── FIXED scrollToSection ──
// Uses scrollIntoView — works reliably on all browsers.
// 'block: start' + manual header offset via scroll-margin-top in CSS.
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerHeight = header ? header.offsetHeight : 80;
    const top = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;

    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
}

// ── Modal ──
function openProject(projectType) {
    currentProject = projectType;
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.textContent = projectType.replace(/_/g, ' ');
    modalBody.innerHTML = '<p style="padding:2rem;color:#666;">No preview available. Please use the Live Demo or GitHub link.</p>';

    projectModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeProject() {
    projectModal.classList.remove('show');
    document.body.style.overflow = 'auto';
    currentProject = null;
}

// Close modal on outside click
projectModal.addEventListener('click', function (e) {
    if (e.target === projectModal) {
        closeProject();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && projectModal.classList.contains('show')) {
        closeProject();
    }
});