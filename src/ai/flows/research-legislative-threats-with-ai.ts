'use server';

/**
 * @fileOverview An AI agent that researches potential legislative threats.
 *
 * - researchLegislativeThreatsWithAI - A function that initiates the legislative threat research process.
 * - ResearchLegislativeThreatsWithAIInput - The input type for the researchLegislativeThreatsWithAI function.
 * - ResearchLegislativeThreatsWithAIOutput - The return type for the researchLegislativeThreatsWithAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResearchLegislativeThreatsWithAIInputSchema = z.object({
  query: z.string().describe('The search query for legislative threats.'),
});
export type ResearchLegislativeThreatsWithAIInput = z.infer<typeof ResearchLegislativeThreatsWithAIInputSchema>;

const ResearchLegislativeThreatsWithAIOutputSchema = z.object({
  summary: z.string().describe('A summary of potential legislative threats.'),
  relevantLegislations: z.array(z.string()).describe('A list of relevant legislations related to the threats.'),
  riskAssessment: z.string().describe('An assessment of the risks associated with the identified threats.'),
});
export type ResearchLegislativeThreatsWithAIOutput = z.infer<typeof ResearchLegislativeThreatsWithAIOutputSchema>;

export async function researchLegislativeThreatsWithAI(input: ResearchLegislativeThreatsWithAIInput): Promise<ResearchLegislativeThreatsWithAIOutput> {
  return researchLegislativeThreatsWithAIFlow(input);
}

const prompt = ai.definePrompt({
  name: 'researchLegislativeThreatsWithAIPrompt',
  input: {schema: ResearchLegislativeThreatsWithAIInputSchema},
  output: {schema: ResearchLegislativeThreatsWithAIOutputSchema},
  prompt: `You are an AI agent specializing in identifying potential legislative threats. Research the following query and provide a summary of potential threats, list relevant legislations, and assess the risks.

Query: {{{query}}}

Summary:
Relevant Legislations:
Risk Assessment:`,
});

const researchLegislativeThreatsWithAIFlow = ai.defineFlow(
  {
    name: 'researchLegislativeThreatsWithAIFlow',
    inputSchema: ResearchLegislativeThreatsWithAIInputSchema,
    outputSchema: ResearchLegislativeThreatsWithAIOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
