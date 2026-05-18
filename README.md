# Emirhan Büyüksenirli — Personal Portfolio

A modern, responsive personal portfolio website built with React and Vite.

🌐 **Live Site:** [https://emirhanbuyuksenirli.com]

---

## Tech Stack

- **React 19** — UI framework
- **Vite** — build tool
- **CSS3** — custom styling with CSS variables (no UI framework)
- **react-scroll** — smooth scrolling navigation
- **react-intersection-observer** — scroll-triggered animations
- **react-icons** — icon library
- **EmailJS** — contact form email service

---

## Features

- Dark theme with blue/purple accent colors
- Smooth scroll navigation
- Fade-in animations on scroll
- Responsive design — mobile, tablet, desktop
- Working contact form with EmailJS
- Projects section with live demo and GitHub links
- SEO optimized with Open Graph and Twitter Card meta tags
- Custom favicon

---

## Sections

- Hero
- About
- Skills
- Projects
- Experience
- Education
- Contact

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Emirhan-bs/emirhan-portfolio

# Go into the project folder
cd emirhan-portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these values from [EmailJS](https://www.emailjs.com).

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## Project Structure

```
src/
├── assets/
│   └── images/
│       └── profile.jpg
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   ├── projects.js
│   ├── experience.js
│   └── education.js
├── hooks/
│   └── useAnimateOnScroll.js
├── styles/
│   ├── global.css
│   ├── Navbar.css
│   ├── Hero.css
│   ├── About.css
│   ├── Skills.css
│   ├── Projects.css
│   ├── Experience.css
│   ├── Education.css
│   ├── Contact.css
│   └── Footer.css
├── App.jsx
└── main.jsx
```

---

## Deployment

This site is deployed on [Vercel](https://vercel.com).

To deploy your own version:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add your `.env` variables in Vercel's Environment Variables settings
4. Click Deploy

---

## Contact

**Emirhan Büyüksenirli**
- 📧 Email: emirhanbuyuksenirli@gmail.com
- 💻 GitHub: [github.com/Emirhan-bs](https://github.com/Emirhan-bs)
- 💼 LinkedIn: [linkedin.com/in/emirhan-buyuksenirli](https://linkedin.com/in/emirhan-buyuksenirli)

---

© 2026 Emirhan Büyüksenirli. All rights reserved.