# Line⁴

Line⁴ provides transparent, real-time visibility into AI safety assessments across major labs. It tracks the capabilities of frontier models against their own safety thresholds—in real-time.

This repository contains the source code for the Line⁴ landing page.

**Live Dashboard:** [ai-red-line-tracker.streamlit.app](https://ai-red-line-tracker.streamlit.app/)

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **UI:** [React](https://react.dev/) with [ShadCN UI](https://ui.shadcn.com/) and [Tailwind CSS](https://tailwindcss.com/)
*   **Deployment:** [Vercel](https://vercel.com/)

## Getting Started

To get the development server running:

```bash
npm install
npm run dev
```

This will start the Next.js development server, typically on [http://localhost:9002](http://localhost:9002).

### Building for Production

To create a production build:

```bash
npm run build
```

This will generate an optimized production build in the `.next` folder.

## Deployment

This application is ready to be deployed on [Vercel](https://vercel.com/). Simply connect your GitHub repository to a new Vercel project.
