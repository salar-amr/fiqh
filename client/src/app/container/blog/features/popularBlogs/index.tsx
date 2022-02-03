import { useState } from "react"
import { Box, Button, CircularProgress, useTheme } from "@mui/material"
import BlogTitle from "../../../../components/blog/features/blogTitle"
// import data from "./popularBlogsData.json"
import BlogCard from "../blogCard"
import { useBlogSort } from "src/services/blog"

const PopularBlogs = () => {
  const categories = ["همه", "امنیت", "تکنولوژی", "علوم", "سیاست"]
  const [activeCategory, setActiveCategory] = useState("همه")

  const { data, isLoading } = useBlogSort("totalRate%3Adesc")

  console.log("ttttttt", data)

  const theme = useTheme()

  const leftTitle = (
    <>
      <Box
        component="select"
        sx={{
          direction: "rtl",
          bgcolor: "transparent",
          border: "0",
          color: "blue.main",
          fontSize: "13px",
          fontWeight: 800,
          cursor: "pointer",
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
        }}
      >
        {categories.map((cat, i) => (
          <Box component="option" key={i}>
            {cat}
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
      >
        {categories.map((cat, i) => (
          <Button
            color="white"
            key={i}
            sx={{
              color: activeCategory === cat ? "blue.main" : "gray.main",
              borderRight: activeCategory === cat ? "2px solid #007BFF" : "0",
              fontWeight: activeCategory === cat ? 800 : 400,
              fontSize: "14px",
              borderRadius: "0",
              height: "24px",
              px: "15px",
            }}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </Box>
    </>
  )

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", marginBottom: "46px" }}
    >
      <BlogTitle text="محبوب ترین ها" leftElement={leftTitle} />
      <Box
        sx={{
          display: "flex",
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
          const d =
            i > 4 ? <></> : <BlogCard {...blog} key={i} variant="popular" />
          return d
        })}
      </Box>
    </Box>
  )
}

export default PopularBlogs
