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

/**
 * Interface for the client context state.
 * Currently holds optional aboutUs data.
 */
interface ClientContextInterface {
  aboutUs?: Partial<AboutUsRequestInterface["data"]>;
}

/**
 * Default aboutUs content as a fallback before fetching real data.
 */
const defaultAboutUsContent = {
  content:
    "پوشاک D2 با بیش از دو دهه سابقه فعالیت در زمینه تولید و عرضه پوشاک مردانه و بچگانه با پایبندی به دو اصل کلیدی، 7 روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا، موفق شده ،به یکی از بهترین فروشگاه اینترنتی ایران تبدیل  شود.\r\n\r\n ما به جرئت میتونیم بگیم که از فروشگاه ما دست خالی بیرون نمیرید و خرید لذت بخشی را تجربه میکنید.",
};

/**
 * React context for client-side data sharing.
 * Initialized with default aboutUs content.
 */
export const clientContext = createContext<ClientContextInterface>({
  aboutUs: defaultAboutUsContent,
});

/**
 * Provider component to wrap parts of the app that need access to clientContext.
 * Fetches `about_us` data once on mount and provides it via context.
 */
export const ClientContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [aboutUs, setAboutUs] = useState<AboutUsRequestInterface["data"]>();

  // Fetch the about_us data asynchronously
  const getData = async () => {
    const res = await fetcher<AboutUsRequestInterface>({
      endpoint: "about_us",
    });
    console.log(res.data.content);
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

/**
 * Custom hook to easily consume clientContext.
 */
export const useClientCtx = (): ClientContextInterface =>
  useContext(clientContext);
