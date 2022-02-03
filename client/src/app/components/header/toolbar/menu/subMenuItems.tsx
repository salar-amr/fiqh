import { Box, Button, Typography, useTheme } from "@mui/material"
import { useRouter } from "next/router"
import { menuData } from "./menuData"
import Link from "next/link"
import { useCategoryList } from "src/services/blog"

const SubMenuItems = () => {
  const router = useRouter()

  // console.log(router.pathname.split("/"))

  const { data } = useCategoryList()
  console.log("sub", data)

  const currentActiveItem = menuData.filter((item) => {
    // console.log(item)
    return router.pathname.split("/")[1] === item.key
  })
  const theme = useTheme()

  return (
    <>
      {currentActiveItem?.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "end",
            alignItems: "center",
            px: "80px",
            bgcolor: "lime.120",
            color: "#FFFFFFB2",
            height: "56px",
            [theme.breakpoints.down("md")]: {
              display: "none",
              px: "14px",
            },
          }}
        >
          {/* {currentActiveItem[0].subMenu?.map((sumMenuItem, i) => ( */}
          {data?.data?.map((sumMenuItem, i) => (
            <Link
              href="/blog/[category]"
              as={`/blog/${sumMenuItem?.id}`}
              key={i}
            >
              <Button
                sx={{
                  marginLeft: "32px",
                  fontSize: "14px",
                  cursor: "pointer",
                  color: "#FFFFFFB2",
                  // color:
                  //   router?.query?.category === sumMenuItem.text
                  //     ? "#FFF"
                  //     : "#FFFFFFB2",
                }}
              >
                {sumMenuItem?.attributes?.title}
              </Button>
            </Link>
          ))}
        </Box>
      ) : null}
    </>
  )
}

export default SubMenuItems
