// Global Variables
let currentProject = null;

// Project URLs - Update these with actual URLs later
const projectUrls = {
    Resume_Analyser: {
        liveDemo: 'https://resume-analyser-2baz.onrender.com/', 
        github: 'https://github.com/Saikiranabhi/resume_analyser.git' 
    },
    youtube_sentimental_analyser: {
        liveDemo: 'https://youtube-sentimental-analyser.onrender.com/', 
        github: 'https://github.com/Saikiranabhi/youtube_sentimental_analyser.git' 
    }, // ADDED MISSING COMMA
    Rag_chattbot_ollama: {
        liveDemo: 'https://qa-rag-ollama.onrender.com/', 
        github: 'https://github.com/Saikiranabhi/qa_rag_ollama.git' 
    }, // ADDED MISSING COMMA
    text_summerizer: {
        liveDemo: '#', 
        github: 'https://github.com/Saikiranabhi/text_summarizer.git' 
    }, // ADDED MISSING COMMA
    Laptop_price_prediction: {
        liveDemo: '#', 
        github: 'https://github.com/Saikiranabhi/Laptop_price_predictor.git' 
    }, // ADDED MISSING COMMA
    cartoon_caption_app: {
        liveDemo: '#', 
        github: 'https://github.com/Saikiranabhi/cartoon_caption_app.git' 
    }
};

// DOM Elements
const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const projectModal = document.getElementById('project-modal');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollEffects();
});

// Navigation Functions
function initializeNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

function initializeScrollEffects() {
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ENHANCED scrollToSection function with better offset handling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = header ? header.offsetHeight : 80; // Fallback height
        const elementPosition = element.offsetTop - headerHeight - 20; // Extra 20px padding
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Project Modal Functions
function openProject(projectType) {
    currentProject = projectType;
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    switch(projectType) {
        case 'Resume_Analyser':
            modalTitle.textContent = 'Resume_Analyser';
            modalBody.innerHTML = '<iframe src="todo.html" style="width: 100%; height: 600px; border: none; border-radius: 8px;"></iframe>';
            break;
        case 'youtube_sentimental_analyser':
            modalTitle.textContent = 'youtube_sentimental_analyser';
            modalBody.innerHTML = '<iframe src="products.html" style="width: 100%; height: 600px; border: none; border-radius: 8px;"></iframe>';
            break;
        case 'text_summerizer':
            modalTitle.textContent = 'text_summerizer';
            modalBody.innerHTML = '<iframe src="todo.html" style="width: 100%; height: 600px; border: none; border-radius: 8px;"></iframe>';
            break;
        case 'laptop_price_prediction':
            modalTitle.textContent = 'laptop_price_prediction';
            modalBody.innerHTML = '<iframe src="products.html" style="width: 100%; height: 600px; border: none; border-radius: 8px;"></iframe>';
            break;
        case 'Rag_chattbot_ollama':
            modalTitle.textContent = 'Rag_chattbot_ollama';
            modalBody.innerHTML = '<iframe src="todo.html" style="width: 100%; height: 600px; border: none; border-radius: 8px;"></iframe>';
            break;
        case 'cartoon_caption_app':
            modalTitle.textContent = 'cartoon_caption_app';
            modalBody.innerHTML = '<iframe src="products.html" style="width: 100%; height: 600px; border: none; border-radius: 8px;"></iframe>';
            break;
    }
    
    projectModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeProject() {
    projectModal.classList.remove('show');
    document.body.style.overflow = 'auto';
    currentProject = null;
}

// Close modal when clicking outside
projectModal.addEventListener('click', function(e) {
    if (e.target === projectModal) {
        closeProject();
    }
});

// Project Navigation Functions
function openLiveDemo(projectType) {
    const url = projectUrls[projectType]?.liveDemo;
    if (url && url !== '#') {
        window.open(url, '_blank');
    } else {
        // Fallback to modal for now
        openProject(projectType);
    }
}

function openGitHubRepo(projectType) {
    const url = projectUrls[projectType]?.github;
    if (url && url !== '#') {
        window.open(url, '_blank');
    } else {
        // Show placeholder message or alert
        alert('GitHub repository link will be added soon!');
    }
}

// Portfolio Demo Function
function openPortfolioDemo() {
    // Scroll to top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && projectModal.classList.contains('show')) {
        closeProject();
    }
});