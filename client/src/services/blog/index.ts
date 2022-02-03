import { useQuery } from "react-query"
import { blogList, blogSortList, categoryList } from "./api"

export const useBlogList = () => useQuery(["blogList"], blogList)
export const useBlogSort = (sort: any) =>
  useQuery([`blogSort_${sort}`, sort], blogSortList)
export const useCategoryList = () => useQuery(["categoryList"], categoryList)
