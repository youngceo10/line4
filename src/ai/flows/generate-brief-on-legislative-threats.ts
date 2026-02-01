'use server';
/**
 * @fileOverview Generates briefs on legislative threats, including financials, SEC filings, and press releases.
 *
 * - generateBrief - A function that generates a brief on a legislative threat.
 * - GenerateBriefInput - The input type for the generateBrief function.
 * - GenerateBriefOutput - The return type for the generateBrief function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBriefInputSchema = z.object({
  legislativeThreat: z.string().describe('Description of the legislative threat.'),
  relevantFinancials: z.string().optional().describe('Relevant financial data.'),
  secFilings: z.string().optional().describe('Relevant SEC filings.'),
  pressReleases: z.string().optional().describe('Relevant press releases.'),
});
export type GenerateBriefInput = z.infer<typeof GenerateBriefInputSchema>;

const GenerateBriefOutputSchema = z.object({
  brief: z.string().describe('A comprehensive brief on the legislative threat.'),
});
export type GenerateBriefOutput = z.infer<typeof GenerateBriefOutputSchema>;

export async function generateBrief(input: GenerateBriefInput): Promise<GenerateBriefOutput> {
  return generateBriefFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBriefPrompt',
  input: {schema: GenerateBriefInputSchema},
  output: {schema: GenerateBriefOutputSchema},
  prompt: `You are an AI assistant specializing in generating briefs on legislative threats.

  Based on the provided information, create a comprehensive brief that includes:
  - A summary of the legislative threat.
  - Analysis of potential impacts, using financials, SEC filings, and press releases.

  Legislative Threat: {{{legislativeThreat}}}
  Relevant Financials: {{{relevantFinancials}}}
  SEC Filings: {{{secFilings}}}
  Press Releases: {{{pressReleases}}}
  `,
});

const generateBriefFlow = ai.defineFlow(
  {
    name: 'generateBriefFlow',
    inputSchema: GenerateBriefInputSchema,
    outputSchema: GenerateBriefOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
