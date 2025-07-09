"use client";

import { ProductInterface } from "@/interfaces";
import { fetcher } from "@/lib/fetcher";
import { useEffect, useState } from "react";
import NextLink from "../link";
import NextImage from "../image";

interface SearchModalProps {
  /** Callback to close the modal */
  onClose: () => void;
}

/**
 * SearchModal component provides a product search interface
 * with debounced API calls and results display.
 */
export default function SearchModal({ onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    // Debounce the search request by 400ms
    const timeout = setTimeout(async () => {
      setLoading(true);
      try {
        const { data } = await fetcher<{ data: ProductInterface[] }>({
          endpoint: "search_products",
          params: { search: query },
          apiUrl: "secondary",
        });
        setResults(data);
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    }, 400);

    // Clear timeout if query changes or component unmounts
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 modal"
      role="dialog"
      id="search-modal"
      aria-modal="true"
    >
      <div className="bg-background dark:text-white w-full min-h-[650px] max-w-xl p-4 rounded-xl relative shadow-lg">
        <div className="w-full flex items-center">
          <button
            onClick={onClose}
            className="absolute left-4 text-4xl text-gray-500"
            aria-label="بستن"
            type="button"
          >
            ×
          </button>
          <h1 id="search-modal-title" className="text-xl">
            جستجو محصول
          </h1>
        </div>

        <input
          autoFocus
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="نام محصول را وارد کنید..."
          className="w-full p-4 border border-gray-300 h-max rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 mt-5"
          aria-label="جستجوی محصول"
        />

        {loading && (
          <p className="mt-4 w-full text-sm text-gray-500">در حال جستجو...</p>
        )}

        {!loading && query && (
          <ul className="w-full mt-4 space-y-2" role="list">
            {results.length ? (
              results.slice(0, 6).map((product, index) => (
                <li
                  key={`search-product-${product.page_url}-${index}`}
                  className="border border-gray-200 flex rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-md hover:ring-1 hover:ring-secondary-500"
                >
                  <NextLink
                    label={
                      <>
                        <NextImage
                          alt={`محصول ${index + 1}`}
                          {...product.image_1}
                          className="w-16 h-16 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <span className="p-4 text-sm sm:text-base transition-colors duration-200 group-hover:text-secondary-700">
                          {product.title}
                        </span>
                      </>
                    }
                    className="w-full h-full flex hover:text-secondary-700"
                    href={`/products/${product.page_url}/${product.title}`}
                    onClick={onClose}
                  />
                </li>
              ))
            ) : (
              <p>محصولی یافت نشد.</p>
            )}

            {results.length > 6 && (
              <li className="text-center text-secondary-600 hover:underline cursor-pointer">
                <NextLink
                  label={`مشاهده ${results.length - 6} محصول دیگر`}
                  href={`/products?q=${query}`}
                  className="hover:text-secondary-600"
                />
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
