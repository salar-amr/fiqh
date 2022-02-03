import { Box, Typography } from "@mui/material"
import BlogCard from "src/app/container/blog/features/blogCard"
import { useBlogSort } from "src/services"
// import data from "./footerBlogsData.json"

const FooterBlogs = ({ title }: any) => {
  const { data, isLoading } = useBlogSort("publishedAt%3Adesc")
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "410px",
        width: "100%",
        alignItems: "end",
      }}
    >
      <Typography
        sx={{
          color: "white.dark",
          fontWeight: 800,
          fontSize: "18px",
          marginBottom: "25px",
        }}
      >
        {title}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {data?.data?.map((blog, i) => {
          const d =
            i > 2 ? <></> : <BlogCard {...blog} variant="footer" key={i} />
          return d
        })}
      </Box>
    </Box>
  )
}

export default FooterBlogs
