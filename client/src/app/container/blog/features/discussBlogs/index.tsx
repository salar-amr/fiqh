import BlogTitle from "@/components/blog/features/blogTitle"
import { Box, CircularProgress } from "@mui/material"
import { useBlogSort } from "src/services/blog"
import BlogCard from "../blogCard"
import data from "./discussData.json"

const DiscussBlogs = () => {
  // const { data, isLoading } = useBlogSort("commentCount%3Adesc")
  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginTop: "40px" }}>
      <BlogTitle text="پر بحث ترین ها" />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* {data.map((blog, i) => (
          <BlogCard {...blog} key={i} variant="discuss" />
        ))} */}
        {data?.map((blog, i) => (
          <BlogCard {...blog} key={i} variant="discuss" />
        ))}
      </Box>
    </Box>
  )
}

export default DiscussBlogs
