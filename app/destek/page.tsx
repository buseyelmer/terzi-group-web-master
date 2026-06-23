import type { Metadata } from "next";
import { SupportPage } from "@/feature/support/component/support-page";

export const metadata: Metadata = {
  title: "Destek | Terzi Group",
  description:
    "Terzi Group müşterilerine öncelikli destek ve hızlı geri dönüş. Uzman ekibimiz yanınızda.",
};

export default function DestekPage() {
  return <SupportPage />;
}
