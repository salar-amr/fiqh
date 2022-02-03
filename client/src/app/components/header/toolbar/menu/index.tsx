import { Box, useTheme } from "@mui/material"
import { menuData } from "./menuData"
import MenuItem from "./menuItem"

const Menu = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row-reverse",
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
      >
        {menuData.map((item) => (
          <MenuItem {...item} key={item.key} />
        ))}
      </Box>
      <Box
        component="img"
        src="/assets/images/fegh.png"
        sx={{
          width: "77px",
          [theme.breakpoints.down("md")]: {
            width: "48px",
          },
        }}
      />
    </Box>
  )
}

export default Menu
