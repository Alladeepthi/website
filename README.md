# NeuralTrix AI - React + TypeScript + Vite

A modern, professional AI consulting website built with React, TypeScript, and Vite.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
website/
├── public/                      # Static assets
│   └── assets/
│       ├── css/                 # Stylesheets
│       ├── images/              # Image assets
│       │   ├── about/           # About page images (including Storyset)
│       │   ├── industry/        # Industry page images (Storyset)
│       │   ├── banner/          # Hero banners
│       │   ├── logo/            # Brand logos
│       │   ├── service/         # Service images
│       │   └── ...              # Other image categories
│       ├── js/                  # JavaScript files
│       │   └── main.js          # Main JS initialization
│       └── scss/                # SCSS source files
│
├── src/
│   ├── components/              # React components
│   │   ├── layout/              # Layout components
│   │   │   ├── Header.tsx       # Main navigation header
│   │   │   ├── Footer.tsx       # Site footer
│   │   │   └── MobileMenu.tsx   # Mobile navigation
│   │   ├── home/                # Home page components
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── ...
│   │   ├── about/               # About page components
│   │   └── contact/             # Contact page components
│   │
│   ├── pages/                   # Page components
│   │   ├── Home.tsx             # Homepage
│   │   ├── About.tsx            # About page (with Storyset images)
│   │   ├── Services.tsx         # Services page
│   │   ├── Industry.tsx         # Industry solutions (6 sections)
│   │   ├── Platforms.tsx        # Platform offerings
│   │   ├── Products.tsx         # Product catalog
│   │   ├── Pricing.tsx          # Pricing plans
│   │   ├── Team.tsx             # Team page
│   │   ├── Contact.tsx          # Contact page
│   │   ├── Blog.tsx             # Blog listing
│   │   ├── FAQ.tsx              # FAQ page
│   │   ├── CaseStudies.tsx      # Case studies
│   │   ├── CaseStudies2.tsx     # Alternative case studies
│   │   ├── ServiceDetails.tsx   # Service details
│   │   └── PrivacyPolicy.tsx    # Privacy policy
│   │
│   ├── data/                    # Data files
│   │   └── services.ts          # Services data
│   │
│   ├── styles/                  # Component styles
│   ├── App.tsx                  # Main app component
│   ├── App.css                  # App styles
│   ├── main.tsx                 # App entry point
│   └── index.css                # Global styles
│
├── index.html                   # HTML entry point
├── package.json                 # Dependencies & scripts
├── tsconfig.json                # TypeScript config
├── vite.config.ts               # Vite configuration
└── README.md                    # This file
```

## 🎨 Key Features

### Pages
- **Home**: Hero section, services overview, testimonials
- **About**: Company story with Storyset illustrations
- **Services**: AI & LLM Solutions, Engineering & Automation, Data & Cloud
- **Industry**: 6 industry solutions (Healthcare, Manufacturing, Finance, Retail, Education, Logistics)
- **Platforms**: Technology platforms and integrations
- **Products**: Product offerings
- **Pricing**: Pricing plans and packages
- **Team**: Team members and leadership
- **Contact**: Contact form and information
- **Blog**: Blog posts and articles
- **Case Studies**: Client success stories
- **FAQ**: Frequently asked questions

### Industry Solutions
The Industry page features 6 specialized solutions with smooth scroll navigation:
- Healthcare (#healthcare)
- Manufacturing (#manufacturing)
- Finance & Banking (#finance)
- Retail & E-commerce (#retail)
- Education (#education)
- Logistics (#logistics)

Each section includes:
- Professional Storyset illustrations
- Industry-specific features
- Smooth scroll anchor navigation

### Design Features
- Modern, responsive design
- Storyset illustrations for visual consistency
- Smooth scroll navigation
- Mobile-friendly navigation
- Lazy-loaded pages for performance
- SEO optimized

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS/SCSS
- **Icons**: Font Awesome
- **Animations**: WOW.js, SAL.js
- **Sliders**: Swiper

## 📦 Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.1.3",
  "axios": "^1.7.9"
}
```

## 🎯 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page |
| `/about` | About | Company information |
| `/services` | Services | Service offerings |
| `/service-details` | Service Details | Detailed service info |
| `/industry` | Industry | Industry solutions |
| `/industry#healthcare` | Healthcare | Healthcare solutions |
| `/industry#manufacturing` | Manufacturing | Manufacturing solutions |
| `/industry#finance` | Finance | Finance & Banking solutions |
| `/industry#retail` | Retail | Retail & E-commerce solutions |
| `/industry#education` | Education | Education solutions |
| `/industry#logistics` | Logistics | Logistics solutions |
| `/platforms` | Platforms | Platform offerings |
| `/products` | Products | Product catalog |
| `/pricing` | Pricing | Pricing plans |
| `/team` | Team | Team members |
| `/contact` | Contact | Contact form |
| `/blog` | Blog | Blog posts |
| `/case-studies` | Case Studies | Success stories |
| `/faq` | FAQ | Common questions |
| `/privacy-policy` | Privacy | Privacy policy |

## 🖼️ Image Assets

### Storyset Illustrations
Professional flat vector illustrations from [Storyset](https://storyset.com):
- About page: Hero, Story, Impact, Team
- Industry page: Finance, Retail, Education, Logistics

All images are optimized SVG format for fast loading and scalability.

## 🔧 Configuration

### Vite Config
- React plugin enabled
- Code splitting for vendor libraries
- Terser minification for production
- CSS code splitting
- HMR (Hot Module Replacement)

### TypeScript
- Strict mode enabled
- Path aliases configured
- Type checking for production builds

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Performance

- Lazy loading for route components
- Code splitting for optimal bundle size
- Optimized images (SVG, WebP)
- Minified CSS and JS in production
- Tree shaking for unused code

## 📄 License

All Storyset illustrations are used under the Freepik License (free for personal and commercial use with attribution).

## 🤝 Contributing

This is a private project for NeuralTrix AI.

---

**NeuralTrix AI** - Empowering businesses with cutting-edge AI solutions
