import { CategoryInterface, PaginationInterface, ProductInterface } from "..";

export interface GetByCategoryRequestInterface extends PaginationInterface {
  category: CategoryInterface;
  data: ProductInterface[];
}
