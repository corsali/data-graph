/* eslint-disable @typescript-eslint/no-explicit-any */
import { whereEq, map, append, reject } from "ramda";

type Maybe<T> = T | null;

class Database {
  private storage: { [index: string]: any } = {};

  private updatedStorage: { [index: string]: any } = {};

  register<T>(model: string, data: T) {
    this.storage[model] = data;
    this.update(model, () => data);
  }

  update<T>(model: string, updateFn: (data: T) => T) {
    this.updatedStorage[model] = updateFn(this.updatedStorage[model]);
    return this.updatedStorage[model];
  }

  get<T>(model: string): T {
    return this.updatedStorage[model];
  }

  reset() {
    this.updatedStorage = {
      ...this.storage,
    };
  }
}

export const db = new Database();

export const createMock = <T>(model: string, initialData: T[]) => {
  db.register(model, initialData);  

  const update = (updateFn: (data: T[]) => T[]) => db.update(model, updateFn);
  const getAll = () => db.get(model) as T[];
  const getItems = (filterFn: (item: T) => boolean = () => true) => {
    return getAll().filter(filterFn);
  };

  const getItem = (filterFn: (item: T) => boolean = () => true) => {
    const item = getAll().find(filterFn);
    if (!item) {
      throw Error(`Item not found ${model}`);
    }
    return item;
  };

  const maybeItem = (filterFn: (item: T) => boolean = () => true): Maybe<T> => {
    return getAll().find(filterFn) || null;
  };

  return {
    db,
    update,
    updateWhere: (whereObj: Partial<T>, updateFn: (data: T) => T) => {
      return update(
        map<T, T>((item) => {
          if (whereEq(whereObj, item)) {
            return updateFn(item);
          }
          return item;
        })
      );
    },
    updateOne: (whereObj: Partial<T>, updateFn: (data: T) => T) => {
      const itemToUpdate = maybeItem(whereEq(whereObj));
      if (!itemToUpdate) {
        return;
      }
      const updatedItem = updateFn(itemToUpdate);

      update(
        map<T, T>((item) => {
          return item === itemToUpdate ? updatedItem : item;
        })
      );

      return updatedItem;
    },
    append: (item: T) => db.update<T[]>(model, append(item)),
    deleteWhere: (whereObj: Partial<T>) => update(reject(whereEq(whereObj))),
    get: getItems,
    getAll: getAll,
    getWhere: (whereObj: Partial<T>) => getItems(whereEq(whereObj)),
    getOne: (whereObj: Partial<T>) => getItem(whereEq(whereObj)),
    maybeOne: (whereObj: Partial<T>) => maybeItem(whereEq(whereObj)),
  };
};
