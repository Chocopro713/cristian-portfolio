# Cristian Barbosa - Professional Portfolio

A modern, professional portfolio website built with Next.js 16, TypeScript, TailwindCSS, and Framer Motion. Features bilingual support (English/Spanish), smooth animations, and a dark modern startup design.

![Portfolio Preview](./public/og-image.png)

## ✨ Features

- **Next.js 16 App Router** - Latest Next.js with server components
- **TypeScript** - Full type safety
- **TailwindCSS** - Modern utility-first CSS
- **Framer Motion** - Smooth animations and transitions
- **next-intl** - Bilingual support (EN/ES)
- **GitHub API Integration** - Automatically fetches latest repositories
- **SEO Optimized** - Meta tags, sitemap, and robots.txt
- **Responsive Design** - Mobile-first approach
- **Dark Theme** - Modern startup aesthetic
- **Glassmorphism** - Subtle glass effect cards

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Chocopro713/portfolio.git

# Navigate to the project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── loading.tsx        # Loading state
│   ├── error.tsx          # Error boundary
│   ├── not-found.tsx      # 404 page
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # SEO robots
├── components/
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Expertise.tsx
│   │   ├── Projects.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   └── ui/                # Reusable UI components
│       ├── AnimatedSection.tsx
│       ├── LanguageToggle.tsx
│       └── ProjectCard.tsx
├── i18n/                  # Internationalization
│   ├── actions.ts         # Server actions for locale
│   ├── request.ts         # next-intl config
│   └── messages/
│       ├── en.json        # English translations
│       └── es.json        # Spanish translations
└── lib/                   # Utility functions
    ├── github.ts          # GitHub API integration
    └── utils.ts           # Helper functions
```

## 🛠️ Tech Stack

### Backend
- .NET, C#, Node.js, Python

### Frontend
- Angular, MAUI, Xamarin, Next.js, React

### Databases
- SQL Server, PostgreSQL, Oracle

### DevOps
- Docker, Kafka, Git, SonarQube

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

## 📧 Contact

- **Email:** Cristianbr7@live.com
- **Phone:** +57 3046317065
- **GitHub:** [Chocopro713](https://github.com/Chocopro713)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Cristian Barbosa
# cristian-portfolio
