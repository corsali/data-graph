import {
  Categories,
  categories,
  Service,
  useAvailableCategories,
} from "@shared/categories";
import { getQueriedServices } from "@shared/query-editor";
import { getQuery } from "graphql-playground-react";
import { flatten, mapObjIndexed, pick } from "ramda";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export type CategoryAvailability<T extends Service> = Record<
  Categories[T][number],
  boolean
>;
export type ServiceAvailability = Record<
  Service,
  CategoryAvailability<Service>
>;
export const usePendingCategories = () => {
  const queriedServices = useQueriedServices();
  const availableCategories = useAvailableCategories();

  const categoriesAvailability: ServiceAvailability = mapObjIndexed(
    (cats, ser) => {
      const availableInService = (availableCategories[ser] || []).map((c) =>
        c.toLowerCase()
      );
      return [...cats].reduce<CategoryAvailability<typeof ser>>(
        (acc, cat) => ({
          ...acc,
          [cat]: availableInService.includes(cat.toLowerCase()),
        }),
        {} as CategoryAvailability<typeof ser>
      );
    },
    categories
  );

  const cats = pick(queriedServices, categoriesAvailability);

  const categoriesAmount = flatten(
    Object.values(cats).map(Object.values)
  ).filter((v) => !v).length;

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
