"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { category: "Environment", risk: 85 },
  { category: "Finance", risk: 72 },
  { category: "Labor", risk: 65 },
  { category: "Data Privacy", risk: 91 },
  { category: "Trade", risk: 45 },
]

const chartConfig = {
  risk: {
    label: "Risk Level",
    color: "hsl(var(--primary))",
  },
}

const recentFindings = [
  { id: 1, threat: "New Carbon Tax Proposal", riskLevel: "High", date: "2024-07-20" },
  { id: 2, threat: "AI Regulation Act of 2024", riskLevel: "High", date: "2024-07-18" },
  { id: 3, threat: "Amendments to Financial Disclosure Laws", riskLevel: "Medium", date: "2024-07-15" },
  { id: 4, threat: "Federal Minimum Wage Increase", riskLevel: "Low", date: "2024-07-10" },
  { id: 5, threat: "Updated Data Breach Notification Rules", riskLevel: "Medium", date: "2024-07-09" },
]

export default function RiskOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle className="font-headline">Regulatory Risk by Category</CardTitle>
          <CardDescription>An overview of potential risk levels across different regulatory categories.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} accessibilityLayer>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="category"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 10)}
                />
                <YAxis />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar dataKey="risk" fill="var(--color-risk)" radius={8} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card className="col-span-4 lg:col-span-3">
        <CardHeader>
          <CardTitle className="font-headline">Recent AI Findings</CardTitle>
          <CardDescription>The latest legislative threats identified by our AI agents.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Threat</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Date Identified</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentFindings.map((finding) => (
                <TableRow key={finding.id}>
                  <TableCell className="font-medium">{finding.threat}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        finding.riskLevel === "High"
                          ? "destructive"
                          : finding.riskLevel === "Medium"
                          ? "secondary"
                          : "default"
                      }
                      className={
                        finding.riskLevel === "Medium" 
                        ? "bg-secondary/80 text-secondary-foreground" 
                        : finding.riskLevel === "Low" ? "bg-primary/20 text-primary" : ""
                      }
                    >
                      {finding.riskLevel}
                    </Badge>
                  </TableCell>
                  <TableCell>{finding.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
