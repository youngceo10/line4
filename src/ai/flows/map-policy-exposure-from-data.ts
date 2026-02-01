'use server';
/**
 * @fileOverview This file defines a Genkit flow for mapping policy exposure based on public data and user-uploaded documents.
 *
 * - mapPolicyExposureFromData - The main function to trigger the policy exposure mapping flow.
 * - MapPolicyExposureFromDataInput - The input type for the mapPolicyExposureFromData function.
 * - MapPolicyExposureFromDataOutput - The output type for the mapPolicyExposureFromData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MapPolicyExposureFromDataInputSchema = z.object({
  publicData: z.string().describe('Publicly available data relevant to policy exposure.'),
  userUploadedDocuments: z.array(z.string()).describe(
    'An array of data URIs, each representing a user-uploaded document. Each data URI must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
  ),
});
export type MapPolicyExposureFromDataInput = z.infer<typeof MapPolicyExposureFromDataInputSchema>;

const MapPolicyExposureFromDataOutputSchema = z.object({
  policyExposureMap: z.string().describe('A comprehensive map of policy exposure, including potential risks and impacts.'),
});
export type MapPolicyExposureFromDataOutput = z.infer<typeof MapPolicyExposureFromDataOutputSchema>;

export async function mapPolicyExposureFromData(
  input: MapPolicyExposureFromDataInput
): Promise<MapPolicyExposureFromDataOutput> {
  return mapPolicyExposureFromDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'mapPolicyExposureFromDataPrompt',
  input: {schema: MapPolicyExposureFromDataInputSchema},
  output: {schema: MapPolicyExposureFromDataOutputSchema},
  prompt: `You are an AI assistant specializing in mapping policy exposure based on provided data.\n\nYou will receive public data and user-uploaded documents. Analyze these sources to identify potential policy exposures, risks, and impacts.\n\nSynthesize a comprehensive policy exposure map that incorporates findings from both public data and user-uploaded documents. Consider all the user provided data when creating the policy exposure map. Ensure that the map clearly outlines the identified exposures and their potential consequences.\n\nHere's the public data:\n{{{publicData}}}\n\nHere are the user-uploaded documents:\n{{#each userUploadedDocuments}}- {{media url=this}}\n{{/each}}\n\nGenerate a comprehensive policy exposure map based on the analysis. Return the map. Focus on returning the policyExposureMap in the format described in the schema. Be concise and to the point.\n`,
});

const mapPolicyExposureFromDataFlow = ai.defineFlow(
  {
    name: 'mapPolicyExposureFromDataFlow',
    inputSchema: MapPolicyExposureFromDataInputSchema,
    outputSchema: MapPolicyExposureFromDataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
