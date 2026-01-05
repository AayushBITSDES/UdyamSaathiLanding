# MSME Sahayak Website - Project Outline

## File Structure
```
/mnt/okcomputer/output/
├── index.html              # Homepage
├── about.html              # About page
├── contact.html            # Contact page
├── main.js                 # Main JavaScript file
├── hero-image.png          # Generated hero image
├── interaction.md          # Interaction design doc
├── design.md               # Design style guide
└── outline.md              # This file
```

## Page Breakdown

### 1. index.html - Homepage
**Purpose**: Introduce MSME Sahayak and showcase current prototype capabilities

**Sections**:
- **Navigation Bar**: Home | About | Contact (fixed top)
- **Hero Section**:
  - Generated abstract hero image background
  - Main headline "MSME Sahayak" with typewriter animation
  - Subheadline "AI-powered scheme discovery for MSMEs"
  - Brief description of voice-first assistant
  - Prominent "Early prototype" label/badge
- **Problem Section**:
  - Title: "The Scheme Access Gap"
  - Opening statement with statistics (7.34 crore MSMEs, ₹30 lakh crore schemes)
  - Four barrier cards with icons:
    * Information Asymmetry
    * Language Barriers  
    * Process Complexity
    * Fragmented Ecosystem
  - Interactive chart visualization showing the gap
- **Current Prototype Section**:
  - Title: "What Works Now"
  - Three feature cards:
    * RAG-based scheme matching system
    * Basic voice interface for conversation
    * Multi-turn conversation handling
- **Footer**: Copyright and email contacts

### 2. about.html - About Page
**Purpose**: Provide project background and team information

**Sections**:
- **Navigation Bar**: Same as homepage
- **Project Description**:
  - One paragraph explaining early-stage project
  - Focus on voice-based scheme discovery infrastructure
  - Mention of BITS Design School Mumbai and RBI Innovation Hub support
- **Team Section**:
  - Aayush Khare, BITS Design School Mumbai
  - Koutilya Karamala, BITS Design School Mumbai
  - Simple, clean presentation
- **Footer**: Same as homepage

### 3. contact.html - Contact Page
**Purpose**: Provide contact information and inquiry form

**Sections**:
- **Navigation Bar**: Same as homepage
- **Contact Information**:
  - Email addresses:
    * aayush@example.com
    * koutilya@example.com
  - "For inquiries about the project" label
- **Contact Form**:
  - Name field (required)
  - Email field (required)
  - Message textarea (required)
  - Submit button
  - Form validation and success/error messages
- **Footer**: Same as homepage

## Interactive Components

### 1. Contact Form
- Real-time validation
- Accessible error messages
- Success confirmation
- Keyboard navigation support

### 2. Problem Gap Visualization
- Animated bar chart using ECharts.js
- Shows scheme availability vs. actual access
- Responsive design for mobile

### 3. Feature Cards
- Hover effects with subtle lift
- Staggered animation on page load
- Mobile-friendly touch interactions

### 4. Navigation
- Active page indicator
- Smooth transitions
- Mobile hamburger menu

## Technical Implementation

### Libraries Used
- **Anime.js**: Page transitions and micro-interactions
- **ECharts.js**: Data visualization
- **Typed.js**: Typewriter effect for hero
- **Splitting.js**: Text animations
- **p5.js**: Background particle system

### Responsive Design
- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px
- Touch-optimized interactions
- Accessible typography scaling

### Accessibility Features
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- High contrast ratios
- Screen reader compatibility

## Content Strategy

### Tone
- Professional yet approachable
- Clear and concise
- Focus on current capabilities, not future promises
- Government-appropriate language

### Visual Hierarchy
- Large, bold headings (Sofia Pro Narrow Semi Bold)
- Readable body text (General Sans Regular)
- Consistent spacing and alignment
- Clear call-to-action elements

### Performance
- Optimized images
- Minimal JavaScript for fast loading
- Progressive enhancement
- Mobile-optimized assets