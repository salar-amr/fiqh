import BlogTitle from "@/components/blog/features/blogTitle"
import { Box, CircularProgress, Typography, useTheme } from "@mui/material"
// import data from "./tagData.json"
import { useCategoryList } from "src/services"

const Tag = ({ id, attributes }: TagType) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${attributes.image.data.attributes.url}) center no-repeat`,
        backgroundSize: "cover",
        width: "194px",
        height: "56px",
        borderRadius: "10px",
        bgcolor: "#130F2666",
        backgroundBlendMode: "multiply",
        color: "#FFF",
        marginBottom: "16px",
      }}
    >
      <Typography sx={{ fontWeight: "bold", color: "#FFF" }}>
        {attributes.title}#
      </Typography>
    </Box>
  )
}

const BlogTags = () => {
  const { data, isLoading } = useCategoryList()

  console.log("tag:", data)
  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginTop: "35px" }}>
      <BlogTitle text="موضوعات" />
      {isLoading ? null : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {data?.data?.map((tag, i) => (
            <Tag {...tag} key={i} />
          ))}
        </Box>
      )}
    </Box>
  )
}

export default BlogTags
