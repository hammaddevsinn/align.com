import type { Metadata } from "next";
import "./globals.css";
import {IBM_Plex_Sans} from 'next/font/google'
const ibmPlexSans = IBM_Plex_Sans({
   subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})
export const metadata: Metadata = {
  title: "InfinetWorx",
  description: "Infinetworx delivers innovative IT and networking solutions, empowering businesses with secure, scalable, and efficient technology to drive growth and digital transformation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" /> */}
      </head>
      <body suppressHydrationWarning={true} className={ibmPlexSans.className}>
        {children}
      </body>
    </html>
  );
}
