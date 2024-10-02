import { createContext, useEffect, useState } from "react";
import { Data } from "../../common/types";
import { getData } from "../../common/storage";

export const dataContext = createContext<Data>({ status: "LOADING" });

type Props = {
  children: React.ReactNode;
};

const DataProvider = ({ children }: Props) => {
  const [data, setData] = useState<Data>({ status: "LOADING" });

  useEffect(() => {
    async function storageOnChanged() {
      const newData = await getData();
      setData(newData);
    }

    storageOnChanged();

    chrome.storage.local.onChanged.addListener(storageOnChanged);

    return () => {
      chrome.storage.local.onChanged.removeListener(storageOnChanged);
    };
  }, []);

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default DataProvider;
