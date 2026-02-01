"use client"

import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldAlert, ArrowDown } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from "recharts";
import { FadeIn } from "@/components/ui/fade-in";

const processData = [
    {
        value: "normalize",
        number: "01",
        title: "Normalize the Noise",
        description: "We pull from official model cards and safety evaluations, ingesting disparate frameworks like Anthropic's 'RSPs' and OpenAI's 'Preparedness Framework.' Our system then standardizes everything into a single, unified risk score. No more jargon, just a clear signal.",
        visual: <LearnVisual />,
    },
    {
        value: "watch",
        number: "02",
        title: "Watch the Curve",
        description: "Using our analysis APIs, we track the velocity of AI capabilities in real-time across the four critical risk dimensions: CBRN, cyber offense, autonomous replication, and deceptive alignment. Line⁴ doesn't just show a snapshot; it shows the trendline, signaling when a model is accelerating towards a red line.",
        visual: <WatchVisual />,
    },
    {
        value: "alert",
        number: "03",
        title: "Alert the Network",
        description: "A red line is just a line until it's crossed. When a threshold is breached, Line⁴ contextualizes the event and provides an instant evidence file, giving regulators and internal teams the concrete data they need to act.",
        visual: <DeepVisual />,
    }
]

function LearnVisual() {
    return (
        <Card className="max-w-md mx-auto bg-card shadow-xl rounded-lg p-6 border">
            <h4 className="font-normal font-headline text-center mb-4 text-card-foreground">Unified Risk Standard</h4>
            <div className="flex flex-col sm:flex-row justify-around items-center text-center gap-4">
                <div className="space-y-2 text-left">
                    <div className="font-mono text-xs p-2 bg-muted rounded">
                        <p className="font-semibold text-muted-foreground">Anthropic</p>
                        <p className="text-foreground">ASL-3</p>
                    </div>
                    <div className="font-mono text-xs p-2 bg-muted rounded">
                         <p className="font-semibold text-muted-foreground">OpenAI</p>
                         <p className="text-foreground">Severity 4</p>
                    </div>
                     <div className="font-mono text-xs p-2 bg-muted rounded">
                         <p className="font-semibold text-muted-foreground">DeepMind</p>
                         <p className="text-foreground">CCL-5</p>
                    </div>
                </div>
                <ArrowDown className="h-8 w-8 text-muted-foreground shrink-0 sm:hidden" />
                <ArrowRight className="h-8 w-8 text-muted-foreground shrink-0 hidden sm:block" />
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                     <p className="font-mono text-lg text-destructive font-bold">RISK-4</p>
                </div>
            </div>
        </Card>
    )
}

function WatchVisual() {
    const data = [
        { name: 'Jan', capabilities: 10, threshold: 80 },
        { name: 'Feb', capabilities: 20, threshold: 80 },
        { name: 'Mar', capabilities: 35, threshold: 80 },
        { name: 'Apr', capabilities: 55, threshold: 80 },
        { name: 'May', capabilities: 75, threshold: 80 },
    ];
    return (
        <div className="h-72 sm:h-80 w-full p-4 bg-card rounded-lg shadow-xl border">
             <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{
                        backgroundColor: 'hsl(var(--background) / 0.8)',
                        backdropFilter: 'blur(2px)',
                        borderRadius: '0.5rem',
                        border: '1px solid hsl(var(--border))'
                    }}/>
                    <Line type="monotone" dataKey="capabilities" stroke="hsl(var(--primary))" strokeWidth={2} name="Capability" animationDuration={1500} />
                    <Line type="monotone" dataKey="threshold" stroke="hsl(var(--destructive))" strokeDasharray="5 5" name="Red Line" animationDuration={1500} animationDelay={500} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

function DeepVisual() {
    return (
        <Card className="max-w-sm mx-auto bg-card/80 backdrop-blur-sm shadow-xl rounded-lg p-6 text-center border">
            <div className="w-16 h-16 bg-destructive/10 rounded-full mx-auto mb-4 flex items-center justify-center border border-destructive/20">
                <ShieldAlert className="h-8 w-8 text-destructive" />
            </div>
            <h4 className="font-normal font-headline mb-1 text-card-foreground">Red Line Crossed</h4>
            <p className="font-semibold text-destructive mb-2">Cyber Offense Capabilities</p>
            <p className="text-sm text-muted-foreground mb-4">Evidence file automatically generated and dispatched to regulatory watchdogs.</p>
            <Button>View Evidence</Button>
        </Card>
    )
}


export default function Process() {
    const [activeTab, setActiveTab] = useState(processData[0].value);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const activeIndex = processData.findIndex(p => p.value === activeTab);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setActiveTab(currentTab => {
                const currentIndex = processData.findIndex(p => p.value === currentTab);
                const nextIndex = (currentIndex + 1) % processData.length;
                return processData[nextIndex].value;
            });
        }, 5000); // Change tab every 5 seconds

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);
    
    return (
        <section className="py-20 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <FadeIn className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-normal font-headline">Our Process</h2>
                    <div className="mt-4 mx-auto w-24 h-px bg-border"></div>
                </FadeIn>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-12 sm:mt-16">
                     <div className="relative border-b">
                        <TabsList className="grid w-full grid-cols-3 bg-transparent p-0 h-auto rounded-none justify-items-stretch">
                            {processData.map(tab => (
                                <TabsTrigger key={tab.value} value={tab.value} className="text-center sm:text-left p-2 sm:p-4 data-[state=active]:shadow-none data-[state=active]:bg-transparent rounded-none focus:ring-0 focus:shadow-none">
                                    <h3 className="text-xs sm:text-base font-headline font-semibold transition-colors text-muted-foreground data-[state=active]:text-foreground">
                                        <span className="hidden sm:inline-block mr-2 opacity-50">{tab.number}</span>
                                        <span className="hidden sm:inline-block mr-2">&mdash;</span>
                                        {tab.title}
                                    </h3>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                         <div className="absolute bottom-[-1px] left-0 h-0.5 bg-primary transition-transform duration-500 ease-in-out" 
                            style={{ 
                                width: `${100 / processData.length}%`,
                                transform: `translateX(${activeIndex * 100}%)`
                            }}
                        />
                    </div>
                    
                    {processData.map(tab => (
                        <TabsContent key={tab.value} value={tab.value} className="mt-12 min-h-0 md:min-h-[420px]">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <FadeIn>
                                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg pt-4">
                                        {tab.description}
                                    </p>
                                </FadeIn>
                                <FadeIn delay={200}>
                                    <div className="flex items-center justify-center">
                                        {tab.visual}
                                    </div>
                                </FadeIn>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}
