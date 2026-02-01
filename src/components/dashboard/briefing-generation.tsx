"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { generateBrief, GenerateBriefOutput } from "@/ai/flows/generate-brief-on-legislative-threats";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  legislativeThreat: z.string().min(10, { message: "Description must be at least 10 characters." }),
  relevantFinancials: z.string().optional(),
  secFilings: z.string().optional(),
  pressReleases: z.string().optional(),
});

export default function BriefingGeneration() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateBriefOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      legislativeThreat: "",
      relevantFinancials: "",
      secFilings: "",
      pressReleases: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const res = await generateBrief(values);
      setResult(res);
    } catch (e) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred while generating the brief. Please try again.",
      });
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Briefing Generation</CardTitle>
        <CardDescription>
          Generate a comprehensive brief on a legislative threat, optionally including financial data, SEC filings, and press releases.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="legislativeThreat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Legislative Threat</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe the legislative threat..." {...field} rows={4} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="relevantFinancials"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Relevant Financials (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Paste financial data..." {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="secFilings"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SEC Filings (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Paste SEC filing excerpts..." {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pressReleases"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Press Releases (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Paste press releases..." {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Generate Brief
            </Button>
          </CardFooter>
        </form>
      </Form>
      
      {(loading || result) && (
        <>
          <Separator className="my-4" />
          <CardContent>
            {loading && <LoadingState />}
            {result && <ResultDisplay result={result} />}
          </CardContent>
        </>
      )}
    </Card>
  );
}

function LoadingState() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-6 w-1/3 mb-2" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full mt-2" />
      <Skeleton className="h-4 w-5/6 mt-2" />
      <Skeleton className="h-4 w-full mt-2" />
      <Skeleton className="h-4 w-3/4 mt-2" />
    </div>
  )
}

function ResultDisplay({ result }: { result: GenerateBriefOutput }) {
  return (
    <div>
      <h3 className="text-lg font-semibold font-headline">Generated Brief</h3>
      <div className="text-muted-foreground whitespace-pre-wrap mt-2">
        {result.brief}
      </div>
    </div>
  );
}
