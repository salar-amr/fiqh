import BlogTitle from "@/components/blog/features/blogTitle"
import { Box, CircularProgress, Divider, Icon, useTheme } from "@mui/material"
import { ChevronLeftCircle, ChevronRightCircle } from "react-iconly"
import { useBlogSort } from "src/services"
import BlogCard from "../blogCard"
import { newestData } from "./newestData"

const NewestBlogs = () => {
  // const { data, isLoading } = useBlogSort("")

  const theme = useTheme()

  const leftTitle = (
    <>
      <Icon
        component={ChevronLeftCircle}
        set="bold"
        primaryColor="#007BFF"
        sx={{ fontSize: "32px", cursor: "pointer" }}
      />
      <Icon
        component={ChevronRightCircle}
        set="two-tone"
        primaryColor="#D0D2D4"
        sx={{ fontSize: "32px", cursor: "pointer" }}
      />
    </>
  )
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <BlogTitle text="تازه ترین ها" leftElement={leftTitle} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "end",
          [theme.breakpoints.down("md")]: {
            maxWidth: "100%",
            flexWrap: "nowrap",
            overflow: "scroll",
            width: "100%",
          },
        }}
      >
        {newestData.map((blog) => (
          <BlogCard
            {...blog}
            variant="newest"
            style={{
              marginLeft: "16px",
              "&:last-child": { marginLeft: "0" },
            }}
          />
        ))}
      </Box>
    </Box>
  )
}

export default NewestBlogs
