import { Box, Button, Typography, useTheme } from "@mui/material"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ReactCodeInput from "react-code-input"
import { useConfirm } from "src/services/auth"
import Cookies from "js-cookie"
import Snackbar from "@/components/Snackbar"

const ConfirmLogin = () => {
  const router = useRouter()

  const [confirmCode, setConfirmCode] = useState("")

  const { mutate } = useConfirm()

  const initialMinute = 2
  const initialSeconds = 0

  const [minutes, setMinutes] = useState(initialMinute)
  const [seconds, setSeconds] = useState(initialSeconds)

  const [disableButton, setDsableButton] = useState(true)
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const text = Cookies.get("phone") ? "شماره همراه" : "ایمیل"

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        if (minutes === 0) {
          setDsableButton(true)
          clearInterval(myInterval)
        } else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })

  const confirmHandler = (e: any) => {
    e.preventDefault()
    router.push("/")
    // mutate(
    //   {
    //     confirm: confirmCode,
    //   },
    //   {
    //     onSuccess: (res: any) => {
    //       Cookies.set("token", res?.jwt)
    //     },
    //     onError: () => {
    //       setOpenSnackbar(true)
    //     },
    //   }
    // )
  }

  const theme = useTheme()

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        alignSelf: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "624px",
          // px: "132px",
          p: " 56px 132px 47px 132px",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fff",
          borderRadius: "12px",
          boxShadow: "0px 14px 24px -5px #AAAAAF26",
          [theme.breakpoints.down("md")]: {
            px: "20px",
            mx: "5px",
          },
        }}
        component="form"
        onSubmit={confirmHandler}
      >
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "20px",
            marginBottom: "16px",
          }}
        >
          ورود یا ثبت نام
        </Typography>
        <Typography
          sx={{
            color: "gray.120",
            marginBottom: "24px",
            textAlign: "center",
            px: "43px",
            fontWeight: "bold",
            [theme.breakpoints.down("md")]: {
              px: "0",
            },
          }}
        >
          یک کد 5 رقمی به{" "}
          <Box component="span" sx={{}}>
            {text}&nbsp;
          </Box>
          <Box
            component="span"
            sx={{
              color: "#130f26",
              borderBottom: "1px solid #130f26",
              marginLeft: "5px",
            }}
          >
            {Cookies.get("phone")
              ? Cookies.get("phone") + "+"
              : Cookies.get("email")}
          </Box>
          ارسال شده است
        </Typography>
        <ReactCodeInput
          pattern="[0-9]*"
          inputMode="numeric"
          name="pin-code"
          fields={5}
          autoFocus={false}
          value={confirmCode}
          onChange={(e) => setConfirmCode(e)}
          inputStyle={{
            width: "56px",
            height: "56px",
            border: "1px solid #E6E6EB",
            backgroundColor: "#F5F5F5",
            borderRadius: "12px",
            marginRight: "4px",
            marginLeft: "4px",
            fontSize: "16px",
            textAlign: "center",
            outline: "none",
          }}
        />
        <Button
          fullWidth
          variant="contained"
          color="lime"
          sx={{
            color: "#fff",
            height: "48px",
            borderRadius: "12px",
            marginBottom: "24px",
            marginTop: "16px",
          }}
          type="submit"
        >
          تایید شماره همراه
        </Button>
        <Typography
          sx={{
            fontSize: "12px",
            marginTop: "31px",
            display: "flex",
            fontWeight: 500,
          }}
        >
          <Box sx={{ display: "flex", width: "40px" }}>
            <Box
              sx={{
                color: "lime.main",
                borderBottom: "1px solid #00664a",
                marginLeft: "5px",
              }}
            >
              {minutes}:{seconds}
            </Box>
          </Box>
          <Box> تا ارسال مجدد کد </Box>
        </Typography>
      </Box>
      <Snackbar
        handleClose={() => setOpenSnackbar(false)}
        open={openSnackbar}
        message="خطا"
        variant="error"
      />
    </Box>
  )
}

ConfirmLogin.layout = "auth"

export default ConfirmLogin
