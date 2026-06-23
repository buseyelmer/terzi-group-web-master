import type { Metadata } from "next";
import { Inter, Montserrat, Poppins } from "next/font/google";
import { ConditionalHeader } from "@/feature/layout/component/conditional-header";
import { ConditionalFooter } from "@/feature/layout/component/conditional-footer";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Terzi Group",
  description: "B2B toptan ticaret platformu",
  icons: {
    icon: "/logo_icon.svg",
    shortcut: "/logo_icon.svg",
    apple: "/logo_icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen overflow-x-clip bg-white font-sans text-base antialiased">
        <ConditionalHeader />
        <main>{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
