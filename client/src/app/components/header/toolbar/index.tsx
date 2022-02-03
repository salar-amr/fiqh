import {
  Box,
  Button,
  Icon,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material"
import Menu from "./menu"
import { User } from "react-iconly"
import { useRouter } from "next/router"
import { HambergerMenu } from "iconsax-react"
import Divider from "@/components/divider"

const Toolbar = () => {
  const router = useRouter()
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80px",
        bgcolor: "lime.main",
        width: "100%",
        px: "80px",
        [theme.breakpoints.down("md")]: {
          px: "14px",
        },
      }}
    >
      <Button
        color="white"
        variant="contained"
        sx={{
          color: "lime.main",
          borderRadius: "24px",
          width: "168px",
          py: "12px",
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
      >
        <Icon
          component={User}
          set="light"
          // primaryColor="#00664A"
          sx={{
            color: "#00664A",
            [theme.breakpoints.down("md")]: {
              color: "#FFF",
            },
          }}
        />
        <Typography
          sx={{
            paddingLeft: "12px",
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
          onClick={() => router.push("/auth/login-register")}
        >
          ورود/عضویت
        </Typography>
      </Button>
      <Box
        sx={{
          display: "flex",
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
        }}
      >
        <IconButton color="white">
          <Icon
            component={HambergerMenu}
            size="32"
            // color="#FFF"
          />
        </IconButton>
        <Divider mx="8px" h="20px" />
        <IconButton color="white">
          <Icon component={User} set="light" primaryColor="#FFF" />
        </IconButton>
      </Box>
      <Menu />
    </Box>
  )
}

export default Toolbar
