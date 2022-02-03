import { Box, Icon, Typography, useTheme } from "@mui/material"
import { Chat } from "react-iconly"
import Link from "next/link"
import { useEffect, useState } from "react"

const BlogCard = ({ id, attributes, variant, index, style }: BlogCardType) => {
  const theme = useTheme()
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
    <Link href="/blog/single/[blogId]" as="/blog/single/blog">
      <Box
        sx={{
          display: "flex",
          flexDirection:
            variant == "newest" || variant === "head" || variant === "popular"
              ? "column"
              : "row-reverse",
          maxWidth:
            variant == "newest"
              ? "270px"
              : variant === "head" || variant === "best"
              ? "410px"
              : variant === "popular"
              ? "237px"
              : "100%",
          width: "100%",
          alignItems:
            variant == "newest" || variant === "head" || variant === "popular"
              ? null
              : "center",
          borderBottom:
            index == 1 ||
            index == 2 ||
            variant === "discuss" ||
            variant === "archive"
              ? "1px solid #D0D2D4"
              : variant === "footer"
              ? "1px solid #5B61674D"
              : "0",
          marginBottom:
            index == 1 ||
            index == 2 ||
            variant === "discuss" ||
            variant === "footer" ||
            variant === "archive"
              ? "16px"
              : null,

          "&:last-child": {
            borderBottom: variant === "archive" ? "1px solid #D0D2D4" : "0",
          },
          ...style,
          [theme.breakpoints.down("md")]: {
            marginBottom:
              variant === "head" || variant === "archive" ? "26px" : null,
            minWidth:
              variant === "newest"
                ? "296px"
                : variant === "popular"
                ? "237px"
                : null,
            marginLeft:
              variant === "newest" || variant === "popular" ? "32px" : null,
            flexDirection: variant === "archive" ? "column" : null,
            borderBottom: variant === "archive" ? "0" : null,
            "&:last-child": {
              borderBottom: "0",
            },
          },
        }}
      >
        <Box
          sx={{
            width:
              variant == "newest" || variant === "head" || variant === "popular"
                ? "100%"
                : variant === "best-head"
                ? "411px"
                : variant === "archive"
                ? "380px"
                : "140px",
            minWidth:
              variant == "newest" || variant === "head" || variant === "popular"
                ? "100%"
                : variant === "best-head"
                ? "411px"
                : variant === "archive"
                ? "380px"
                : "140px",
            minHeight:
              variant == "newest"
                ? "192px"
                : variant == "head"
                ? "250px"
                : variant === "popular"
                ? "160px"
                : variant === "best-head"
                ? "237px"
                : variant === "archive"
                ? "200px"
                : "88px",
            marginBottom: "16px",
            borderRadius: "15px",
            background: `url(${attributes?.image?.data?.attributes?.url}) center no-repeat`,
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            color: "#FFF",
            marginLeft: variant == "newest" || variant == "head" ? "0" : "15px",
            [theme.breakpoints.down("md")]: {
              marginLeft: variant == "popular" ? "0" : null,
            },
          }}
        >
          {variant == "head" ||
          variant === "newest" ||
          variant === "popular" ||
          variant === "archive" ? (
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                bgcolor: "blue.main",
                borderRadius: "24px",
                p: "4px 8px",
                m: "0 16px 16px 0",
                color: "#FFF",
              }}
            >
              {attributes?.blog_tags?.data?.length > 0
                ? attributes?.blog_tags?.data[0]?.attributes?.title
                : "tag"}
            </Typography>
          ) : null}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: variant == "head" ? "40px" : "0",
            alignItems: "end",
          }}
        >
          {variant === "best-head" ? (
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                bgcolor: "blue.main",
                borderRadius: "24px",
                p: "4px 8px",
                marginBottom: "16px",
                color: "#FFF",
              }}
            >
              {attributes?.blog_tags?.data?.length > 0
                ? attributes?.blog_tags?.data[0]?.attributes?.title
                : "tag"}
            </Typography>
          ) : null}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              marginBottom:
                variant == "head" ||
                variant === "best-head" ||
                variant === "newest" ||
                variant === "archive"
                  ? "16px"
                  : "8px",
              color: variant === "footer" ? "#8A8E93" : null,
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
                borderLeft:
                  variant == "head" ||
                  variant === "best-head" ||
                  variant === "newest" ||
                  variant === "archive"
                    ? "1px solid #5B61674D"
                    : "0",
              }}
            >
              {time}
            </Typography>
            {variant == "head" ||
            variant === "best-head" ||
            variant === "newest" ||
            variant === "archive" ? (
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
                  primaryColor="#5B6167"
                  sx={{ fontSize: "14.33px" }}
                />
              </Box>
            ) : null}
          </Box>
          <Typography
            sx={{
              textAlign: "right",
              fontWeight: 800,
              marginBottom: "16px",
              fontSize: variant == "mostVisited" ? "14px" : null,
              maxHeight: "46px",
              overflow: "hidden",
              color: variant === "footer" ? "#FFF" : "gray.dark",
            }}
          >
            {attributes?.title}
          </Typography>
          {variant == "head" ||
          variant === "best-head" ||
          variant === "newest" ||
          variant === "archive" ? (
            <Typography
              sx={{
                color: "gray.main",
                textAlign: "right",
                maxHeight: "46px",
                overflow: "hidden",
              }}
            >
              {attributes?.description}
            </Typography>
          ) : null}
        </Box>
      </Box>
    </Link>
  )
}

export default BlogCard
