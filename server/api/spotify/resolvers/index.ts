export const resolvers = {
  User: {
    async spotify(user: any) {
      return { likedSongs: [{ id: "12", title: user.id, author: user.id }] };
    },
  },
};
