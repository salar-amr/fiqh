import routes from "../utils/serverRoutes"
import axios from "../utils/axios"

// params: {
//   "filters[blog_categories][id][$eq]": body.categoryId,
// },

export const blogList = async () => {
  var params = new URLSearchParams()
  params.append("populate", "image")
  params.append("populate", "author")
  params.append("populate", "blog_tags")
  const { data } = await axios.get(routes.blog.list, {
    params: params,
  })
  return data
}

export const blogSortList = async (body: any) => {
  console.log("dddd", body)
  var params = new URLSearchParams()
  params.append("sort[0]", body?.queryKey[1])
  params.append("populate", "image")
  params.append("populate", "author")
  params.append("populate", "blog_tags")
  const { data } = await axios.get(routes.blog.list, {
    params: params,
  })
  return data
}

export const categoryList = async () => {
  const { data } = await axios.get(routes.blog.category, {
    params: {
      locale: "fa-IR",
      populate: "image",
    },
  })
  return data
}
