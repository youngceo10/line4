'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '../ui/sidebar';
import { LayoutDashboard, FileText, Combine, Search } from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
        {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
            <Link href={item.href} passHref legacyBehavior>
                <SidebarMenuButton isActive={pathname.startsWith(item.href)} tooltip={item.label}>
                <item.icon />
                <span>{item.label}</span>
                </SidebarMenuButton>
            </Link>
            </SidebarMenuItem>
        ))}
    </SidebarMenu>
  );
}
