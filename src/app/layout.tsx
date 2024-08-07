import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import StoreContextProvider from "@/store/store-context";

const fira_sans = Fira_Sans({//fonts change
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700", "900"]
})

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Jin's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <StoreContextProvider>
        <body className={fira_sans.className}>
          <Navigation />
          <div id="notification"></div>
          <div id="hello"></div>
          {children}</body>
      </StoreContextProvider>

    </html>
  );
}
