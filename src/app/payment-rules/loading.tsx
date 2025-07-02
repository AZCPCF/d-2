import RulesPageLoading from "@/components/loading/rules";
import { BiShoppingBag } from "react-icons/bi";

export default function PaymentRulesLoading() {
  return <RulesPageLoading icon={<BiShoppingBag />} title="نحوه ثبت سفارش" />;
}
