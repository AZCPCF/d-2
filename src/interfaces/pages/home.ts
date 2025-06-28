import { ArticleInterface, ImageFromApiInterface, ProductInterface } from "..";

export interface HomePageRequestInterface {
  slides: { id: number; link: string; image: ImageFromApiInterface }[];
  stories: {
    id: number;
    title: string;
    type: string;
    link: string;
    image_1: ImageFromApiInterface;
    image_2: ImageFromApiInterface;
  }[];
  special_suggestion: ProductInterface[];
  top_sellers: ProductInterface[];
  articles: ArticleInterface[];
}