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
