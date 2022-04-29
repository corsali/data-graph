import { availableCategoriesEndpoint } from "@shared/api";
import { useEffect, useState } from "react";
import { Service } from "./categories";

export type AvailableCategories = Partial<Record<Service, string[]>>;
export const useAvailableCategories = () => {
  const [availableCategories, setAvailableCategories] = useState<
    AvailableCategories
  >({});

  useEffect(() => {
    fetch(availableCategoriesEndpoint)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAvailableCategories(data);
      });
  }, []);

  return availableCategories;
};
