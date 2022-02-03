import { Box, IconButton, Typography, Button } from "@mui/material"
import { Like1, Dislike } from "iconsax-react"
import { useState } from "react"
import SubComment from "./subComment"
// @ts-ignore
import qs from "qs"

function timeDifference(current: any, previous: any) {
  var msPerMinute = 60 * 1000
  var msPerHour = msPerMinute * 60
  var msPerDay = msPerHour * 24
  var msPerMonth = msPerDay * 30
  var msPerYear = msPerDay * 365

  var elapsed = current - previous

  if (elapsed < msPerMinute) {
    if (elapsed / 1000 < 30) return "به تازگی"

    return Math.round(elapsed / 1000) + " ثانیه پیش"
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " دقیقه پیش"
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " ساعت پیش"
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + " روز پیش"
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + " ماه پیش"
  } else {
    return Math.round(elapsed / msPerYear) + " سال پیش"
  }
}

const Comment = (props: any) => {
  const [vote, setVote] = useState("null")

  const [subComs, setSubComs] = useState([])

  const likeHandler = () => {
    vote === "like" ? setVote("null") : setVote("like")
  }
  const dilikeHandler = () => {
    vote === "dislike" ? setVote("null") : setVote("dislike")
  }

  const [showSubCommetns, setShowSubComments] = useState(false)

  const qry = qs.stringify({
    filters: {
      comment: {
        id: {
          $eq: props.id,
        },
      },
    },
    populate: ["user.image"],
  })

  const showSubComments = async () => {
    const dt = await fetch(
      "https://fm3.berentco.ir/api/blog-comments" + `?${qry}`
    )
    const jdt = await dt.json()

    if (jdt.data) {
      setSubComs(jdt.data)
      setShowSubComments(true)
    } else return
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        border: "1px solid #D0D2D4",
        p: "32px 40px",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* like/dislike */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            component="span"
            color={vote === "dislike" ? "red" : "gray"}
            onClick={dilikeHandler}
            sx={{ borderRadius: "15px" }}
          >
            <Dislike
              size="16"
              variant={vote === "dislike" ? "Bold" : "Linear"}
            />
            <Typography
              sx={{
                color: vote === "dislike" ? "red.main" : "gray.main",
                mx: "8px",
              }}
            >
              28
            </Typography>
          </IconButton>
          <Box sx={{ borderRight: "1px solid #5B616780", height: "16px" }} />
          <IconButton
            component="span"
            color={vote === "like" ? "lime" : "gray"}
            onClick={likeHandler}
            sx={{ borderRadius: "15px" }}
          >
            <Like1 size="16" variant={vote === "like" ? "Bold" : "Linear"} />
            <Typography
              sx={{
                color: vote === "like" ? "lime.main" : "gray.main",
                mx: "8px",
              }}
            >
              28
            </Typography>
          </IconButton>
        </Box>
        {/* profile */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "14px", color: "#444A51" }}>
              {timeDifference(new Date(), new Date(props.attributes.createdAt))}
            </Typography>
            <Typography sx={{ fontWeight: 800, color: "gray.dark" }}>
              {props.attributes?.user.data?.attributes.username ||
                props.attributes?.user.data?.attributes.username}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "56px",
              height: "56px",
              borderRadius: "50px",
              bgcolor: "gray.main",
              marginLeft: "16px",
            }}
          ></Box>
        </Box>
      </Box>
      <Typography sx={{ m: "16px 0 16px 100px" }}>
        {props.attributes.content}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>
            ({props.attributes.blog_comments.data.length})
          </Typography>
          <IconButton>
            <Typography>پاسخ</Typography>
          </IconButton>
        </Box>
        {props.attributes?.blog_comments.data.length ? (
          <Button
            variant="text"
            sx={{ textDecorationLine: "underline" }}
            onClick={showSubComments}
          >
            نمایش پاسخ ها
          </Button>
        ) : null}
      </Box>
      {/* answer ? */}
      {showSubCommetns ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "#E8E8E980",
            borderRadius: " 0 0 15px 15px",
            marginTop: "16px",
            px: "32px",
            border: "1px solid #D0D2D4",
          }}
        >
          {/* <SubComment />
          <SubComment /> */}
          {subComs.map((itm: any) => {
            return <SubComment {...itm} />
          })}
        </Box>
      ) : null}
    </Box>
  )
}

export default Comment
