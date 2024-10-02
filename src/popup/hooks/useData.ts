import { useContext } from "react";
import { dataContext } from "../providers/data-provider";
import { Data } from "../../common/types";

export function useData(): Data {
  const context = useContext(dataContext);
  return context;
}
