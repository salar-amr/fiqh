import { Box, Button, CircularProgress, useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import BlogCard from "../blogCard"
import BlogTitle from "../../../../components/blog/features/blogTitle"
import { useBlogSort } from "src/services"
// import data from "./lastBlogsData.json"

const LastBlogs = () => {
  const { data, isLoading } = useBlogSort("publishedAt%3Adesc")

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
    <Box sx={{ display: "flex", flexDirection: "column", my: "38px" }}>
      <BlogTitle text="آخرین مطالب" leftElement={leftTitle} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column-reverse",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // flexGrow: 1,
            width: "410px",
            marginRight: "24px",
          }}
        >
          {data?.data?.map((blog, i) => {
            const d =
              i === 0 || i > 4 ? (
                <></>
              ) : (
                <BlogCard {...blog} key={i} variant="last" />
              )
            return d
          })}
        </Box>
        <BlogCard {...data?.data[0]} variant="head" style={{ flexGrow: 1 }} />
      </Box>
    </Box>
  )
}

export default LastBlogs
