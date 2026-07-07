export interface NavLink {
  label: string;
  href: string;
}

export interface CategoryTile {
  name: string;
  href: string;
  image: string;
}

export const siteConfig = {
  // Placeholder brand name — easy to rename later (just this file + favicon).
  brandName: "Rise & Recover",
  brandWords: ["Rise", "&", "Recover"] as [string, string, string],
  tagline: "Independent Wellness & Fitness Reviews",
  heroHeadline: "Home gym gear worth your money, reviewed honestly",
  description:
    "Expert reviews and buying guides for home workout equipment, recovery tools, and wellness essentials — ranked by real durability and results.",
  domain: "https://riseandrecover.example.com",

  googleFontsUrl:
    "https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Inter:wght@400;500;600;700&display=swap",

  navLinks: [
    { label: "Home", href: "/" },
    { label: "Home Gym", href: "/category/home-gym/" },
    { label: "Cardio", href: "/category/cardio/" },
    { label: "Strength", href: "/category/strength/" },
    { label: "Recovery", href: "/category/recovery/" },
    { label: "Yoga", href: "/category/yoga/" },
    { label: "Walking", href: "/category/walking/" },
    { label: "Wellness", href: "/articles/" },
    { label: "Buying Guides", href: "/guides/" },
  ] as NavLink[],

  footerExploreLinks: [
    { label: "Home Gym", href: "/category/home-gym/" },
    { label: "Recovery", href: "/category/recovery/" },
    { label: "Yoga", href: "/category/yoga/" },
    { label: "All Reviews", href: "/reviews/" },
    { label: "Buying Guides", href: "/guides/" },
    { label: "Best Of Lists", href: "/best-of/" },
  ] as NavLink[],

  homepageCategories: [
    { name: "Home Gym", href: "/category/home-gym/", image: "/images/category-home-gym.jpg" },
    { name: "Cardio", href: "/category/cardio/", image: "/images/category-cardio.jpg" },
    { name: "Recovery", href: "/category/recovery/", image: "/images/category-recovery.jpg" },
    { name: "Yoga", href: "/category/yoga/", image: "/images/category-yoga.jpg" },
  ] as CategoryTile[],

  categoryTaxonomy: {
    "Home Gym": ["Adjustable Dumbbells", "Weight Benches", "Home Gym Systems", "Resistance Bands"],
    "Cardio": ["Walking Pads", "Treadmills", "Exercise Bikes", "Rowing Machines"],
    "Strength": ["Dumbbells", "Kettlebells", "Barbells", "Weight Plates"],
    "Recovery": ["Foam Rollers", "Massage Devices", "Compression Gear", "Recovery Tools"],
    "Yoga": ["Yoga Mats", "Yoga Blocks", "Yoga Straps", "Yoga Apparel"],
    "Walking": ["Walking Pads", "Walking Shoes", "Fitness Trackers"],
  } as Record<string, string[]>,

  // Uses Amazon affiliate links same as the other sites (user decision), but
  // keep on-site copy non-promotional/generic per the brief's "without
  // promoting any specific retailer" tone — mirrors the Glow & Grow pattern
  // of avoiding "Amazon" in headline/marketing copy while still disclosing
  // the affiliate relationship on legal pages.
  hasAffiliateProgram: true,
};
