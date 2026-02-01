"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { researchLegislativeThreatsWithAI, ResearchLegislativeThreatsWithAIOutput } from "@/ai/flows/research-legislative-threats-with-ai";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  query: z.string().min(10, {
    message: "Query must be at least 10 characters.",
  }),
});

export default function ThreatResearch() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResearchLegislativeThreatsWithAIOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const res = await researchLegislativeThreatsWithAI({ query: values.query });
      setResult(res);
    } catch (e) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred while researching threats. Please try again.",
      });
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">AI-Driven Threat Research</CardTitle>
        <CardDescription>
          Enter a topic or a specific bill to research potential legislative threats using our AI agents.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Research Query</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 'impact of new data privacy laws on the tech industry'" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Research Threats
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
    <div className="space-y-6">
      <div>
        <Skeleton className="h-6 w-1/4 mb-2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full mt-2" />
        <Skeleton className="h-4 w-3/4 mt-2" />
      </div>
      <div>
        <Skeleton className="h-6 w-1/3 mb-2" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-1/2 mt-2" />
      </div>
      <div>
        <Skeleton className="h-6 w-1/4 mb-2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3 mt-2" />
      </div>
    </div>
  )
}


function ResultDisplay({ result }: { result: ResearchLegislativeThreatsWithAIOutput }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold font-headline">Summary</h3>
        <p className="text-muted-foreground mt-2">{result.summary}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold font-headline">Relevant Legislations</h3>
        <ul className="list-disc list-inside text-muted-foreground mt-2">
          {result.relevantLegislations.map((leg, index) => (
            <li key={index}>{leg}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold font-headline">Risk Assessment</h3>
        <p className="text-muted-foreground mt-2">{result.riskAssessment}</p>
      </div>
    </div>
  );
}
