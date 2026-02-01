# Global Risk Radar

Live Operational Status: Tracking catastrophic AI risk assessments across CBRN proliferation, cyber offense capabilities, autonomous replication, and deceptive alignment from 3 major safety labs.

This is a Next.js application built with Firebase Studio. Global Risk Radar turns abstract safety commitments into hard operational data by monitoring the edge of AI capability, 24/7.

## Overview

Global Risk Radar provides a suite of tools to:

*   **Normalize the Noise:** Ingest and standardize safety frameworks from major AI labs into a unified risk standard.
*   **Watch the Curve:** Track the velocity of AI capabilities in real-time to signal when a model's abilities are approaching a critical threshold.
*   **Alert the Network:** Contextualize threshold breaches and provide instant evidence files for regulators and internal teams.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **UI:** [React](https://react.dev/) with [ShadCN UI](https://ui.shadcn.com/) and [Tailwind CSS](https://tailwindcss.com/)
*   **Generative AI:** [Google's Genkit](https://firebase.google.com/docs/genkit)
*   **Deployment:** Firebase App Hosting

## Getting Started

To get the development server running:

```bash
npm run dev
```

This will start the Next.js development server, typically on [http://localhost:9002](http://localhost:9002).

### Building for Production

To create a production build:

```bash
npm run build
```

### Running in Production

To start the production server:

```bash
npm run start
```

## Project Structure

*   `src/app/`: The core Next.js application pages and layouts.
*   `src/components/`: Reusable React components.
*   `src/ai/`: Genkit flows for AI-driven features.
*   `src/lib/`: Utility functions and placeholder data.
*   `public/`: Static assets.
