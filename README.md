# Portfolio - Nader Hani Ali

> Modern, responsive portfolio website for Software Tester & QA Engineer

## 🚀 Live Demo

**[View Live Website](https://naderhani.github.io/QA_Tester/)**

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

### Automatic Deployment (GitHub Actions)

The project automatically deploys to GitHub Pages when you push to the `master` branch.

**Setup:**

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select: **GitHub Actions**
3. Push to master branch - deployment happens automatically!

### Manual Build

```bash
# Build the project
npm run build

# Preview the build locally
npm run preview
```

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
