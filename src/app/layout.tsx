
import { Space_Grotesk, PT_Mono } from "next/font/google";
import "./globals.css";
import { MyProvider } from "@/components/Provider/page";

const pt = PT_Mono({
  variable: "--font-pt-mono",
  subsets: ["latin"],
  weight: ["400"]
});

const space = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pt.className} ${space.className} antialiased`}
      >
        <MyProvider>
          {children}
        </MyProvider>
      </body>
    </html>
  );
}
