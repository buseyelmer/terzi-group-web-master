import type { Metadata } from "next";
import { CorporatePage } from "@/feature/corporate/component/corporate-page";

export const metadata: Metadata = {
  title: "Kurumsal | Terzi Group",
  description:
    "Terzi Group kurumsal kimlik, misyon, vizyon ve değerlerimiz. 1986'dan beri Avrupa genelinde güvenilir toptan tedarik.",
};

export default function KurumsalPage() {
  return <CorporatePage />;
}
