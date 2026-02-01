"use client"

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ThumbsDown, ThumbsUp } from "lucide-react";

const processData = [
    {
        value: "learn",
        number: "01",
        title: "We learn you",
        description: "We pull everything public—financials, SEC filings, press releases, earnings calls, regulatory history—and map your policy exposure automatically. Then you upload what's proprietary: policy positions, compliance requirements, focus states, blind spots. Within minutes, we know what legislation could help you, hurt you, or blindside you. This becomes your always-on filter—every alert, every brief, built around your business. No noise. Just what matters.",
        visual: <LearnVisual />,
    },
    {
        value: "watch",
        number: "02",
        title: "We watch everything",
        description: "130,000 active bills. 7,383 state legislators. 535 members of Congress. Every amendment filed at midnight. Every hearing quietly scheduled for next week. Every fiscal analysis quietly published on a Friday afternoon. We deploy AI agents trained like policy consultants to watch all of it, 24/7, 365. You never have to outsource your thinking to a consultant who bills you to learn your industry. We already know, and we're already watching.",
        visual: <WatchVisual />,
    },
    {
        value: "deep",
        number: "03",
        title: "We go deep",
        description: "When we find a threat, we don't just alert you. We research it like a senior consultant would—except in seconds. Pull the sponsor's voting history. Check PAC contributions. Map the committee, count the votes, identify swing members. Find the chief of staff for every office that matters. Compare the language to 40 years of precedent. Flag compliance costs. Draft your position paper. All of it—automatically, before you ask.",
        visual: <DeepVisual />,
    }
]

function LearnVisual() {
    return (
        <Card className="max-w-sm mx-auto bg-white shadow-xl rounded-lg p-4">
            <h4 className="font-semibold font-headline text-center mb-4">Legislative Agenda</h4>
            <div className="space-y-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <ThumbsUp className="h-5 w-5 text-green-600" />
                        <h5 className="font-semibold text-sm text-green-600 uppercase">SUPPORT</h5>
                    </div>
                    <ul className="space-y-3 text-sm border-l-2 border-gray-200 pl-4 ml-2.5">
                        <li>
                            <p className="font-medium text-card-foreground">HR-3 Lower Drug Costs Now Act</p>
                            <p className="text-xs text-muted-foreground">Aligns with market access strategy</p>
                        </li>
                        <li>
                            <p className="font-medium text-card-foreground">S-1895 HELP Committee Bill</p>
                            <p className="text-xs text-muted-foreground">Favorable biosimilar provisions</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex items-center gap-2 mt-4 mb-2">
                        <ThumbsDown className="h-5 w-5 text-red-600" />
                        <h5 className="font-semibold text-sm text-red-600 uppercase">OPPOSE</h5>
                    </div>
                    <ul className="space-y-3 text-sm border-l-2 border-gray-200 pl-4 ml-2.5">
                        <li>
                            <p className="font-medium text-card-foreground">HR-987 Elijah Cummings Act</p>
                            <p className="text-xs text-muted-foreground">Price negotiation risk: $340M</p>
                        </li>
                        <li>
                            <p className="font-medium text-card-foreground">S-2543 340B Reform Act</p>
                            <p className="text-xs text-muted-foreground">Threatens discount program revenue</p>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    )
}

function WatchVisual() {
    return <div className="h-80 w-full"></div>;
}

function DeepVisual() {
    return (
        <Card className="max-w-sm mx-auto bg-white/30 backdrop-blur-sm shadow-xl rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-gray-200/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FileText className="h-8 w-8 text-gray-400" />
            </div>
            <h4 className="font-semibold font-headline mb-1">SB-1847 Analysis</h4>
            <p className="text-sm text-muted-foreground mb-4">Read Ready</p>
            <Button variant="secondary" className="bg-white">Open Brief</Button>
        </Card>
    )
}


export default function Process() {
    const [activeTab, setActiveTab] = useState(processData[0].value);
    const activeIndex = processData.findIndex(p => p.value === activeTab);
    
    return (
        <section className="py-20 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Process</h2>
                    <div className="mt-4 mx-auto w-24 h-px bg-border"></div>
                </div>

                <Tabs defaultValue={processData[0].value} onValueChange={setActiveTab} className="mt-16">
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
                         <div className="absolute bottom-[-1px] left-0 h-0.5 bg-primary transition-transform duration-300 ease-in-out" 
                            style={{ 
                                width: `33.333%`,
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
