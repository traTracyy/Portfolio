# Khor You Qi — Personal Portfolio Website

Welcome to the source code of **Khor You Qi's Personal Portfolio Website**, a minimal and clean developer portfolio built using modern frontend technologies. This site showcases selected projects, a short professional bio, and downloadable assets such as my resume and personal illustrations.

**🔗 [Live Site](https://khoryouqi.vercel.app/)**

## 🌐 Overview

This portfolio serves as a digital resume and project showcase for **Khor You Qi**, a frontend developer with a focus on building visually polished, responsive, and accessible web applications.

The website features:
- A sleek homepage with animated introduction
- A project gallery dynamically loaded from JSON
- Downloadable resume and custom illustrations
- Contact section with external social links

## 🚀 Technologies Used

- **Next.js** – React framework for SSR and static site generation
- **Tailwind CSS** – Utility-first CSS framework for fast UI development
- **Framer Motion** – For smooth page and element animations
- **TypeScript** – Strongly typed JavaScript for scalable code
- **Vercel** – Hosting and deployment

## 📁 Project Structure

```
├── public/
│   └── project/             # Ignored — contains local project images
├── src/
│   ├── assets/              # Ignored — contains resume and illustrations
│   ├── components/          # Reusable UI components
│   ├── data/
│   │   └── projects.json    # Project metadata (title, description, links, etc.)
│   ├── pages/               # Application routes
│   └── styles/              # Global CSS
```

## 📦 Getting Started

To run this project locally:

```bash
git clone https://github.com/traTracyy/Portfolio
cd Portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 Adding Your Content

- **Projects**: Add project metadata in `src/data/projects.json`. Example:

```json
{
   "id": "",
    "title": "",
    "description": "",
    "details": "",
    "language": ["", ""],
    "technologies": ["", "" ],
    "github": "",
    "youtube": "",
    "images": ["", ""] 
}
```

- **Images**: Place your project images in `public/project/` (will be gitignored).
- **Resume & Illustrations**: Add to `src/assets/` (also gitignored).

## 📤 Deployment

This site is deployed via **Vercel**. On every push to the `main` branch, Vercel rebuilds and deploys the latest version automatically.

To manually deploy:

```bash
vercel --prod
```

---

## 👩‍💻 Author

Khor You Qi  
[LinkedIn: khor-you-qi-tracy](https://www.linkedin.com/in/khor-you-qi-tracy/)

