import BlogTitle from "@/components/blog/features/blogTitle"
import { Box, Button, useTheme } from "@mui/material"
import { useBlogSort } from "src/services/blog"
import BlogCard from "../blogCard"
import MainBlog from "../mainBlogs/mainBlog"
// import data from "./best2Data.json"

const BestBlogs2 = () => {
  const { data, isLoading } = useBlogSort("totalRate%3Adesc")
  const leftTitle = (
    <Button
      variant="contained"
      color="blue"
      sx={{ p: "8px 32px", color: "#FFF" }}
    >
      مشاهده همه
    </Button>
  )

  const theme = useTheme()

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <BlogTitle text="برترین ها" leftElement={leftTitle} />

      <>
        <MainBlog
          {...data?.data[0]}
          variant="xl"
          style={{ marginBottom: "24px" }}
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            [theme.breakpoints.down("md")]: {
              flexDirection: "row-reverse",
              maxWidth: "100%",
              flexWrap: "nowrap",
              overflow: "scroll",
              width: "100%",
            },
          }}
        >
          {data?.data?.map((blog, i) => {
            const b =
              i == 0 || i > 3 ? (
                <></>
              ) : (
                <BlogCard {...blog} variant="newest" key={i} />
              )
            return b
          })}
        </Box>
      </>
    </Box>
  )
}

export default BestBlogs2

// {data.map((blog, i) => {
//   const b =
//     i == 0 ? <></> : <BlogCard {...blog} variant="newest" key={i} />
//   return b
// })}
