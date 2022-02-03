import { CircularProgress, useTheme } from "@mui/material"
import { Box } from "@mui/material"
import { useBlogList } from "src/services/blog"
import MainBlog from "./mainBlog"
// import { mainBlogData } from "./mainBlogData"

const MainBlogs = () => {
  const theme = useTheme()
  const { data, isLoading } = useBlogList()
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        width: "100%",
        flexWrap: "wrap",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      {/* fake data */}
      {/* <MainBlog {...mainBlogData[0]} variant="lg" />
      <MainBlog {...mainBlogData[1]} variant="md" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <MainBlog {...mainBlogData[2]} variant="sm" />
        <MainBlog {...mainBlogData[3]} variant="sm" />
      </Box> */}

      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <MainBlog {...data?.data[0]} variant="lg" />
          <MainBlog {...data?.data[1]} variant="md" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
            }}
          >
            <MainBlog {...data?.data[2]} variant="sm" />
            <MainBlog {...data?.data[3]} variant="sm" />
          </Box>
        </>
      )}
    </Box>
  )
}

export default MainBlogs
