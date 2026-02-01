"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { mapPolicyExposureFromData, MapPolicyExposureFromDataOutput } from "@/ai/flows/map-policy-exposure-from-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Loader2, Upload } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  publicData: z.string().min(10, { message: "Public data must be at least 10 characters." }),
  documents: z.custom<FileList>().optional(),
});

export default function ExposureMapping() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<MapPolicyExposureFromDataOutput | null>(null);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      publicData: "",
    },
  });
  
  const fileRef = form.register("documents");

  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      let userUploadedDocuments: string[] = [];
      if (values.documents && values.documents.length > 0) {
        userUploadedDocuments = await Promise.all(
          Array.from(values.documents).map(file => readFileAsDataURL(file))
        );
      }
      
      const res = await mapPolicyExposureFromData({
        publicData: values.publicData,
        userUploadedDocuments,
      });
      setResult(res);
    } catch (e) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred while mapping policy exposure. Please try again.",
      });
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
        const files = Array.from(event.target.files);
        setFileNames(files.map(file => file.name));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Policy Exposure Mapping</CardTitle>
        <CardDescription>
          Provide public data and upload proprietary documents to map your organization's policy exposure.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="publicData"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Public Data</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Paste relevant public data, news articles, or reports here..." {...field} rows={6}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="documents"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Proprietary Documents</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input type="file" multiple {...fileRef} onChange={handleFileChange} className="pl-10 h-auto py-2" />
                      <Upload className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>
                  </FormControl>
                  <FormMessage />
                  {fileNames.length > 0 && (
                    <div className="text-sm text-muted-foreground mt-2">
                      Selected files: {fileNames.join(", ")}
                    </div>
                  )}
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Map Exposure
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

function ResultDisplay({ result }: { result: MapPolicyExposureFromDataOutput }) {
  return (
    <div>
      <h3 className="text-lg font-semibold font-headline">Policy Exposure Map</h3>
      <p className="text-muted-foreground whitespace-pre-wrap mt-2">{result.policyExposureMap}</p>
    </div>
  );
}
