import BlogTitle from "@/components/blog/features/blogTitle"
import { Box, CircularProgress } from "@mui/material"
import { useBlogSort } from "src/services"
import BlogCard from "../blogCard"
import data from "./selectedData.json"

const SelectedBlogs = () => {
  // const headBlog = data[0]

  // const { data, isLoading } = useBlogSort("")

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "53px",
        marginLeft: "10px",
      }}
    >
      <BlogTitle text="منتخبین سردبیر" />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
        <BlogCard
          {...data[0]}
          variant="head"
          style={{ marginBottom: "32px" }}
        />
        {data?.map((blog, i) => {
          const b =
            i == 0 || i > 4 ? (
              <></>
            ) : (
              <BlogCard {...blog} variant="discuss" key={i} />
            )
          return b
        })}
      </Box>
    </Box>
  )
}

export default SelectedBlogs
