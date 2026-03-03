import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nabrasa CRM",
  description: "CRM base con Next.js, Supabase Auth y Prisma"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
