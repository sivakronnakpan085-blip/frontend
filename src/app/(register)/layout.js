import { Geist, Prompt } from "next/font/google";
import "../globals.css";

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
  title: "poon",
  description: "poon",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${prompt.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
