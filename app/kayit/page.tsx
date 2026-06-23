import type { Metadata } from "next";
import { RegisterPage } from "@/feature/auth/component/register-page";

export const metadata: Metadata = {
  title: "Kayıt Ol | Terzi Group",
  description: "Terzi Group B2B platformuna kurumsal hesap başvurusu yapın.",
};

export default function KayitPage() {
  return <RegisterPage />;
}
