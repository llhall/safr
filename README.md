# SAFR Website

Static GitHub Pages website for the **Suncoast Alliance for First Responders (SAFR)** and the **First Responder Hope Line**.

## Included pages

- Home
- About Us
- People & Alliance
- Our Work
- Get Involved
- Support
- News
- Resources
- Get Help
- Contact
- Privacy
- Accessibility
- Custom 404 page

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload **the contents of this folder** to the root of the repository.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and the `/ (root)` folder.
7. Save and wait for GitHub to publish the site.

The temporary address will normally be:

`https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/`

## Important before public launch

The visual website is ready for GitHub Pages, but the following items still need to be connected or confirmed:

- Constant Contact newsletter form
- General contact form
- Get Involved form
- Nonurgent Get Help form
- Privacy and data-handling process for sensitive information
- Public administrative email, address, and social media links
- Campaign video link or file
- Current alliance membership and permission to display logos
- Legal donation recipient, tax language, and payment platform
- Formal mission, vision, history, governance, and leadership profiles
- Review of statistics and source wording
- Review of crisis, domestic-violence, confidentiality, and response-time language

The included forms intentionally **do not transmit information**. They display a message explaining that the form connection is pending.

## Main files

- `index.html` — homepage
- `styles.css` — all visual styling
- `script.js` — mobile menu, active navigation, current year, and draft-form notices
- `assets/first-responder-hope-line-logo.png` — supplied logo
- `assets/favicon.svg` — browser icon

## Custom domain

Do not add a `CNAME` file until the final domain is known. After the GitHub Pages site works, add the domain in **Settings → Pages → Custom domain**, then update DNS with the domain provider.


## Live graphics update

The website now includes a reusable looping background video stored at:

- `assets/safr-live-graphic.mp4`

The script automatically injects this video into the major dark sections, page hero areas, newsletter blocks, support strip, and footer. Replace this MP4 later if you want a different motion background without rebuilding the page structure.


## July 2026 visual revision

- Rebuilt the homepage into a shorter, more concise layout.
- Reduced the size of the main “First to respond. Last to ask for help.” heading.
- Added compact quick-action links, program cards, statistics, alliance ticker, newsletter, and support panels.
- Replaced the short dark motion treatment with a brighter 30-second forward/reverse looping video.
- Applied the motion background to the homepage hero and the top banner on every interior page.
- Added a still poster fallback and reduced-motion support.


## Homepage motion update

The looping motion background now appears only in the homepage hero. Interior page banners use a static black/red graphic background. The homepage video background spans the full browser width.
