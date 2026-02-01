import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: 'Line⁴ — AI Safety Red Lines',
  description: 'Line⁴ provides transparent, real-time visibility into AI safety assessments across major labs, tracking risks across CBRN, cyber offense, autonomous replication, and deceptive alignment.',
  icons: {
    icon: 'https://res.cloudinary.com/djrdh7thl/image/upload/v1769975694/Untitled_5_nfl2wy.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
