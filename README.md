# Rimon Project

A modern web application built with Vite, React, TypeScript, and Tailwind CSS, showcasing information about hedge funds and investment services.

## 🚀 Features

- Responsive navigation with modern UI/UX
- Multiple informational sections including:
  - Home page with main services
  - About Us section
  - What Is A Hedge Fund information
  - Staff profiles and team information
  - Contact form
  - Specialized sections for Hetmed and Mango services
- Fully responsive design
- Modern UI with custom animations and transitions
- Video content integration
- Professional staff portfolio display

## 🛠️ Technologies Used

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- PostCSS - A tool for transforming CSS with JavaScript

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)


## 📁 Project Structure

```
├── public/          # Static files
├── src/            # Source files
│   ├── assets/     # Static assets (images, videos)
│   ├── hooks/      # Custom React hooks
│   ├── scenes/     # Main application components/pages
│   │   ├── AboutUs
│   │   ├── ContactUs
│   │   ├── Footer
│   │   ├── Hetmed
│   │   ├── home
│   │   ├── Mango
│   │   ├── navbar
│   │   ├── TheStaff
│   │   └── whatIsAHedgeFund
│   ├── shared/     # Shared components and types
│   └── main.tsx    # Application entry point
├── index.html      # Entry HTML file
├── vite.config.ts  # Vite configuration
├── tailwind.config.js # Tailwind configuration
└── tsconfig.json   # TypeScript configuration
```

## 🎨 Styling

This project uses Tailwind CSS for styling with custom configurations:

- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration for processing Tailwind
- Custom utility classes and components in the `shared` directory

## 📱 Responsive Design

The application is fully responsive and uses:

- Custom media queries through the `useMediaQuery` hook
- Tailwind CSS breakpoints
- Flexible layouts for optimal display across all device sizes
