import {data} from "../../data"
import {QueryResolvers} from "../../types/generated/graphql"



export const posts: QueryResolvers["posts"] = async (
  parent,
  args,
  context,
  info
) => {

  if (args.id) {
    return data.filter(d => d.id === args.id)
  } else {
    return data
  }
}
