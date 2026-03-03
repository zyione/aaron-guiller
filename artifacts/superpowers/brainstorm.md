## Goal
To design and build an architecture portfolio website that embodies "quiet confidence" and luxury minimalist branding. The primary objective is to acquire high-value commissions by presenting projects in an elegant, editorial-style asymmetric grid, strictly adhering to a warm neutral palette and refined typography.

## Constraints
* **Visual Aesthetic**: Must maintain a high-end design magazine feel (clean, luxury, minimal).
* **Color Palette**: Restricted to warm neutrals (cream, stone, warm gray) and muted gold accents.
* **Typography**: Serif display font paired with a clean sans-serif body font. 
* **Photography**: Images from the prev_proj folder must be presented with a consistent desaturated, high-contrast treatment.
* **Structure & Content**: Follow the designated sections strictly (Hero, Gallery, About, Services, Process, Contact).
* **Gallery Specifications**: Asymmetric editorial grid, filterable by category, with cards displaying location and project type.
* **Credibility**: Must include visible markers (years of experience / project count) and 1–2 short testimonials.
* **Conversion**: "Start a Project" CTA must be clear and persistent with minimal friction on contact.

## Known context
* The client specializes in four distinct architectural pillars: Residential / Homes, Commercial / Office, Urban / Public Spaces, Interior Design.
* Renders of actual prior projects are stored locally in the prev_proj folder and need to be curated for a cohesive mood and composition.
* The focus is exclusively on design thinking and portfolio strength rather than personal biography.

## Risks
* **Image Unity**: Depending on the variety of renders in prev_proj, applying a single CSS-based "desaturated, high-contrast" treatment might result in mixed visual quality. Pre-processing image assets might be required.
* **Asymmetric Grid Scalability**: Ensuring an asymmetric editorial gallery grid collapses gracefully on mobile devices without losing its high-end feel can be challenging and requires meticulous responsive design.
* **Vibe Mismatch**: Minimalist "quiet" designs walk a fine line between looking luxurious and feeling empty/unfinished. Executing pristine spacing, typography scaling, and subtle micro-interactions will make or break the design.

## Options (2–4)
1. **Single-Page Application (React/Next.js + Tailwind CSS + Framer Motion)**: A cohesive, smooth-scrolling architecture utilizing modern UI libraries. The asymmetric grid can be securely crafted with CSS Grid, and Framer Motion can provide the subtle, buttery-smooth reveal animations expected of high-end portfolios. Tailwind ensures the strict color palette is centralized and maintained. Image filtering is handled via CSS classes.
2. **Vanilla HTML/CSS/JS + GSAP**: Build an ultra-lightweight, bespoke site without a frontend framework. This option focuses purely on layout mastery (native CSS Grid for the editorial layout) and high-performance scroll animations using GSAP. It perfectly fits the "minimal" ethos underneath the hood as well but might increase the development timeline for interactive elements like the filterable gallery.
3. **Static Site Generator (Astro + Vanilla CSS)**: Provides the component-based developer experience of React with zero-javascript overhead for non-interactive elements, maximizing performance. Interactive islands handle just the project filtering and the "Start a Project" contact modal.

## Recommendation
**Option 1 (React/Next.js + Tailwind CSS + Framer Motion)** is highly recommended. It allows for the rapid creation of the complex filterable asymmetric grid while providing excellent tools (Framer Motion) for the subtle, luxury micro-interactions that elevate a site from "standard" to "editorial magazine." We can manage the image treatments reliably with Tailwind's built-in backdrop/filter utilities (grayscale contrast-125 saturate-50).

## Acceptance criteria
- [ ] A Hero section containing a full-screen curated image, studio name, and single tagline.
- [ ] A functional, filterable Project Gallery using an asymmetric layout.
- [ ] Gallery project cards explicitly list both the project location and type.
- [ ] Render images dynamically or statically receive the requested desaturated, high-contrast styling.
- [ ] "About / Philosophy", "Services" (brief list), and "Process" (4-5 steps) sections are accurately populated.
- [ ] 1-2 testimonials and a clear credibility marker (experience/project count) added to the layout.
- [ ] A distinct, low-friction "Start a Project" CTA is easily accessible throughout the user journey.
- [ ] Color palette strictly uses cream, stone, warm gray, and muted gold.
- [ ] Typography implements a clear Serif display / Sans-serif body pairing.
