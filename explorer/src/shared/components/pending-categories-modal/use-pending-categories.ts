import { categories, Service } from "@shared/categories";
import { getQueriedServices } from "@shared/query-editor";
import { getQuery } from "graphql-playground-react";
import { flatten, pick } from "ramda";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const usePendingCategories = () => {
  const queriedServices = useQueriedServices();
  // TODO: get available services and remove from the respective list
  const cats = pick(queriedServices, categories);

  const categoriesAmount = flatten(Object.values(cats)).length;

  return { categories: cats, categoriesAmount };
};

export const useQueriedServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const query = useSelector(getQuery);

  useEffect(() => {
    const extractedServices = getQueriedServices(query) as Service[];
    if (extractedServices) {
      setServices(extractedServices);
    }
  }, [query]);

  return services;
};
