# STRIDE - Athletic Wear Landing Page

A modern landing page for STRIDE, a fictional athletic wear brand that blends the premium aesthetics of Nike with the inclusive philosophy of Planet Fitness.

## Features

- Clean, modern design inspired by premium athletic brands
- Responsive layout that works on all devices
- Inclusive messaging targeting everyday fitness enthusiasts
- Interactive elements with smooth animations
- Mobile-friendly navigation

## Design Principles

The design combines:
- Nike's premium aesthetic (bold typography, clean layouts, inspirational imagery)
- Planet Fitness's inclusive approach (welcoming messaging, diverse representation, accessibility)

## Project Structure

```
stride-fitness-brand/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Stylesheet
├── js/
│   └── main.js         # JavaScript for interactive elements
├── images/             # Image assets (uses remote images for demo)
├── .gitignore          # Git ignore file
└── netlify.toml        # Netlify configuration
```

## How to View Locally

Simply open the `index.html` file in any modern web browser to view the landing page.

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript (no frameworks)
- Font Awesome for icons
- Google Fonts (Roboto)
- Unsplash for demo images

## Brand Elements

- Brand Name: STRIDE
- Primary Color: #57a0d2 (a blue inspired by Planet Fitness but more premium)
- Secondary Color: #3c3c3c (dark gray for text)
- Accent Color: #fa5252 (for highlights)
- Typography: Roboto (clean, modern sans-serif font)
- Messaging: "Fitness For All" - emphasizing inclusivity while maintaining premium quality

## Deployment

### GitHub

To deploy to GitHub:

1. Create a new repository on GitHub
2. Initialize the local repository and connect it to GitHub:
   ```
   cd stride-fitness-brand
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```

### Netlify

To deploy to Netlify:

1. Sign up/Login to Netlify
2. Connect your GitHub repository
3. Configure the build settings:
   - Build command: (leave empty as this is a static site)
   - Publish directory: `/`
4. Deploy the site

Alternatively, you can use Netlify Drop by simply dragging and dropping the entire project folder onto the Netlify Drop area. 