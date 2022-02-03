import { useEffect } from "react"
import { useRouter } from "next/router"
import Cookies from "js-cookie"

const Google = () => {
  const router = useRouter()

  useEffect(() => {
    // Cookies.set("token", router?.query?.access_token)
    router.push("/")
  })

  return <></>
}

export default Google
