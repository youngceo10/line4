import DashboardHeader from '@/components/dashboard/dashboard-header';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
            <div className="flex items-center justify-between p-2">
                 <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                    <div className="font-headline font-bold text-2xl text-sidebar-foreground flex items-center">
                      <span>Line</span>
                      <sup className="text-primary text-2xl font-bold -top-2 relative ml-0.5">4</sup>
                    </div>
                </Link>
                <SidebarTrigger className="hidden md:flex" />
            </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarNav />
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <DashboardHeader />
        <main className="p-4 md:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
