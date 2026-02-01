"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RiskOverview from "@/components/dashboard/risk-overview";
import ThreatResearch from "@/components/dashboard/threat-research";
import ExposureMapping from "@/components/dashboard/exposure-mapping";
import BriefingGeneration from "@/components/dashboard/briefing-generation";

export default function DashboardTabs() {
  return (
    <Tabs defaultValue="dashboard" className="w-full">
      <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="threat-research">Threat Research</TabsTrigger>
        <TabsTrigger value="exposure-mapping">Exposure Mapping</TabsTrigger>
        <TabsTrigger value="briefing-generation">Briefing Generation</TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard">
        <RiskOverview />
      </TabsContent>
      <TabsContent value="threat-research">
        <ThreatResearch />
      </TabsContent>
      <TabsContent value="exposure-mapping">
        <ExposureMapping />
      </TabsContent>
      <TabsContent value="briefing-generation">
        <BriefingGeneration />
      </TabsContent>
    </Tabs>
  );
}
