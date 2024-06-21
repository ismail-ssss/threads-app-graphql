import { ApolloServer } from "@apollo/server";
import { User } from "./user";

async function createApolloGraphicalServer() {
  const gqlServer = new ApolloServer({
    typeDefs: `
            type Query{
              hello: String
            }
            type Mutation {
              ${User.mutations}
            }
        `,
    resolvers: {
      Query: {
        ...User.resolvers.queries,
      },
      Mutation: {
        ...User.resolvers.mutations,
      },
    },
  });

  //the gql server
  await gqlServer.start();

  return gqlServer;
}

export default createApolloGraphicalServer;
