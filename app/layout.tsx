import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const inter = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='w-[480px] mx-auto h-[100dvh] bg-white'>
          {children}
        </main>
      </body>
    </html>
  );
}
