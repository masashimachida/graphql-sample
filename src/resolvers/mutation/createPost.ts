import {data} from "../../data"
import {MutationResolvers} from "../../types/generated/graphql"

export const createPost: MutationResolvers["createPost"] = async (
  parent,
  args,
  context,
  info
) => {

  const title = args.input.title
    , bodies  = args.input.bodies

  const post = {
    id    : data.length + 1,
    title : title,
    bodies: bodies.map(b => ({content: b})),
    postAt: new Date()
  }

  data.push(post)

  return post
}