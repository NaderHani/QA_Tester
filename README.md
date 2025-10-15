# Portfolio - Nader Hani Ali

> Modern, responsive portfolio website for Software Tester & QA Engineer

[![Deploy to GitHub Pages](https://github.com/NaderHani/QA_Tester/actions/workflows/deploy.yml/badge.svg)](https://github.com/NaderHani/QA_Tester/actions/workflows/deploy.yml)

## 🚀 Live Demo

Visit: [https://naderhani.github.io/QA_Tester/](https://naderhani.github.io/QA_Tester/)

## ✨ Features

- **Modern Design**: Clean, professional UI with neon-themed components
- **Responsive**: Fully responsive design for all devices
- **Performance Optimized**: Built with React + Vite for optimal performance
- **Tailwind CSS**: Modern utility-first CSS framework
- **Speed Insights**: Integrated Vercel Speed Insights

## 🛠️ Built With

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

### Automatic Deployment (Recommended)

The project is configured with GitHub Actions for automatic deployment:

1. **Push to master**: Any push to the `master` branch automatically triggers deployment
2. **Manual trigger**: Go to Actions tab → "Deploy to GitHub Pages" → Run workflow

### Manual Deployment

```bash
# Build and deploy manually
npm run deploy
```

This will:

1. Build the project (`npm run build`)
2. Deploy to `gh-pages` branch using gh-pages package

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 🔧 Configuration

### GitHub Pages Settings

1. Go to repository Settings → Pages
2. Set Source to: **GitHub Actions**
3. The site will deploy automatically on every push to master

### Base Path

The base path is configured in `vite.config.js`:

```javascript
base: "/QA_Tester/";
```

Change this if deploying to a different URL.

## 📂 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       ├── deploy.yml          # Auto deployment on push
│       └── manual-deploy.yml   # Manual deployment workflow
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── dist/                       # Build output
├── package.json
├── vite.config.js
└── tailwind.config.cjs
```

## 🎨 Customization

### Colors

Edit `tailwind.config.cjs` to customize the color scheme:

```javascript
colors: {
  neon: {
    green: "#4ade80",
    purple: "#a855f7",
    red: "#f87171",
  }
}
```

### Content

Update content in `src/components/` files:

- **Hero.jsx**: Main landing section
- **About.jsx**: About section
- **Skills.jsx**: Technical skills
- **Experience.jsx**: Work experience
- **Projects.jsx**: Portfolio projects
- **Contact.jsx**: Contact form

## 📄 License

ISC License - feel free to use this project for your own portfolio!

## 👤 Author

**Nader Hani Ali**

- GitHub: [@NaderHani](https://github.com/NaderHani)
- LinkedIn: [naderhani2302](https://linkedin.com/in/naderhani2302)
- Email: Naderhani456@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

⭐ If you found this project helpful, please give it a star!
