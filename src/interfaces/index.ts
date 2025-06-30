export interface CategoryInterface {
  id: number;
  title: string;
  has_sub_category: boolean;
  page_url: string;
  parent_id?: string | number;
  sub_categories?: CategoryInterface[];
}
export interface ColorInterface {
  title: string;
  color: string;
  color_id: string;
}
export interface CommentInterface {
  id: number;
  name: string;
  message: string;
  created_at: DateInterface;
  customer: { full_name: string };
  admin_answer: string;
}

export interface SizeInterface {
  id: number;
  title: string;
  stock: number;
  stock_id: string;
  color_size: string;
}
export interface ImageFromApiInterface {
  width?: number;
  height?: number;
  size?: number;
  url: string;
  alt?: string;
}
export interface ProductInterface {
  id: number;
  title: string;
  page_url: string;
  price: number;
  colors_cache: ColorInterface[];
  color_count: number;
  after_price: number;
  discount: number;
  image_1: ImageFromApiInterface;
  image_2: ImageFromApiInterface;
  images: ImageFromApiInterface[];
  color_size_cache: (ColorInterface & { sizes: SizeInterface[] })[];
  stock_sum: number;
  description: string;
  categories: CategoryInterface[];
  similar: ProductInterface[];
  comments: CommentInterface[];
}
export interface DateInterface {
  timestamp: number;
  date: string;
  jdate: string;
  string: string;
  str: string;
}
export interface ArticleInterface {
  id: number;
  title: string;
  main_image: ImageFromApiInterface;
  date: DateInterface;
  page_url: string;
}
export interface LicenseInreface {
  id: number;
  text: string;
  image: ImageFromApiInterface;
}
export interface PaginationInterface {
  pagination: {
    current_page: number;
    limit: number;
    total: number;
    total_page: number;
  };
}
