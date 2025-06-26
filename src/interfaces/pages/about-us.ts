import { ImageFromApiInterface } from "..";

export interface AboutUsRequestInterface {
  data: {
    video: string;
    content: string;
    poster: ImageFromApiInterface;
    video_text: string;
    images: ImageFromApiInterface[];
    email: string;
    address: string;
    phone_number: string;
    phone_number2: string;
    instagram: string;
    telegram: string;
    whatsapp: string;
  };
}
