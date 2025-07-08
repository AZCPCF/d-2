import { parser } from "@/utils/parser";
import ProductComments from "./product-comment";
import { ProductInterface } from "@/interfaces";

export default function ProductDescription({ res }: { res: ProductInterface }) {
  const { ParsedNode } = parser(res.description);
  return (
    <div className="col-span-4 max-md:col-span-12 max-lg:col-span-full max-lg:order-10 dark:text-white">
      <ParsedNode />
      <ProductComments productId={res.id} comments={res.comments} />
    </div>
  );
}
