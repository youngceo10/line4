import { BarChart, Bot, FileText, Map } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "AI-Driven Threat Research",
      description: "Leverage AI agents to research potential legislative threats from bills, news, and reports.",
    },
    {
      icon: <Map className="h-10 w-10 text-primary" />,
      title: "Policy Exposure Mapping",
      description: "Map your organization's policy exposure using public data and proprietary documents.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Automated Briefing Generation",
      description: "Generate comprehensive briefs on legislative threats, including financials and SEC filings.",
    },
    {
        icon: <BarChart className="h-10 w-10 text-primary" />,
        title: "Risk Dashboards",
        description: "Visualize regulatory risk by category and track the latest AI findings on an intuitive dashboard.",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-card-foreground">
            Powerful Features for Proactive Policy Management
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Everything you need to navigate the complex world of legislation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-8 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
