"use client"

import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldAlert } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from "recharts";

const processData = [
    {
        value: "normalize",
        number: "01",
        title: "Normalize the Noise",
        description: "Anthropic has 'Responsible Scaling Policies.' OpenAI has a 'Preparedness Framework.' DeepMind has 'Critical Capability Levels.' We ingest and standardize these disparate safety frameworks into a single, unified risk standard. No more jargon, just a clear signal.",
        visual: <LearnVisual />,
    },
    {
        value: "watch",
        number: "02",
        title: "Watch the Curve",
        description: "Track the velocity of AI capabilities in real-time across the four critical risk dimensions: CBRN, cyber offense, autonomous replication, and deceptive alignment. Line⁴ doesn't just show a snapshot; it shows the trendline, signaling when a model is accelerating towards a red line.",
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
        <Card className="max-w-md mx-auto bg-white shadow-xl rounded-lg p-6">
            <h4 className="font-normal font-headline text-center mb-4">Unified Risk Standard</h4>
            <div className="flex justify-around items-center text-center">
                <div className="space-y-1">
                    <p className="font-mono text-sm p-2 bg-gray-100 rounded">ASL-3</p>
                    <p className="font-mono text-sm p-2 bg-gray-100 rounded">Critical</p>
                    <p className="font-mono text-sm p-2 bg-gray-100 rounded">CCL-5</p>
                </div>
                <ArrowRight className="h-8 w-8 text-gray-400 shrink-0 mx-4" />
                <div>
                     <p className="font-mono text-lg p-4 bg-red-100 text-red-700 rounded-lg">RISK-4</p>
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
        <div className="h-80 w-full p-4 bg-white rounded-lg shadow-xl">
             <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(2px)',
                        borderRadius: '0.5rem',
                        border: '1px solid hsl(var(--border))'
                    }}/>
                    <Line type="monotone" dataKey="capabilities" stroke="hsl(var(--primary))" strokeWidth={2} name="Capability" />
                    <Line type="monotone" dataKey="threshold" stroke="hsl(var(--destructive))" strokeDasharray="5 5" name="Red Line" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

function DeepVisual() {
    return (
        <Card className="max-w-sm mx-auto bg-white/30 backdrop-blur-sm shadow-xl rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <ShieldAlert className="h-8 w-8 text-red-600" />
            </div>
            <h4 className="font-normal font-headline mb-1">Threshold Breach</h4>
            <p className="text-sm text-muted-foreground mb-4">Evidence file generated.</p>
            <Button variant="secondary" className="bg-white">View Report</Button>
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
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-normal font-headline">Our Process</h2>
                    <div className="mt-4 mx-auto w-24 h-px bg-border"></div>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-16">
                     <div className="relative border-b">
                        <TabsList className="grid w-full grid-cols-3 bg-transparent p-0 h-auto rounded-none justify-items-stretch">
                            {processData.map(tab => (
                                <TabsTrigger key={tab.value} value={tab.value} className="text-left p-4 data-[state=active]:shadow-none data-[state=active]:bg-transparent rounded-none focus:ring-0 focus:shadow-none">
                                    <h3 className="text-base md:text-lg font-headline font-semibold transition-colors text-muted-foreground data-[state=active]:text-foreground">
                                        <span className="mr-2 opacity-50">{tab.number}</span>
                                        &mdash; {tab.title}
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
                        <TabsContent key={tab.value} value={tab.value} className="mt-12 min-h-[420px]">
                            <div className="grid md:grid-cols-2 gap-12 items-start">
                                <p className="text-muted-foreground leading-relaxed text-base md:text-lg pt-4">
                                    {tab.description}
                                </p>
                                <div className="flex items-center justify-center">
                                    {tab.visual}
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}
