"use client";

import { usePathname } from "next/navigation";
import {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { AboutUsRequestInterface } from "@/interfaces/pages/about-us";
import { fetcher } from "@/lib/fetcher";

interface ClientContextInterface {
  aboutUs?: Partial<AboutUsRequestInterface["data"]>;
  isLoggedIn: boolean;
  user: { id: number };
  logout: () => void;
}

const defaultAboutUsContent = {
  content:
    "پوشاک D2 با بیش از دو دهه سابقه فعالیت در زمینه تولید و عرضه پوشاک مردانه و بچگانه با پایبندی به دو اصل کلیدی، 7 روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا، موفق شده ،به یکی از بهترین فروشگاه اینترنتی ایران تبدیل  شود.\r\n\r\n ما به جرئت میتونیم بگیم که از فروشگاه ما دست خالی بیرون نمیرید و خرید لذت بخشی را تجربه میکنید.",
};

export const clientContext = createContext<ClientContextInterface>({
  aboutUs: defaultAboutUsContent,
  isLoggedIn: false,
  logout: () => {},
  user: { id: 0 },
});

export const ClientContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [aboutUs, setAboutUs] = useState<AboutUsRequestInterface["data"]>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ id: 0 });
  const pathname = usePathname(); // for route detection

  const fetchAboutUs = async () => {
    try {
      const { data } = await fetcher<AboutUsRequestInterface>({
        endpoint: "about_us",
      });
      setAboutUs(data.data);
    } catch (err) {
      console.error("Failed to fetch about_us:", err);
    }
  };
  const checkUserStatus = async () => {
    const { status } = await fetcher<{ status: number }>({
      endpoint: "user/stats",
      apiUrl: "secondary",
    });
    const { data } = await fetcher<{ data: { id: number } }>({
      endpoint: "user_info",
      apiUrl: "secondary",
    });
    setUser(data.data);
    setIsLoggedIn(status !== 401);
  };
  // Fetch once on mount
  useEffect(() => {
    fetchAboutUs();
    checkUserStatus();
  }, []);

  // Only refetch user status on route change
  useEffect(() => {
    checkUserStatus();
  }, [pathname]);

  return (
    <clientContext.Provider
      value={{
        aboutUs,
        user,
        isLoggedIn,
        logout: () => {
          setIsLoggedIn(false);
        },
      }}
    >
      {children}
    </clientContext.Provider>
  );
};

export const useClientCtx = (): ClientContextInterface =>
  useContext(clientContext);
