export const resolvers = {
  User: {
    async facebook(user: any) {
      return { likedPages: [{ id: "12", title: user.id }] };
    },
  },
};
