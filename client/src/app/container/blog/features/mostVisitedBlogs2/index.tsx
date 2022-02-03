import BlogTitle from "@/components/blog/features/blogTitle"
import { Box, CircularProgress } from "@mui/material"
import { useBlogSort } from "src/services"
import BlogCardV2 from "../blogCard/blogCardV2"
// import { mostVisitedData } from "../mostVisitedBlogs/mostVisitedData"

const MostVisitedBlogs2 = () => {
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
          const d = i > 2 ? <></> : <BlogCardV2 {...blog} />
          return d
        })}
      </Box>
    </Box>
  )
}

export default MostVisitedBlogs2
