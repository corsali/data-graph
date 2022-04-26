export const resolvers = {
  User: {
    async __resolveReference(ref: any) {
      return { id: ref.id, name: "asd" };
    },
  },
  Query: {
    async user(_: any, { id }: any) {
      return { id: id, name: "asd" };
    },
    async users() {
      return [{ id: "" + Math.random(), name: "asd" }];
    },
  },
};
