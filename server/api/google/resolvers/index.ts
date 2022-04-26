export const resolvers = {
  User: {
    async google(user: any) {
      console.log(user);

      return {
        searchHistory: ["recipe pancakes", "capital of Indonesia", user.id],
      };
    },
  },
};
