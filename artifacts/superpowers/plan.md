## Goal

To build a luxury minimalist architecture portfolio website tailored for acquiring high-value commissions. The design follows an intentional "Quiet Confidence / Luxury Editorial" aesthetic, strictly avoiding generic UI templates, and utilizing an asymmetric editorial grid for the project gallery.

### Frontend Design Snapshot

**Aesthetic Name**: Quiet Confidence / Luxury Editorial
**DFII Score**: 13 (High impact and fit for an architecture studio; highly feasible with React/Tailwind/Framer Motion; low consistency risk if the grid system is well-defined).
**Differentiation Anchor**: "If this were screenshotted with the logo removed, how would someone recognize it?" -> By its strict adherence to a desaturated, high-contrast image treatment set against a warm stone/cream background, and the specific asymmetric rhythm of its photography layout. This avoids generic UI by doing away with symmetrical card grids and standard white/blue corporate palettes, favoring atmospheric spacing and timeless serif typography.
**Design System Snapshot**:

- **Fonts**: Primary Display: Playfair Display or Cinzel (Serif - Timeless/Editorial). Body: Inter or Geist (Sans-serif - clean, minimal).
- **Color Variables**: --bg-cream (#F9F8F6), --text-stone (#2C2C2A), --accent-muted-gold (#B89C65), --surface-warm-gray (#E5E4E2).
- **Spacing Rhythm**: Airy, utilizing large rem values (e.g., py-24, gap-16) to let content breathe.
- **Motion Philosophy**: Buttery-smooth, slow-easing reveal animations (Framer Motion) exclusively on scroll entry; no bouncy or abrupt interactive motion.

## Assumptions

- We are building a Single Page Application using Next.js (App Router), Tailwind CSS, and Framer Motion.
- The prev_proj folder contains valid image files rendering architectural projects (jpg/png/webp) and will be copied to the public directory.
- "Start a Project" is a smooth scroll to the contact section at the bottom of the page.
- The project will be initialized starting from a blank directory.

## Plan

1. **Step 1: Setup Next.js Project & Dependencies**
   - **Files**: /
   - **Change**: Initialize Next.js app with Tailwind CSS. Install ramer-motion and lucide-react. Clean up default boilerplate.
   - **Verify**:
     pm run dev and ensure localhost:3000 loads a blank page without errors.

2. **Step 2: Configure Design System & Global Styles**
   - **Files**: ailwind.config.ts, pp/globals.css, pp/layout.tsx
   - **Change**: Define custom color palette (cream, stone, warm gray, muted gold). Import Google Fonts (Playfair Display, Inter). Apply background and text colors to body.
   - **Verify**: Inspect ailwind.config.ts matches the palette. Apply a test heading/paragraph to check font loading and colors.

3. **Step 3: Setup Assets & Project Data**
   - **Files**: public/images/projects/, data/projects.ts
   - **Change**: Copy selected prev_proj images into the public folder (Hero: `1_upscale01.png`. Gallery: `EXTERIOR PERSP NIGHT.png`, `EXTERIOR PERSP.png`, `RECEPTION INTERIOR_upscale01.png`, `SITTING AREA.png`, `LIBRARY.png`, `eco trail_upscale01.png`, `AERIAL2.png`). Create a typed data structure for projects including title, category (Residential, Commercial, Urban, Interior), and image paths.
   - **Verify**: Check that images are accessible via Next.js Image component and the data array logs correctly.

4. **Step 4: Build Hero Section & Layout Shell**
   - **Files**: components/layout/Navbar.tsx, components/sections/Hero.tsx, pp/page.tsx
   - **Change**: Create a minimal sticky navbar (Logo + "Start a Project" CTA). Add full-screen image hero with a desaturated/high-contrast overlay, studio name, and memorable tagline.
   - **Verify**: Ensure the hero occupies 100vh and the aesthetic styling applies correctly.

5. **Step 5: Create Asymmetric Project Gallery**
   - **Files**: components/sections/Gallery.tsx, components/ui/ProjectCard.tsx
   - **Change**: Build an asymmetric CSS Grid displaying project cards (location + type). Implement category filter buttons. Apply grayscale/contrast filters to images on idle. Add Framer Motion staggered reveal.
   - **Verify**: Click category filters and ensure only matching projects display. Verify grid layout breaks down nicely on mobile screens.

6. **Step 6: Informational Sections (About, Services, Process, Testimonials)**
   - **Files**: components/sections/About.tsx, components/sections/Services.tsx, components/sections/Process.tsx, components/sections/Testimonials.tsx
   - **Change**: Code out the About (short design-thinking focus), Services (one line per specialty), Process (4-5 steps), and Testimonials + Credibility markers (years experience).
   - **Verify**: Confirm spacing is luxurious (large vertical paddings) and typography matches the editorial aesthetic.

7. **Step 7: Contact / Inquiry Section**
   - **Files**: components/sections/Contact.tsx
   - **Change**: Add a minimal friction inquiry section at the bottom, finishing with a large "Start a Project" CTA block. Include Aaron Galang's contact information: @mt.eiji (Instagram) and galang.aaronguillerd@gmail.com.
   - **Verify**: Ensure visual balance and verify the CTA scrolls or focuses the correct element.

## Risks & mitigations

- **Risk**: Asymmetric grid breaks or looks chaotic on mobile screens.
  - **Mitigation**: Switch to a single-column layout with consistent vertical rhythm on screens smaller than md (768px).
- **Risk**: Image filters (desaturate, high-contrast) make some specific renders look muddy.
  - **Mitigation**: Stick to a globally safe filter combination (e.g., grayscale-[0.7] contrast-125) that enhances architectural forms, with pure CSS.
- **Risk**: Framer Motion animations cause scroll jank.
  - **Mitigation**: Use whileInView with once: true and hardware-accelerated properties (transform, opacity) exclusively.

## Rollback plan

- If a specific package (like Framer Motion) causes build issues, remove it and use standard CSS transitions.
- If the layout becomes too complex, revert to the last working Git commit and simplify the gallery grid layout.
