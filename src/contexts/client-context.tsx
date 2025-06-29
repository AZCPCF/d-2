"use client";
import { AboutUsRequestInterface } from "@/interfaces/pages/about-us";
import { fetcher } from "@/lib/fetcher";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
interface ClientContextInterface {
  aboutUs?: Partial<AboutUsRequestInterface["data"]>;
}
export const clientContext = createContext<ClientContextInterface>({
  aboutUs: {
    content:
      "پوشاک D2 با بیش از دو دهه سابقه فعالیت در زمینه تولید و عرضه پوشاک مردانه و بچگانه با پایبندی به دو اصل کلیدی، 7 روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا، موفق شده ،به یکی از بهترین فروشگاه اینترنتی ایران تبدیل  شود.\r\n\r\n ما به جرئت میتونیم بگیم که از فروشگاه ما دست خالی بیرون نمیرید و خرید لذت بخشی را تجربه میکنید.",
  },
});
export const ClientContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [aboutUs, setAboutUs] = useState<AboutUsRequestInterface["data"]>();
  const getData = async () => {
    const res = await fetcher<AboutUsRequestInterface>({
      endpoint: "about_us",
    });
    setAboutUs(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <clientContext.Provider value={{ aboutUs }}>
      {children}
    </clientContext.Provider>
  );
};

export const useClientCtx = () => useContext(clientContext);
