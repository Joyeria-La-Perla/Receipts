import React from "react";
import Header from "@/components/Header";
import "../globals.scss";

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
