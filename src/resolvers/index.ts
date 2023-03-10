import {Resolvers} from "../types/generated/graphql"
import * as query from "./query"
import * as mutation from "./mutation"

const resolvers: Resolvers = {
  Query: query,
  Mutation: mutation
}

export default resolvers