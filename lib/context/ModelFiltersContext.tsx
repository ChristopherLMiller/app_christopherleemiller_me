import { createContext, useState } from "react";

const ModelsFilterContext = createContext<any>(null);

function ModelsFilterContextProvider({ children }: any) {
  const [page, setPage] = useState(1);
  const [completed, setCompleted] = useState(true);
  const [scale, setScale] = useState(null);
  const [tag, setTag] = useState(null);
  const [company, setCompany] = useState(null);
  const [sort, setSort] = useState(`updated_at:DESC`);

  function setPageContext(value: number) {
    setPage(value);
  }

  function setCompletedContext(value: any) {
    //if (value === `all`) {
    //setCompleted(null);
    //} else {
    setCompleted(value);
    //}
  }

  function setScaleContext(value: any) {
    setScale(value);
  }

  function setTagContext(value: any) {
    if (value === `all`) {
      setTag(null);
    } else {
      setTag(value);
    }
  }

  function setCompanyContext(value: any) {
    setCompany(value);
  }

  function setSortedByContext(value: any) {
    setSort(value);
  }

  const defaultContext = {
    page,
    completed,
    setCompletedContext,
    scale,
    tag,
    company,
    setPageContext,
    setScaleContext,
    setTagContext,
    setCompanyContext,
    sort,
    setSortedByContext,
  };

  return (
    <ModelsFilterContext.Provider value={defaultContext}>
      {children}
    </ModelsFilterContext.Provider>
  );
}

export { ModelsFilterContext, ModelsFilterContextProvider };
