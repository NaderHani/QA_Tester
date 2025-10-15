# Portfolio - Nader Hani Ali

> Modern, responsive portfolio website for Software Tester & QA Engineer

## 🚀 Live Demo

**[Deploy Your Own](https://vercel.com/new)** - Ready for instant deployment!

## ✨ Features

- **Modern Design**: Clean, professional UI with neon-themed components
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with React + Vite
- **Auto Deployment**: GitHub Actions for automatic deployment

## 🛠️ Tech Stack

- React 19.2.0
- Vite 5.4.11
- Tailwind CSS 3.4.0
- Vercel Speed Insights

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/NaderHani/QA_Tester.git

# Navigate to project directory
cd QA_Tester

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Deployment

### Deploy to Vercel (Recommended - 1 Minute)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

**Quick Steps:**

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Click "Deploy" - Done! 🎉

**Or use CLI:**

```bash
npx vercel
```

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

**Or drag & drop** the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Manual Build

```bash
# Build the project
npm run build

# Preview the build locally
npm run preview

# Or run the deployment script (Windows)
deploy.bat
```

### Other Hosting Options

The `dist` folder can be deployed to:

- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**
- **Cloudflare Pages**
- Any static hosting service

**Note:** All configurations are ready! No setup needed.

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📂 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── vite.config.js
├── tailwind.config.cjs
└── package.json
```

## 🎨 Customization

### Update Content

Edit the component files in `src/components/`:

- `Hero.jsx` - Main landing section
- `About.jsx` - About section
- `Skills.jsx` - Technical skills
- `Experience.jsx` - Work experience
- `Projects.jsx` - Portfolio projects
- `Contact.jsx` - Contact form

### Change Colors

Edit `tailwind.config.cjs`:

```javascript
colors: {
  neon: {
    green: "#4ade80",
    purple: "#a855f7",
    red: "#f87171",
  }
}
```

## 👤 Author

**Nader Hani Ali**

- GitHub: [@NaderHani](https://github.com/NaderHani)
- LinkedIn: [naderhani2302](https://linkedin.com/in/naderhani2302)
- Email: Naderhani456@gmail.com

## 📄 License

ISC License

---

⭐ **Star this repo if you found it helpful!**
