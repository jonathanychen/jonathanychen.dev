import type { Metadata } from "next";
import "./one-year.css";

export const metadata: Metadata = {
  title: "One Year",
  description: "For my sweetheart",
};

export default function OneYearLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
