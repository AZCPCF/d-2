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
  aboutUs?: AboutUsRequestInterface["data"];
}
export const clientContext = createContext<ClientContextInterface>({});
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
