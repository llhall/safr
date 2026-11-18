# Sunshine Alliance for First Responders

Five-page, build-free GitHub Pages website. Deep blue, polished brass and badge-inspired accents. The menu is visibly listed on the left, including on phones. No flashing lights or moving people.

## Pages
- index.html: Home, overview, research context and newsletter status.
- about.html: About, mission and alliance work.
- people.html: Executive Board, Board Members, Meg Ross portrait and alliance organizations.
- support.html: Financial/organizational support, involvement and general contact previews.
- resources.html: Resource categories, Hope Line and nonurgent-help form preview.

## Upload to llhall/safr
1. Download a backup of the existing repository before making changes. Ideally, create a new branch first so the changes can be reviewed before merging into the branch that publishes the website.
2. Extract this ZIP on your computer. Upload the CONTENTS to the root of the `safr` repository. `index.html` must sit at the repository root, not inside a `safr-github-files` or `dist` folder. Keep the `assets` folder and its files together. Do not upload only the ZIP itself.
3. Replace the existing five same-named HTML files and `script.js`; add/replace `alliance.css` and the included assets. Include `.nojekyll` if your upload method shows hidden files. This plain HTML site does not require Node, npm, a build command or a server-side application.
4. To leave exactly five pages, remove these obsolete root files after backing them up: `our-work.html`, `get-help.html`, `get-involved.html`, `contact.html`, `news.html`, `privacy.html`, `accessibility.html`. Their relevant material has been consolidated into the five pages. Old direct links to removed filenames will no longer work; if you need those old URLs preserved, plan redirects before deleting them.
5. Old stylesheets `styles.css`, `sunshine.css`, `institutional.css` and old motion media are not used by this package. They can be removed after backup. Do not delete unrelated repository configuration, a custom-domain CNAME, workflows or files you still need.
6. Confirm the repository's existing Pages configuration publishes the branch/root you updated. Commit or merge when ready to make these changes visible on the existing public site. The expected homepage is https://llhall.github.io/safr/ . Refresh after GitHub finishes publishing.
7. Check all five navigation links, phone/mail links, images and a narrow mobile window on the published website.

## Important before public launch
- These files are a review-stage design, not a fully operational intake/donation system. The top review banner is informational ONLY. It does not restrict access. GitHub Pages publication can make the content publicly accessible.
- Contact, partnership and nonurgent-help forms are deliberately disabled. They do not submit or store responses. Do not simply enable the fields: connect and test an approved form service, routing, privacy/security process and response handling first.
- Newsletter signup is not connected to Constant Contact. Donation/payment functions are not connected. No payment or tax-deductibility claims have been invented.
- Board names, supplied email addresses and Meg Ross's portrait are included. Confirm these are approved for public display before committing to the publishing branch.
- Review retained historical research/statistics, current program/service-area wording and partner participation. Draft placeholders identify information not yet supplied. The requested draft policy sections and their navigation links have been removed throughout the website. Finalize appropriate policies before activating data collection.
- The page banner says PRIVATE DESIGN REVIEW because this is the review version. Before an approved public launch, remove the `.review-strip` element from each HTML file and resolve other draft notices as appropriate. Removing a banner does not activate forms or finalize content.
- The provided Sunshine Alliance logo is unchanged. `assets/favicon.svg` is a simple sun icon. All required visual assets are included; there are no remote font or script dependencies.

## Local preview
Open `index.html` in a browser after extraction, or serve this folder using your usual local static web server. Navigation and asset paths are relative, so the files work under the `/safr/` GitHub Pages path.

## Editing
Edit page text in the corresponding HTML file. `alliance.css` controls the shared visual design and responsive layout. `script.js` marks the active page, updates the year and prevents prototype forms from submitting. Historical menu code in the script is inert because the five-page layout has no menu toggle.

## Verified
Desktop and phone-size layouts inspected. Five-page navigation tested with visible left menu, no horizontal overflow at the tested phone width, and no video. Local asset paths and section anchors validated. All intake fields remain disabled. This package contains no credentials, Site hosting configuration or Git history.
