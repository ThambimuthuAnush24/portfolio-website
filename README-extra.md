## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

### Personal Information

Edit the content in each component to include your personal information:

- Update your name, title, and bio in `Home.jsx`
- Modify the about section in `About.jsx`
- Update your skills and proficiency levels in `Skills.jsx`
- Add your own projects in `Projects.jsx`
- Update your education and experience in `Education.jsx`
- Change the contact information in `Contact.jsx`

### Styling

The styling is based on TailwindCSS. You can customize the colors, fonts, and other design elements:

- Edit the theme in `tailwind.config.js`
- Modify the global styles in `index.css`
- Update component-specific styles in their respective files

### Images

Replace the placeholder images with your own:

- Add your profile picture and project screenshots to the `src/assets` folder
- Update the image paths in the components

## Deployment

To build the project for production:

```bash
npm run build
# or
yarn build
```

The build files will be generated in the `dist` folder, which you can deploy to any static site hosting service like Netlify, Vercel, GitHub Pages, or AWS S3.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
