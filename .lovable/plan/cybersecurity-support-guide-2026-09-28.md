# Cybersecurity Support Guide

## Goal
Build the uploaded brief as a single, responsive educational support page for frightened or non-technical Windows users. The page will prioritize immediate recovery steps, calm language, and unmistakably simulated scam examples.

## Page structure
- Add a calm dark-navy introduction with direct links to emergency help and the first example.
- Place a prominent four-point safety warning and keyboard escape sequence immediately below it.
- Build a sticky desktop contents rail and compact expandable mobile contents menu.
- Organize the long guide into scannable sections: recognizing fake alerts, understanding browser tricks, safely closing the page, stopping notifications, independent Windows scanning, incident severity, remote access/payment recovery, FAQs, family safety, checklist, and official resources.
- Keep each educational illustration beside the explanation it supports rather than grouping examples in a gallery.

## Visual and interaction design
- Use a restrained white/light-gray, navy, blue, red-warning, and green-safe token system with large readable type, strong contrast, compact rounded corners, and subtle shadows.
- Create clearly illustrative browser, fake alert, Task Manager, notification settings, Windows Security, Event Viewer, and terminal mockups in the page itself.
- Label every simulated scam visual “SIMULATED EXAMPLE — NOT A REAL MICROSOFT ALERT,” use only the fictional number `+1 (000) 000-0000`, and use reserved example domains.
- Add accessible accordions, smooth anchor navigation, a print checklist action, and a floating return-to-emergency control after scrolling.

## Safety and content safeguards
- No telephone links or functional fake-support controls.
- The real page will never visually masquerade as a Microsoft warning.
- Avoid claims that seeing a webpage proves infection; clearly distinguish browser-only incidents from higher-risk actions.
- Link only to verified official Microsoft support pages; omit any uncertain destination rather than guessing.
- Add the required independence and trademark disclaimer.

## Technical details
- Implement the experience at `/` using React and semantic HTML.
- Define all colors, typography, shadows, and reusable visual treatments as semantic Tailwind v4 tokens in the global design system.
- Use lightweight CSS transitions only, respect reduced-motion preferences, and add print-specific styling for the checklist.
- Add unique page metadata and remove template branding.
- Validate the final page at desktop and mobile widths, including navigation, accordions, anchor links, and printing behavior.
