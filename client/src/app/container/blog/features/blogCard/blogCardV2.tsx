import { Box, Icon, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Chat } from "react-iconly"

const BlogCardV2 = ({
  id,
  attributes,
  variant,
  index,
  style,
}: BlogCardType) => {
  const date = new Date(attributes?.publishedAt)
  const [time, setTime] = useState("")

  useEffect(() => {
    let current = Date.now()
    let msPerMinute = 60 * 1000
    let msPerHour = msPerMinute * 60
    let msPerDay = msPerHour * 24
    let msPerMonth = msPerDay * 30
    let msPerYear = msPerDay * 365

    let elapsed = current - date.getTime()

    if (elapsed < msPerMinute) {
      if (elapsed / 1000 < 30) {
        return "به تازگی"
        setTime("به تازگی")
      }
      setTime(Math.round(elapsed / 1000) + " ثانیه پیش")
      // return Math.round(elapsed / 1000) + " ثانیه پیش"
    } else if (elapsed < msPerHour) {
      setTime(Math.round(elapsed / msPerMinute) + " دقیقه پیش")
      // return Math.round(elapsed / msPerMinute) + " دقیقه پیش"
    } else if (elapsed < msPerDay) {
      setTime(Math.round(elapsed / msPerHour) + " ساعت پیش")
      // return Math.round(elapsed / msPerHour) + " ساعت پیش"
    } else if (elapsed < msPerMonth) {
      setTime(Math.round(elapsed / msPerDay) + " روز پیش")
      // return Math.round(elapsed / msPerDay) + " روز پیش"
    } else if (elapsed < msPerYear) {
      setTime(Math.round(elapsed / msPerMonth) + " ماه پیش")
      // return Math.round(elapsed / msPerMonth) + " ماه پیش"
    } else {
      setTime(Math.round(elapsed / msPerYear) + " سال پیش")
      // return Math.round(elapsed / msPerYear) + " سال پیش"
    }
  }, [date])
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        py: "24px",
        borderBottom:
          variant === "footer" ? "1px solid #5B61674D" : "1px solid #D0D2D4",
        alignItems: "end",
        "&:last-child": {
          borderBottom: "0",
        },
        "&:first-child": {
          paddingTop: "0",
        },
        ...style,
      }}
    >
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 500,
          bgcolor: variant === "footer" ? "#292D32" : "#D0D2D4",
          borderRadius: "24px",
          p: "4px 8px",
          marginBottom: "8px",
          color: variant === "footer" ? "#FFF" : "gray.dark",
        }}
      >
        {attributes?.blog_tags?.data?.length > 0
          ? attributes?.blog_tags?.data[0]?.attributes?.title
          : "tag"}
      </Typography>
      <Typography
        sx={{
          textAlign: "right",
          fontWeight: 800,
          marginBottom: "8px",
          maxHeight: "46px",
          overflow: "hidden",
          color: variant === "footer" ? "#FFF" : "gray.dark",
        }}
      >
        {attributes?.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          marginBottom: "12px",
        }}
      >
        <Typography
          sx={{
            paddingLeft: "8px",
            color: "gray.main",
            fontSize: "14px",
            borderLeft: "1px solid #5B61674D",
            fontWeight: 700,
          }}
        >
          {attributes?.author?.data?.attributes?.fullName}
        </Typography>
        <Typography
          sx={{
            px: "8px",
            color: "gray.main",
            fontSize: "14px",
            borderLeft: "1px solid #5B61674D",
          }}
        >
          {time}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", px: "8px" }}>
          <Typography
            sx={{
              marginRight: "5px",
              color: "gray.main",
              fontSize: "14px",
            }}
          >
            ({attributes?.commentCount})
          </Typography>
          <Icon
            component={Chat}
            set="light"
            primaryColor="#B9BBBE"
            sx={{ fontSize: "14.33px" }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default BlogCardV2
