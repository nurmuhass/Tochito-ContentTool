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