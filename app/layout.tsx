import { inter, lusitana } from "@/app/ui/fonts";
import "@/app/ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lusitana.variable} antialiased`}>{children}</body>
    </html>
  );
}
