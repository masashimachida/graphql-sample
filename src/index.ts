import {ApolloServer} from "@apollo/server"
import {startStandaloneServer} from "@apollo/server/standalone"
import {GraphQLFileLoader} from "@graphql-tools/graphql-file-loader"
import {loadSchemaSync} from "@graphql-tools/load"
import {addResolversToSchema} from "@graphql-tools/schema"
import {join} from "path"
import resolvers from "./resolvers"

const schema = loadSchemaSync(join(__dirname, "../schema.graphql"), {
  loaders: [new GraphQLFileLoader()]
})

const schemaWithResolvers = addResolversToSchema({schema, resolvers})

const server = new ApolloServer({schema: schemaWithResolvers})
startStandaloneServer(server, {listen: {port: 8888}})
  .then(({url}) => {
    console.log(`🚀 GraphQL Server ready at ${url}`)
  })