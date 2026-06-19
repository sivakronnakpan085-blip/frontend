import { Geist, Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/์Navigation"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["800"],
  variable: "--font-prompt",
});

export const metadata = {
  title: "ผมชอบนิดครับ",
  description: "ผมชอบนิดครับ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${prompt.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
