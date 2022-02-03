import BlogTitle from "@/components/blog/features/blogTitle"
import { useTheme } from "@mui/material"
import { Box, Icon, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Chat, Play } from "react-iconly"
import { useBlogVideo } from "src/services"
import video from "./dailyVideoData.json"

const DailyVideo = () => {
  const { data } = useBlogVideo()
  console.log("vid", data)
  // const data = video
  // const { imgUrl, tag, author, time, comments, title, description }: any = data
  const date = new Date(data?.data?.attributes?.publishedAt)
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

  const theme = useTheme()
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: "32px",
      }}
    >
      <BlogTitle text="ویدیو های روزانه" />
      <Box
        sx={{
          display: "flex",
          background: `linear-gradient(359.76deg, #130F26 0.23%, rgba(19, 15, 38, 0) 115.53%),url(${data?.data?.attributes?.image?.data?.attributes?.url}) center no-repeat`,
          backgroundSize: "cover",
          height: "240px",
          width: "100%",
          // width: "100%",
          borderRadius: "15px",
          m: "2px",
          justifyContent: "end",
          alignItems: "end",
          color: "#FFF",
          p: "24px",
          flexGrow: 1,
          [theme.breakpoints.down("md")]: {
            maxWidth: "343px",
            width: "100%",
            height: "198px",
            alignSelf: "center",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            [theme.breakpoints.down("md")]: {
              justifyContent: "space-between",
              height: "100%",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 500,
              bgcolor: "blue.main",
              borderRadius: "24px",
              p: "4px 8px",
              marginBottom: "10px",
              color: "#FFF",
            }}
          >
            {data?.data?.attributes?.blog_tags?.data?.length > 0
              ? data?.data?.attributes?.blog_tags?.data[0]?.attributes?.title
              : "tag"}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              marginBottom: "4px",
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
          >
            <Typography
              sx={{
                paddingLeft: "8px",
                color: "gray.150",
                fontSize: "14px",
                borderLeft: "1px solid #FFFFFF4D",
                fontWeight: 700,
              }}
            >
              {data?.data?.attributes?.blog_tags?.data?.length > 0
                ? data?.data?.attributes?.blog_tags?.data[0]?.attributes?.title
                : "tag"}
            </Typography>
            <Typography
              sx={{
                px: "8px",
                color: "gray.150",
                fontSize: "14px",
                borderLeft: "1px solid #FFFFFF4D",
              }}
            >
              {time}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", px: "8px" }}>
              <Typography
                sx={{
                  marginRight: "5px",
                  color: "gray.150",
                  fontSize: "14px",
                }}
              >
                ({data?.data?.attributes?.commentCount})
              </Typography>
              <Icon
                component={Chat}
                set="light"
                primaryColor="#B9BBBE"
                sx={{ fontSize: "14.33px" }}
              />
            </Box>
          </Box>
          <Box
            component="img"
            src="/assets/images/play.png"
            sx={{
              width: "54px",
              marginLeft: "24px",
              [theme.breakpoints.up("md")]: {
                display: "none",
              },
            }}
          />
          <Typography
            sx={{
              textAlign: "right",
              fontWeight: 800,
              color: "#FFF",
            }}
          >
            {data?.data?.attributes?.title}
          </Typography>
        </Box>
        <Box
          component="img"
          src="/assets/images/play.png"
          sx={{
            width: "54px",
            marginLeft: "24px",
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default DailyVideo
