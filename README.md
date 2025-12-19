Elijah Macharia - Personal Portfolio

A modern responsive portfolio website showcasing my journey as a Frontend developer with focus on security-conscious full-stack engineering.

assets/images/portfolio-preview.png

Live Site: https://e-machariadev.vercel.app/

     Table of Contents
        - About
        - Features
        - Tech Stack
        - Project Structure
        - Getting Started
        - Sections
        - Design Decisions
        - Performance
        - Future Enhancements
        - Contact
        - License
        - Acknowledgements

1. About
This portfolio represents my commitment to building beautiful, accessible, and performant web applications. Built entirely from scratch using vanilla HTML, CSS, and JavaScript, it demonstrates my understanding of web fundamentals before moving to modern frameworks.
Why Vanilla JS?
I chose to build this portfolio without frameworks to:
    - Master core web technologies
    - Understand DOM manipulation deeply
    - Appreciate what frameworks abstract away
    - Demonstrate problem-solving without dependencies

2. Features
Design
    Modern, clean aesthetic with gradient backgrounds
    Consistent design system with CSS variables
    Smooth animations and transitions
    Mobile-first responsive design
Navigation
    Fixed navigation bar with blur effect on scroll
    Active section highlighting
    Smooth scroll to sections
    Animated hamburger menu (mobile)
Responsive
    Fully responsive across all devices
    Breakpoints: 320px (mobile) → 768px (tablet) → 1024px+ (desktop)
    Touch-friendly interactions on mobile
Interactive Elements
    Carousel for About Me cards with scroll indicators
    Category-filtered project portfolio
    Sticky scroll card stacking effect (desktop)
    Hover animations and micro-interactions
Skills Section
    Proficiency level indicators (Expert, Intermediate, Learning)
    Interactive skill pills with color coding
    Category organization (Frontend, Backend, Full Stack, Cybersecurity)
Portfolio Section
    Category filtering (Finance, Aviation, Real Estate)
    Sticky scroll stacking effect on desktop
    Project cards with tech stack pills
    Live demo links with icons

3. Tech Stack
Core Technologies
    HTML5 - Semantic markup
    CSS3 - Custom properties, Grid, Flexbox, animations
    JavaScript (ES6+) - Modern vanilla JavaScript
Libraries
    Lucide Icons - Beautiful, consistent icon set
    No CSS frameworks - Pure custom CSS
Tools
    Git & GitHub - Version control
    Vercel - Deployment and hosting
    VS Code - Development environment

4. Project Structure
my_portfolio/
├── assets
│   ├── favicons
│   │   └── favicon_io
│   │       ├── android-chrome-192x192.png
│   │       ├── android-chrome-512x512.png
│   │       ├── apple-touch-icon.png
│   │       ├── favicon-16x16.png
│   │       ├── favicon-32x32.png
│   │       ├── favicon.ico
│   │       └── site.webmanifest
│   └── images
│       ├── 600x400.svg
│       ├── em-high-resolution-logo-grayscale.png
│       ├── em-high-resolution-logo-grayscale-transparent.png
│       ├── em-high-resolution-logo.png
│       ├── my-logo.png
│       ├── my-profile.jpg
│       └── my-profile-removebg-preview.png
├── index.html
├── README.md
├── script.js
└── styles.css
CSS Architecture
The CSS is organized into clear sections:
    - CSS Reset - Normalize browser defaults
    - CSS Variables - Design system (colors, spacing, typography)
    - Base Styles - Body, typography
    - Header & Navigation - Fixed nav, mobile menu
    - Hero Section - Landing area with profile image
    - About Section - Card carousel
    - Skills Section - Categorized skills with pills
    - Portfolio Section - Filterable project cards
    - Contact Section - Contact buttons
    - Footer - Copyright and back-to-top
JavaScript Modules
    - Header Scroll Effect
    - Mobile Menu Toggle
    - Active Section Tracking (Intersection Observer)
    - About Me Carousel (Mobile)
    - Portfolio Category Filter
    - Lucide Icons Initialization


5. Getting Started

6. Sections
- Hero Section
    Introduction with name and title
    Brief mission statement
    Profile image with circular border
    Call-to-action button
Key Feature: Gradient background with rounded top corners that flows into the next section.

- About Me
    Two-card layout with carousel on mobile
    "Who I Am" card with personal story
    "My Interests" card with icon grid
    Scroll indicator dots (mobile)
Key Feature: Horizontal scroll snap with animated dots showing position.

- Skills
    Organized by category (Frontend, Backend, etc.)
    Skill pills with proficiency levels
    Color-coded by expertise level:
        Expert (Green)
        Intermediate (Blue)
        Learning (Orange)
    Hover effects on pills
Key Feature: Legend explaining proficiency levels.

- Portfolio
    Filterable by industry (All, Finance, Aviation, Real Estate)
    Project cards with:
        Title and description
        Tech stack pills
        Project image
        Live demo button
    Different colored gradients per card
Key Feature: Sticky scroll stacking effect on desktop - cards stack on top of each other as you scroll.

- Contact
    Email button (opens mail client)
    LinkedIn link
    GitHub link
    All with Lucide icons
Key Feature: Simple, clean contact options with hover effects.

- Footer
    Copyright notice
    Built with coffee emoji
    Back-to-top button



7. Design Decisions
- Color Palette
    css:root {
        /* Primary Brand Colors */
        --color-primary: #0A0F1F;      /* Deep navy */
        --color-primary-light: #182233; /* Lighter navy */
        
        /* Neutrals */
        --color-bg: #E6E9EE;           /* Light gray */
        --color-border: #BFC6CE;       /* Medium gray */
        --color-accent: #C8B892;       /* Gold accent */
        
        /* Text Colors */
        --text-main: #0A0F1F;          /* Primary text */
        --text-soft: #182233;          /* Secondary text */
        --text-muted: #BFC6CE;         /* Muted text */
        --text-on-dark: #E6E9EE;       /* Text on dark backgrounds */
    }

- Typography
    Headings: Cormorant Garamond (Serif) - Elegant, professional
    Body: Inter (Sans-serif) - Clean, readable
    Scale: Fluid typography using clamp() for responsive sizing

- Spacing System
    Consistent spacing using multiples of 0.25rem (4px):
    css--space-100: 0.25rem;  /* 4px */
    --space-200: 0.5rem;   /* 8px */
    --space-300: 0.75rem;  /* 12px */
    --space-400: 1rem;     /* 16px */
    --space-500: 1.5rem;   /* 24px */
    --space-600: 2rem;     /* 32px */
    --space-700: 3rem;     /* 48px */
    --space-800: 4rem;     /* 64px */

- Animation Philosophy
    Subtle, purposeful animations
    Respect user preferences (prefers-reduced-motion)
    Smooth transitions (0.3s ease standard)
    No janky or excessive animations

8. Perfomance
Optimization Techniques
    Lazy Loading - Images load as they come into viewport
    CSS Variables - Efficient style management
    Minimal Dependencies - Only Lucide icons library
    Semantic HTML - Proper document structure
    No jQuery - Pure vanilla JavaScript
    Optimized Images - Appropriate sizes and formats
Browser Support
    Chrome
    Firefox
    Safari
    Edge

9. Future Enhancements
Phase 1: Content
    Add real project screenshots
    Write detailed project case studies
    Add blog section for articles
    Create project detail pages
Phase 2: Features
    Dark mode toggle
    Contact form with backend
    Project search functionality
    Resume download button
    Testimonials section
Phase 3: Migration
    Rebuild with Next.js + TypeScript
    Add Tailwind CSS
    Implement CMS (Sanity/Contentful)
    Add analytics (Google Analytics)
    Implement proper SEO

10. Key Lessons
This project taught me:
    CSS Architecture - Organizing styles without frameworks
    JavaScript Patterns - Event handling, DOM manipulation, Intersection Observer API
    Responsive Design - Mobile-first approach, breakpoints, fluid typography
    Performance - Optimizing load times, lazy loading
    Accessibility - ARIA labels, semantic HTML, keyboard navigation
    Design Systems - Creating consistent UI with variables
    Deployment - CI/CD with Vercel

11. Connect With Me
I'm actively seeking Frontend Developer opportunities, particularly in:
    - Aviation
    - Finance
    - Real Estate

Email: machariaelijah25@gmail.com
LinkedIn: 
Github: 

12. License 
This project is open source and available under the MIT License

13. Acknowledgements
    - Inspiration: Athos 2.0, Apex Template, Portfolo (Framer templates)
    - Icons: Lucide Icons
    - Fonts: Google Fonts (Inter, Cormorant Garamond)
    - Hosting: Vercel

