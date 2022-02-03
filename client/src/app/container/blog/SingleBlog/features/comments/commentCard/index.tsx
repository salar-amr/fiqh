import { Box, IconButton, Typography, Button } from "@mui/material"
import { Like1, Dislike } from "iconsax-react"
import { useState } from "react"
import SubComment from "./subComment"

const Comment = () => {
  const [vote, setVote] = useState("null")

  const likeHandler = () => {
    vote === "like" ? setVote("null") : setVote("like")
  }
  const dilikeHandler = () => {
    vote === "dislike" ? setVote("null") : setVote("dislike")
  }

  const [showSubCommetns, setShowSubComments] = useState(false)

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
              2 ساعت پیش
            </Typography>
            <Typography sx={{ fontWeight: 800, color: "gray.dark" }}>
              محمد عزیزی
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
        سامسونگ به عنوان یکی از تامین‌کنندگان صفحات نمایش اپل در مراحل ابتدایی
        آماده‌سازی خط تولید نمایشگر OLED قرار دارد که در مدل‌های آتی مک‌بوک پرو
        به کار گرفته خواهد شد
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>(2)</Typography>
          <IconButton>
            <Typography>پاسخ</Typography>
          </IconButton>
        </Box>
        <Button
          variant="text"
          sx={{ textDecorationLine: "underline" }}
          onClick={() => setShowSubComments(true)}
        >
          نمایش پاسخ ها
        </Button>
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
          <SubComment />
          <SubComment />
        </Box>
      ) : null}
    </Box>
  )
}

export default Comment
