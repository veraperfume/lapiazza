
export interface MenuItem {
  name: string;
  price: string;
  description: string;
  image?: string; // Add this line to support images
}

export interface MenuCategory {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}
