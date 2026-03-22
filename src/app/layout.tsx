import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Lunarway Travels",
  description: "Your Gateway to Unforgettable Journeys",
  icons: {
    icon: "/lun-logo.webp",
    shortcut: "/lun-logo.webp",
    apple: "/lun-logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
