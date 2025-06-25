export interface CategoryInterface {
  id: number;
  title: string;
  has_sub_category: boolean;
  parent_id?: string;
}
export interface ImageFromApiInterface {
  width?: number;
  height?: number;
  size?: number;
  url: string;
  alt?: string;
}
