export type HoursBlock = {
  title: string;
  items: { label: string; value: string }[];
};

export type ContactLocation = {
  id: string;
  name: string;
  address: string[];
  phone: string;
  fax: string;
  mapUrl: string;
  hours: HoursBlock[];
};

export const contactPageContent = {
  hero: {
    title: "İletişim",
    subtitle:
      "Sorularınız için formu doldurun veya doğrudan lokasyonlarımızdan bize ulaşın.",
  },
  generalEmail: "info@terzi-group.de",
  locations: [
    {
      id: "bondorf",
      name: "Bondorf",
      address: ["Benzstrasse 5", "71149 Bondorf (Almanya)"],
      phone: "+49 (0) 7457 93 19 01",
      fax: "+49 (0) 7457 93 19 02",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Benzstrasse+5,+71149+Bondorf,+Germany",
      hours: [
        {
          title: "Toptan satış açılış saatleri",
          items: [
            { label: "Pazartesi", value: "Kapalı" },
            { label: "Salı – Cuma", value: "09:00 – 16:00" },
            { label: "Cumartesi", value: "09:00 – 12:00" },
          ],
        },
        {
          title: "Perakende mağaza açılış saatleri",
          items: [
            { label: "Pazartesi", value: "Kapalı" },
            { label: "Salı – Cumartesi", value: "09:00 – 18:00" },
          ],
        },
        {
          title: "Teslimat süreleri",
          items: [
            {
              label: "Salı – Cuma",
              value: "09:00 – 12:00 ve 13:00 – 15:00",
            },
          ],
        },
      ],
    },
    {
      id: "stuttgart",
      name: "Stuttgart",
      address: ["Langwiesenweg 30", "70327 Stuttgart (Almanya)"],
      phone: "+49 (0) 711 4595266",
      fax: "+49 (0) 711 4595267",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Langwiesenweg+30,+70327+Stuttgart,+Germany",
      hours: [
        {
          title: "Toptan satış açılış saatleri",
          items: [
            { label: "Pazartesi – Cumartesi", value: "04:00 – 14:00" },
          ],
        },
        {
          title: "Teslimat süreleri",
          items: [
            {
              label: "Pazartesi – Cuma",
              value: "16:00 – 18:00 ve 12:00 – 14:00",
            },
          ],
        },
      ],
    },
  ] satisfies ContactLocation[],
  form: {
    title: "Mesaj Gönderin",
    subtitle: "Size en kısa sürede dönüş yapacağız.",
    fields: {
      name: "İsim",
      email: "E-posta adresi",
      reference: "Referans",
      message: "Mesajınız",
    },
    submit: "Göndermek",
    success: "Mesajınız alındı. En kısa sürede size dönüş yapacağız.",
  },
} as const;
