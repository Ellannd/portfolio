import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arnaldo Ramos | Systems Engineering Student",
  description: "Portfolio of Arnaldo Ramos, Systems Engineering student focused on web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="es" className="h-full antialiased">
      <body className="relative bg-[#030712] min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

