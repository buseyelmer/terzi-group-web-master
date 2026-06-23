import type { Metadata } from "next";
import { LoginPage } from "@/feature/auth/component/login-page";

export const metadata: Metadata = {
  title: "Giriş Yap | Terzi Group",
  description: "Terzi Group B2B platformuna giriş yapın. Toptan fiyatlar ve sipariş yönetimi.",
};

export default function GirisPage() {
  return <LoginPage />;
}
