import axios from "axios";
import type { TOrderData } from "@/types";

export const postOrder = async (orderData: TOrderData) => {
  try {
    const { data } = await axios.post(
      "http://hh.autodrive-agency.ru/test-tasks/front/task-7/",
        orderData
    );
    return data;
  } catch (e) {
    alert(e);
  }
};
