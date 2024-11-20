Author
Nurmuhass

GitHub: Nurmuhass
Email: Nurmuhass@gmail.com


# Image Editor Tool

A simple image editing tool built with Next.js 14 and TypeScript that allows users to browse, edit, and download images from the [Lorem Picsum](https://picsum.photos/) API. Users can adjust image dimensions, apply grayscale effects, blur the image, and download the edited version.

---

## Features

- **Browse Images**: Paginated gallery of images with author's name.
- **Edit Images**: 
  - Resize images (width and height).
  - Apply grayscale mode.
  - Blur images (1–10 levels).
- **Download Edited Images**: Save the customized image directly to your computer.
- **State Persistence**: User settings are retained even after refreshing the page.
- **Navigation Memory**: The application remembers your previous location when navigating between pages.

---

## Requirements

- **Node.js**: Version 16 or later.
- **npm**: Version 7 or later (comes with Node.js).
- **Next.js**: Installed locally via the commands below.

---

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/nurmuhass/Tochito-ContentTool.git
   cd image-editor-tool

2.Install Dependencies

npm install

3.Start the Development Server

npm run dev

4.Access the Application Open your browser and navigate to http://localhost:3000.

File Structure

├── public/
│   └── favicon.ico     # Default favicon
├── src/
│   ├── context/
│   │   └── EditorContext.tsx  # State management for editing settings
│   ├── pages/
│   │   ├── editor/
│   │   │   └── [id].tsx        # Image editor page
│   │   ├── _app.tsx            # Global app configuration
│   │   └── index.tsx           # Home page displaying the image gallery
│   ├── styles/
│   │   ├── globals.css         # Global CSS styles
│   │   └── Home.module.css     # CSS styles for the home page
│   └── components/             # Reusable components (Nothing inside for now)
├── .gitignore                  # Files and directories to ignore in Git
├── package.json                # Project dependencies and scripts
├── README.md                   # Project documentation
└── tsconfig.json               # TypeScript configuration

How to Use
Browse Images

Open the application and scroll through the gallery.
Use the "Next" and "Previous" buttons to paginate through the images.
Edit an Image

Click on an image to navigate to the editor page.
Adjust the following settings:
Width and Height: Specify desired dimensions.
Blur: Drag the slider to apply a blur effect (0-10).
Grayscale: Toggle grayscale mode on or off.
Download the Edited Image

Click the Download button to save the customized image to your computer.
Scripts
npm run dev: Start the development server.
npm run build: Build the application for production.
npm start: Start the production server after building.
npm run lint: Run linter to check for code quality issues.
Technologies Used
Next.js: Framework for server-rendered React applications.
TypeScript: For static typing.
React: Frontend library.
CSS Modules: Scoped styling for components