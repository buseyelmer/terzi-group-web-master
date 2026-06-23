import type { Metadata } from "next";
import { ContactPage } from "@/feature/contact/component/contact-page";

export const metadata: Metadata = {
  title: "İletişim | Terzi Group",
  description:
    "Terzi Group Bondorf ve Stuttgart lokasyonları — adres, telefon, açılış saatleri ve iletişim formu.",
};

export default function IletisimPage() {
  return <ContactPage />;
}
