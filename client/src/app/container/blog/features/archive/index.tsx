import BlogTitle from "@/components/blog/features/blogTitle"
import { Box, Pagination, Typography, CircularProgress } from "@mui/material"
import { useBlogSort } from "src/services"
import BlogCard from "../blogCard"
import data from "./archiveData.json"

const Archive = ({ variant }: any) => {
  // const { data, isLoading } = useBlogSort("")
  return (
    <Box
      sx={{
        display: "felx",
        flexDirection: "column",
        marginTop: "24px",
      }}
    >
      {variant == "cat" ? null : <BlogTitle text="آرشیو مطالب" />}{" "}
      <Box sx={{ display: "felx", flexDirection: "column" }}>
        {data?.map((blog, i) => (
          <BlogCard {...blog} variant="archive" key={i} />
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Pagination count={5} color="primary" />
        <Typography color="gray.main">صفحه 1 از 5</Typography>
      </Box>
    </Box>
  )
}

export default Archive
