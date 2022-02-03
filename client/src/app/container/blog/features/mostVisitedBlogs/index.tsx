import BlogTitle from "@/components/blog/features/blogTitle"
import { Box, CircularProgress, Divider, Icon } from "@mui/material"
import { ChevronLeftCircle, ChevronRightCircle } from "react-iconly"
import { useBlogSort } from "src/services"
import BlogCard from "../blogCard"
// import { mostVisitedData } from "./mostVisitedData"

const MostVisitedBlogs = () => {
  const { data, isLoading } = useBlogSort("visitCount%3Adesc")
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <BlogTitle text="پر بازدید ترین ها" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {data?.data?.map((blog, i) => {
          const d = i > 2 ? <></> : <BlogCard {...blog} variant="mostVisited" />
          return d
        })}
      </Box>
    </Box>
  )
}

export default MostVisitedBlogs
