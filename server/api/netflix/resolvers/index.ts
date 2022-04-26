export const resolvers = {
  User: {
    async netflix(user: any) {
      return { toWatch: [{ id: "1", title: user.id }] };
    },
  },
};
