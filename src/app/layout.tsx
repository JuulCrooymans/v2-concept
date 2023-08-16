import "./globals.css";
import { Inter } from "next/font/google";

import { CountProvider } from "@/context/count";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CountProvider>{children}</CountProvider>
      </body>
    </html>
  );
}
