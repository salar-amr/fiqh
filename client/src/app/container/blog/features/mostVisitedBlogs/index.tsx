import BlogTitle from "@/components/blog/features/blogTitle"
import { Box, CircularProgress, Divider, Icon } from "@mui/material"
import { ChevronLeftCircle, ChevronRightCircle } from "react-iconly"
import { useBlogSort } from "src/services"
import BlogCard from "../blogCard"
import { mostVisitedData } from "./mostVisitedData"

const MostVisitedBlogs = () => {
  // const { data, isLoading } = useBlogSort("")
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
        {mostVisitedData.map((blog) => (
          <BlogCard {...blog} variant="mostVisited" />
        ))}
      </Box>
    </Box>
  )
}

export default MostVisitedBlogs
