import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-primary'
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  variable: '--font-secondary',
  weight: ["400", "700"]
});