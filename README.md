# Line⁴

Line⁴ aggregates official safety evaluations across three frameworks to provide transparent, real-time visibility into AI safety assessments across major labs. The dashboard tracks risks across four critical dimensions: CBRN proliferation, cyber offense capabilities, autonomous replication, and deceptive alignment.

This is a Next.js application built with Firebase Studio.

## Overview

*   **Normalize the Noise:** Ingest and standardize safety frameworks from major AI labs into a unified risk standard.
*   **Watch the Curve:** Track the velocity of AI capabilities in real-time to signal when a model's abilities are approaching a critical threshold.
*   **Alert the Network:** Contextualize threshold breaches and provide instant evidence files for regulators and internal teams.

**Data Source:** Real assessments extracted from official lab System Cards
- Anthropic: Responsible Scaling Policy (RSP) with Automation Safety Levels (ASL)
- OpenAI: Preparedness Framework with severity assessments
- DeepMind: Frontier Safety Framework with Critical Capability Levels (CCL)

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
