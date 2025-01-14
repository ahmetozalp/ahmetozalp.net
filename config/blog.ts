export const BLOG_CATEGORIES: {
  title: string;
  slug: "news" | "education";
  description: string;
}[] = [
  {
    title: "En Son Eklenenler",
    slug: "news",
    description: "Updates and announcements from Next Template.",
  },
  {
    title: "Eğitim",
    slug: "education",
    description: "Educational content about template management.",
  },
];

export const BLOG_AUTHORS = {
  ahmetozalp: {
    name: "ahmetozalp",
    image: "/_static/avatars/mickasmt.png",
    twitter: "ahmeotozalp",
  }
};
