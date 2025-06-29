import { ImageFromApiInterface } from "..";

export interface GalleryRequestInterface {
  data: {
    id: number;
    image: ImageFromApiInterface;
    text: string;
  }[];
}
