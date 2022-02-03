import { Box, Button, CircularProgress } from "@mui/material"
import BlogCard from "../blogCard"
import BlogTitle from "../../../../components/blog/features/blogTitle"
import { useBlogSort } from "src/services/blog"
import data from "./bestData.json"

const BestBlogs = () => {
  // const { data, isLoading } = useBlogSort("")

  const leftTitle = (
    <Button
      variant="contained"
      color="blue"
      sx={{ p: "8px 32px", color: "#FFF" }}
    >
      مشاهده همه
    </Button>
  )
  // const data = bestBlogData
  // const headBlog = data[0]

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", marginBottom: "38px" }}
    >
      <BlogTitle text="برترین ها" leftElement={leftTitle} />

      <>
        <BlogCard
          {...data[0]}
          variant="best-head"
          style={{ marginBottom: "16px" }}
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {data?.map((blog, i) => {
            const b =
              i == 0 || i > 4 ? (
                <></>
              ) : (
                <BlogCard {...blog} variant="best" key={i} index={i} />
              )
            return b
          })}
        </Box>
      </>
    </Box>
  )
}

export default BestBlogs
