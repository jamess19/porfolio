# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Fast Performance**: Built with Vite for optimal performance
- **Type Safety**: Written in TypeScript for better code quality

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: ESLint for code linting

## 📋 Sections

- **Hero**: Introduction with animated elements
- **About**: Personal journey and background
- **Skills**: Technical skills and technologies
- **Projects**: Showcase of work and projects
- **Contact**: Contact information and social links

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jamess19/porfolio.git
cd porfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects section
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer component
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── hooks/              # Custom hooks
│   └── useGitHub.ts    # GitHub integration hook
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Personal Information

Update your personal information in the following files:

- `src/components/Hero.tsx` - Name, title, and introduction
- `src/components/About.tsx` - Personal journey and education
- `src/components/Skills.tsx` - Technical skills and technologies
- `src/components/Contact.tsx` - Contact information and social links
- `src/components/Footer.tsx` - Footer information

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Fonts and typography
- Spacing and layout
- Dark mode variants

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Update navigation links in `src/components/Header.tsx`

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌟 Performance

- Fast loading with Vite
- Optimized images and assets
- Smooth animations with Framer Motion
- Lazy loading for better performance

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Nguyen Quang Thong**

- Email: qthong2004@gmail.com
- Phone: +84 354 747 227
- Location: Ho Chi Minh City, Vietnam
- GitHub: [@jamess19](https://github.com/jamess19)
- LinkedIn: [Thông Nguyễn](https://linkedin.com/in/thông-nguyễn-8b9389155/)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

Made with ❤️ by Nguyen Quang Thong
