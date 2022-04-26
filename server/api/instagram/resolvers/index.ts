export const resolvers = {
  User: {
    async instagram(user: any) {
      return { following: [{ id: "1", title: user.id }] };
    },
  },
};
