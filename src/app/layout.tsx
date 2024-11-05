import { Metadata, Viewport } from "next";
import React from "react";
import Header from "@/components/Header";
import "../globals.scss";

export const metadata: Metadata = {
  title: "Joyeria La Perla",
  description:
    "Receipt form for purchases, lay-away payments and customer convenience.",
  applicationName: "Joyeria La Perla",
  authors: {
    name: "Abraham Jimenez",
    url: "https://github.com/abrahamjimenez",
  },
  alternates: { canonical: "https://receipts-jlp.vercel.app/" },
  appleWebApp: {
    capable: true,
    title: "Joyeria La Perla",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    url: false,
    email: false,
    address: false,
    date: false,
  },
  twitter: {
    card: "summary",
    title: "Joyeria La Perla",
    description:
      "Receipt form for purchases, lay-away payments and customer convenience.",
    creator: "Abraham Jimenez",
    images: ["logo.webp"],
  },
  openGraph: {
    type: "website",
    url: "https://receipts-jlp.vercel.app/",
    title: "Joyeria La Perla",
    description:
      "Receipt form for purchases, lay-away payments and customer convenience.",
    siteName: "Joyeria La Perla",
    images: [
      {
        url: "https://5d9d5f95a740e34a7683.cdn6.editmysite.com/uploads/b/4e762230-840f-11ea-93be-576eae8257e2/A61141DE-5EAC-45C6-BB49-B90BCECA90A5.jpeg?width=2400&optimize=medium",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-4">
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
