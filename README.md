# Gabriel Castro - Portfolio Website

A modern, production-ready portfolio website built with Next.js 14, Sanity CMS, and TypeScript. Features a clean design, comprehensive testing, and excellent performance.

![Gabriel Castro Portfolio](/public/images/image.png)

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **CMS Integration**: Sanity v3 for content management with Studio at `/studio`
- **Responsive Design**: Mobile-first approach with dark mode default
- **Performance Optimized**: 95+ Lighthouse scores across all metrics
- **SEO Ready**: Dynamic meta tags, sitemap, robots.txt, Open Graph images
- **Testing**: Unit tests with Vitest, E2E tests with Playwright
- **CI/CD**: GitHub Actions for automated testing and deployment

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (pages)/           # Route groups
│   ├── blog/              # Blog pages
│   ├── projects/          # Project pages
│   ├── studio/            # Sanity Studio
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── layout/            # Layout components
│   └── ui/                # UI components (shadcn/ui)
├── lib/                   # Utility functions
│   ├── sanity/            # Sanity client and queries
│   ├── seo.ts             # SEO utilities
│   └── utils.ts           # General utilities
└── test/                  # Test configuration
```

## 🛠 Tech Stack

### Core

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)

### CMS & Content

- **CMS**: [Sanity v3](https://www.sanity.io/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Testing & Quality

- **Unit Testing**: [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/)
- **E2E Testing**: [Playwright](https://playwright.dev/)
- **Linting**: [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

### Deployment

- **Platform**: [Vercel](https://vercel.com/)
- **CI/CD**: GitHub Actions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/gabriel1997castro/portfolio-gabriel-castro.git
   cd portfolio-gabriel-castro
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your values:

   ```env
   # Sanity
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_READ_TOKEN=your_read_token

   # Site URL
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 🎨 Sanity Studio

The Sanity Studio is available at `/studio` and provides a user-friendly interface for managing content.

### Content Types

- **Site Settings**: Name, title, bio, contact information
- **Projects**: Portfolio items with tech stack, images, and links
- **Jobs**: Work experience with company details and achievements
- **Posts**: Blog articles with MDX content and tags

### Setting Up Sanity

1. **Create a Sanity project**

   ```bash
   npm create sanity@latest
   ```

2. **Configure the project ID and dataset in your environment variables**

3. **Deploy the Studio** (optional)
   ```bash
   cd sanity-studio
   npm run deploy
   ```

## 🧪 Testing

### Unit Tests

```bash
# Run all unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui
```

### E2E Tests

```bash
# Run E2E tests
npm run e2e

# Run E2E tests with UI
npm run e2e:ui

# Install Playwright browsers (first time only)
npx playwright install
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import your repository in Vercel**

3. **Set environment variables in Vercel dashboard**

4. **Deploy**
   The site will be automatically deployed on every push to main branch.

### Environment Variables for Production

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_READ_TOKEN=your_read_token
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📊 Performance

This portfolio is optimized for performance:

- **Core Web Vitals**: Excellent scores across all metrics
- **Image Optimization**: Next.js Image component with Sanity CDN
- **Code Splitting**: Automatic code splitting with Next.js
- **Static Generation**: Pre-rendered pages where possible
- **Bundle Size**: Optimized bundle with tree shaking

## 🎯 SEO Features

- Dynamic meta tags for all pages
- Open Graph and Twitter Card support
- Structured data markup
- XML sitemap generation
- Robots.txt configuration
- Canonical URLs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Gabriel Castro - [gabriel1997.castro@gmail.com](mailto:gabriel1997.castro@gmail.com)

Project Link: [https://github.com/gabriel1997castro/portfolio-gabriel-castro](https://github.com/gabriel1997castro/portfolio-gabriel-castro)

---

Built with ❤️ by Gabriel Castro
