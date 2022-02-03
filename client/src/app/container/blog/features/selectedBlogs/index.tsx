import BlogTitle from "@/components/blog/features/blogTitle"
import { Box, CircularProgress } from "@mui/material"
import { useBlogSelected } from "src/services"
import BlogCard from "../blogCard"
// import data from "./selectedData.json"

const SelectedBlogs = () => {
  // const headBlog = data[0]

  const { data, isLoading } = useBlogSelected()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "53px",
        marginLeft: "10px",
        flexGrow: 1,
      }}
    >
      <BlogTitle text="منتخبین سردبیر" />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
        <BlogCard
          {...data?.data[0]}
          variant="head"
          style={{ marginBottom: "32px" }}
        />
        {data?.data?.map((blog, i) => {
          const b =
            i == 0 || i > 3 ? (
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
