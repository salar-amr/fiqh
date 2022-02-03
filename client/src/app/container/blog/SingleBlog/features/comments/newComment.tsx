import { Box, Button, Typography, TextField, Checkbox } from "@mui/material"
import { useState } from "react"

const NewComment = () => {
  const [auth, setAuth] = useState(false)
  return (
    <>
      {auth ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginTop: "28px",
            marginBottom: "40px",
          }}
        >
          <TextField
            multiline
            maxRows={8}
            placeholder="دیدگاه خود را وارد کنید..."
            InputProps={{
              style: {
                height: "240px",
                borderRadius: "20px",
                direction: "rtl",
              },
            }}
            sx={{ bgcolor: "#E8E8E980", borderRadius: "20px" }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "16px",
            }}
          >
            <Button
              color="blue"
              sx={{ p: "10px 24px", color: "#FFF" }}
              variant="contained"
            >
              ارسال دیدگاه
            </Button>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontWeight: 500, color: "gray.dark" }}>
                <Box component="span" sx={{ color: "blue" }}>
                  {" "}
                  قوانین و مقررات{" "}
                </Box>
                ارسال دیدگاه در زومیت را مطالعه کرده و آن‌ها را می‌پذیرم
              </Typography>
              <Checkbox />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            borderRadius: "20px",
            bgcolor: "#E8E8E980",
            p: "28px 42px",
            my: "30px",
            justifyContent: "space-between",
          }}
        >
          <Button
            sx={{ p: "12px 32px" }}
            variant="contained"
            onClick={() => setAuth(true)}
          >
            وارد شوید
          </Button>
          <Box sx={{ display: "felx", flexDirection: "column" }}>
            <Typography
              sx={{ color: "gray.dark", fontSize: "20px", fontWeight: 800 }}
            >
              ثبت دیدگاه
            </Typography>
            <Typography>
              برای گفتگو با کاربران، وارد حساب کاربری خود شوید
            </Typography>
          </Box>
        </Box>
      )}
    </>
  )
}

export default NewComment
