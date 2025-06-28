import { ImageFromApiInterface } from "..";

export interface BranchInterface {
  id: number;
  title: string;
  description: string;
  address: string;
  phone_number1: string;
  phone_number2: string;
  instagram: string;
  telegram: string;
  whatsapp: string;
  image?: ImageFromApiInterface;
  created_at?: string;
  updated_at?: string;
}

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
  branches: BranchInterface[];
}
