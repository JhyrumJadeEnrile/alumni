# TUP MTI Alumni Association Website

GitHub Pages site for the TUP MTI Alumni Association.

---

## 📁 File Structure

```
tup-mti-alumni/
├── index.html                    ← Home page
├── css/
│   └── style.css                 ← All styles
├── js/
│   └── main.js                   ← Slideshow + nav logic
├── images/                       ← PUT ALL YOUR PHOTOS HERE
│   ├── commitee.jpg
│   ├── manufacturing.png
│   ├── technology.png
│   ├── food_and_beverages.png
│   ├── real_state.png
│   ├── construction.png
│   ├── health_care.png
│   ├── finance.png
│   ├── service.png
│   ├── retail_page.png
│   ├── project_1.jpg
│   ├── sportfest_2.jpg
│   ├── homecoming_1.jpg
│   ├── golf_club.jpg
│   ├── homecoming_2.jpg
│   └── homecoming_e.jpg
└── pages/
    ├── committees.html
    ├── events.html
    ├── business.html             ← Business directory hub
    ├── business-manufacturing.html
    ├── business-technology.html
    ├── business-food.html
    ├── business-realestate.html
    ├── business-construction.html
    ├── business-healthcare.html
    ├── business-finance.html
    ├── business-service.html
    ├── business-retail.html
    └── projects.html
```

---

## 🖼️ Adding Your Photos

1. Copy all your image files into the `images/` folder.
2. The filenames must match exactly what's used in the HTML (see above).
3. To add **more slideshow photos**, find the `<div class="slides-track">` in the page and add:
```html
<div class="slide-item">
  <img src="../images/YOUR_FILENAME.jpg" alt="Description"/>
  <div class="slide-caption">Your Caption Here</div>
</div>
```
4. Add a matching thumbnail in the `<div class="thumb-grid">`:
```html
<div class="thumb-item" data-for="SLIDESHOW_ID"><img src="../images/YOUR_FILENAME.jpg" alt="Thumb"/></div>
```
   The `data-for` must match the `data-slideshow` value of the slideshow above it.

---

## 📸 Adding Business Logos

Find `biz-logo-ph` placeholders and replace with:
```html
<img src="../images/LOGO_FILENAME.png" class="biz-logo" alt="Business Name Logo"/>
```

---

## 🚀 Deploying to GitHub Pages

1. Create a GitHub repo (e.g., `tup-mti-alumni`)
2. Upload all files keeping the same folder structure
3. Go to **Settings → Pages → Source → main branch / root**
4. Your site will be live at: `https://YOUR_USERNAME.github.io/tup-mti-alumni/`

---

## 🛠️ VSCode Tips

- Install the **Live Server** extension to preview locally (right-click `index.html` → Open with Live Server)
- All pages use relative paths (`../css/style.css`, `../js/main.js`) so they work on GitHub Pages
- To add a new business category: copy any `business-*.html` file, update the title/hero/biz-list content
- To add a new page to the nav: edit the `<ul class="nav-links">` in **every** HTML file (or use find & replace)
