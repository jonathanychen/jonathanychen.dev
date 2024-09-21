import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonathan Chen",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          montserrat.className +
          " overscroll-none min-h-screen flex flex-col items-center justify-between relative"
        }
      >
        {children}
      </body>
    </html>
  );
}
