export interface CategoryInterface {
  id: number;
  title: string;
  has_sub_category: boolean;
  parent_id?: string | number;
  sub_categories?: CategoryInterface[];
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
  after_price: number;
  discount: number;
  image_1: ImageFromApiInterface;
}
