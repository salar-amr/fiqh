import { useQuery } from "react-query"
import {
  blogHasVideo,
  blogList,
  blogSelectedList,
  blogSortList,
  categoryList,
} from "./api"

export const useBlogList = () => useQuery(["blogList"], blogList)

export const useBlogSort = (sort: any) =>
  useQuery([`blogSort_${sort}`, sort], blogSortList)

export const useBlogSelected = (filter: any) =>
  useQuery([`blogSelected_${filter}`, filter], blogSelectedList)

export const useCategoryList = () => useQuery(["categoryList"], categoryList)
export const useBlogVideo = () => useQuery(["blogVid"], blogHasVideo)
