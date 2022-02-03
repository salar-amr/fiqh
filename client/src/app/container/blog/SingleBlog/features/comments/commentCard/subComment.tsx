import { Box, IconButton, Typography } from "@mui/material"
import { Like1, Dislike } from "iconsax-react"
import { useState } from "react"

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

const divider = (
  <Box
    sx={{ borderRight: "1px solid #5B616780", height: "16px", mx: "16px" }}
  />
)

const SubComment = (props: any) => {
  console.log(props)

  const [vote, setVote] = useState("null")

  const likeHandler = () => {
    vote === "like" ? setVote("null") : setVote("like")
  }
  const dilikeHandler = () => {
    vote === "dislike" ? setVote("null") : setVote("dislike")
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        py: "32px",
        borderBottom: "1px solid #D0D2D4",
        "&:last-child": {
          borderBottom: "0",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          flexDirection: "row-reverse",
        }}
      >
        <Box
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "50px",
            bgcolor: "gray.dark",
            marginLeft: "8px",
          }}
        />
        <Typography sx={{ color: "gray.dark", fontWeight: 800 }}>
          {props.attributes?.user.data?.attributes.username ||
            props.attributes?.user.data?.attributes.username}
        </Typography>
        {divider}
        <Typography sx={{ color: "#444A51", fontSize: "14px" }}>
          {timeDifference(new Date(), new Date(props.attributes.createdAt))}
        </Typography>
        {divider}
        {/* like/dislike */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            component="span"
            color={vote === "dislike" ? "red" : "gray"}
            onClick={dilikeHandler}
            sx={{ borderRadius: "15px", p: "0" }}
          >
            <Dislike
              size="16"
              variant={vote === "dislike" ? "Bold" : "Linear"}
            />
            <Typography
              sx={{
                color: vote === "dislike" ? "red.main" : "gray.main",
                marginLeft: "8px",
              }}
            >
              28
            </Typography>
          </IconButton>
          {divider}
          <IconButton
            component="span"
            color={vote === "like" ? "lime" : "gray"}
            onClick={likeHandler}
            sx={{ borderRadius: "15px", p: "0" }}
          >
            <Like1 size="16" variant={vote === "like" ? "Bold" : "Linear"} />
            <Typography
              sx={{
                color: vote === "like" ? "lime.main" : "gray.main",
                marginLeft: "8px",
              }}
            >
              28
            </Typography>
          </IconButton>
        </Box>
      </Box>
      <Typography sx={{ marginTop: "16px" }}>
        {props.attributes.content}
      </Typography>
    </Box>
  )
}

export default SubComment
