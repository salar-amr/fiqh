import Snackbar from "@/components/Snackbar"
import { Box, Button, Typography, useTheme } from "@mui/material"
import { useRouter } from "next/router"
import { useState } from "react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { useLogin, useLoginEmail } from "src/services/auth"
import Link from "next/link"
import Cookies from "js-cookie"

const Login = () => {
  const router = useRouter()

  const { mutate: mutatePhone } = useLogin()
  const { mutate: mutateEmail } = useLoginEmail()

  const [phone, setPhone] = useState("")
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [message, setMessage] = useState("")
  const [isEmail, setIsEmail] = useState(true)
  const [email, setEmail] = useState("")

  const loginHandler = () => {
    // Cookies.remove("phone", email)
    // Cookies.set("email", email)
    // Cookies.set("phone", phone)
    // router.push("login-register/confirm")
    !isEmail
      ? mutateEmail(
          {
            email: email,
          },
          {
            onSuccess: () => {
              // router.push("login-register/confirm")
            },
            onError: (err: any) => {
              setMessage(err?.response?.error?.message)
              setOpenSnackbar(true)
            },
          }
        )
      : mutatePhone(
          {
            phone: "+" + phone,
          },
          {
            onSuccess: () => {
              router.push("login-register/confirm")
              Cookies.set("phone", phone)
            },
            onError: (err: any) => {
              setMessage(err?.response?.error?.message)
              setOpenSnackbar(true)
            },
          }
        )
  }

  // const loginGoogleHandler = () => {
  //   const { data } = useGoogle()
  //   // mutateGoogle({})
  // }

  const enterEmail = "ورود با ایمیل"
  const enterMobile = "ورود با موبایل"

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
          maxWidth: "624px",
          width: "100%",
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
            [theme.breakpoints.down("md")]: {
              px: "0",
            },
          }}
        >
          {!isEmail
            ? "لطفا ایمیل خود را وارد کنید"
            : "لطفا کد کشور را انتخاب کنید و شماره همراه خود را وارد کنید"}
        </Typography>
        <Box sx={{ marginBottom: "16px", width: "100%" }}>
          {isEmail ? (
            <PhoneInput
              country={"ir"}
              onChange={(p) => setPhone(p)}
              value={phone}
              inputStyle={{
                border: "1px solid #E6E6EB",
                borderRadius: "12px",
                height: "48px",
                backgroundColor: "#F5F5F5",
                width: "100%",
              }}
              buttonStyle={{
                border: "1px solid #E6E6EB",
                borderRadius: "12px 0 0 12px",
              }}
              dropdownStyle={{
                backgroundColor: "#F5F5F5",
                width: "360px",
              }}
            />
          ) : (
            <input
              style={{
                border: "1px solid #E6E6EB",
                borderRadius: "12px",
                height: "48px",
                backgroundColor: "#F5F5F5",
                width: "100%",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
        </Box>
        <Button
          fullWidth
          variant="contained"
          color="lime"
          sx={{
            color: "#fff",
            height: "48px",
            borderRadius: "12px",
            marginBottom: "24px",
          }}
          onClick={loginHandler}
        >
          ورود به فقه معاصر
        </Button>
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            borderBottom: "1px solid #e6e6e9",
            lineHeight: "0.1em",
            m: "10px 0 20px",
          }}
        >
          <Box
            component="span"
            sx={{
              bgcolor: "#fff",
              p: "0 10px",
              color: "gray.center",
              fontSize: "12px",
            }}
          >
            یا
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Button
            color="white"
            sx={{
              color: "gray.35",
              border: "1px solid #E6E6EB",
              borderRadius: "8px",
              marginRight: "16px",
              width: "172px",
              justifyContent: "end",
              fontSize: "12px",
            }}
            onClick={() => setIsEmail(!isEmail)}
          >
            {!isEmail ? enterMobile : enterEmail}
            <Box
              component="img"
              sx={{ width: "24px", height: "24px", marginLeft: "11px" }}
              src="/assets/images/email.png"
            />
          </Button>
          <Link href="https://fm3.berentco.ir/api/connect/google">
            <Button
              color="white"
              sx={{
                color: "gray.35",
                border: "1px solid #E6E6EB",
                borderRadius: "8px",
                width: "172px",
                justifyContent: "end",
                fontSize: "12px",
              }}
              // onClick={loginGoogleHandler}
            >
              ورود با گوگل
              <Box
                component="img"
                sx={{ width: "24px", height: "24px", marginLeft: "11px" }}
                src="/assets/images/google.png"
              />
            </Button>
          </Link>
        </Box>
        <Typography sx={{ fontSize: "12px", marginTop: "31px" }}>
          <Box
            component="span"
            sx={{
              color: "lime.main",
              borderBottom: "1px solid #00664a",
              cursor: "pointer",
            }}
          >
            قوانین
          </Box>{" "}
          استفاده از فقه معاصر را پذیرفته ام
        </Typography>
      </Box>
      <Snackbar
        handleClose={() => setOpenSnackbar(false)}
        open={openSnackbar}
        message={message}
        variant="error"
      />
    </Box>
  )
}

Login.layout = "auth"

export default Login
