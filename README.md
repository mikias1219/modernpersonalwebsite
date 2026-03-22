# mikiasabatesite

Portfolio site for **Mikias Abate** — Next.js, TypeScript, Tailwind CSS.

🌐 **Live:** [https://www.mikiasabate.tech](https://www.mikiasabate.tech)

## Features

- 🎨 Modern, beautiful UI with smooth animations
- 📱 Fully responsive design
- 🌙 Dark mode support with toggle
- ⚡ Fast and optimized with Next.js
- 🎯 Smooth scrolling navigation
- 📧 Contact form with SMTP email integration
- 🔗 Social media integration
- 🎯 Optimized spacing and layout

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository and enter the project directory:
```bash
git clone <your-repo-url>
cd <repo-folder>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

**mikiasabatesite** is configured for **mikiasabate.tech** with automatic CI/CD.

### 🚀 Automatic deployment (CI/CD)

Workflow: [.github/workflows/ci-cd.yml](.github/workflows/ci-cd.yml).

| Event | What runs |
| --- | --- |
| Push to any branch | Lint + production build |
| Push to `main` | Same, then **production** deploy to Vercel |
| Pull request into `main` | Lint + build, then **preview** deploy (same-repo PRs only) |

**Vercel:** In the Vercel project, either use **GitHub Actions only** or **Vercel Git integration**—not both—or you will get duplicate deployments.

**Required GitHub repository secrets:**
- `VERCEL_TOKEN` - Your Vercel API token
- `VERCEL_ORG_ID` - Your Vercel organization/user ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID

### Manual Deployment

If you need to deploy manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

Or use npm script:
```bash
npm run deploy:vercel
```

The app is optimized for:
- ✅ Vercel (recommended) - With automatic CI/CD
- ✅ Netlify
- ✅ Custom VPS/Server

## Project Structure

```
mikiasabatesite/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation bar
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Certifications.tsx  # Certifications section
│   ├── Projects.tsx    # Projects section
│   └── Contact.tsx     # Contact section
└── public/             # Static assets
```

## Customization

To customize the website with your own information:

1. Update personal information in each component file
2. Modify colors in `app/globals.css`
3. Add/remove projects in `components/Projects.tsx`
4. Update social links in `components/Footer.tsx` and `components/Hero.tsx`

## License

This project is open source and available under the MIT License.

## Contact

- **Email:** mikiyasabate1219@gmail.com
- **LinkedIn:** [mikiyas-abate](https://www.linkedin.com/in/mikiyas-abate)
- **GitHub:** [mikias1219](https://github.com/mikias1219)
- **Portfolio:** [mikiasabate.tech](https://www.mikiasabate.tech)

---

Built with ❤️ by Mikias Abate
