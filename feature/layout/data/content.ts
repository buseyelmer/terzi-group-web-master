export const headerContent = {
  search: "Ürün ara...",
  account: "Hesabım",
  login: "Giriş Yap",
  register: "Kayıt Ol",
  customerService: "Müşteri Hizmetleri",
} as const;

export const footerContent = {
  tagline:
    "1986'dan beri Avrupa genelinde güvenilir toptan tedarik ortağınız. Gıda, içecek, hijyen ve ambalaj kategorilerinde kurumsal çözümler.",
  email: "info@terzi-group.de",
  hours: "Pzt–Cum 07:00–18:00",
  copyright: "© 2026 Terzi Group. Tüm hakları saklıdır.",
  links: [
    { label: "Kurumsal", href: "/kurumsal" },
    { label: "Ürün Kategorileri", href: "/kategoriler" },
    { label: "İletişim", href: "/iletisim" },
    { label: "Destek", href: "/destek" },
  ],
  locations: [
    {
      name: "Terzi Bondorf",
      address: ["Benzstrasse 5", "71149 Bondorf (Almanya)"],
      phone: "+49 (0) 7457 931901",
      fax: "+49 (0) 7457 931902",
    },
    {
      name: "Terzi Stuttgart",
      address: ["Langwiesenweg 30", "70327 Stuttgart (Almanya)"],
      phone: "+49 (0) 711 4595266",
      fax: "+49 (0) 711 4595267",
    },
  ],
} as const;
