import axios from "../utils/axios"
import routes from "../utils/serverRoutes"

export const getCounties = async () => {
  const { data } = await axios.get(routes.auth.getCountries, {
    params: {
      locale: "fa",
      populate: "flag",
    },
  })
  return data
}

export const login = async (body: any) => {
  const { data } = await axios.post(routes.auth.login, {
    mobile: body.phone,
  })
  return data
}

export const loginEmail = async (body: any) => {
  const { data } = await axios.post(routes.auth.login, {
    email: body.email,
  })
  return data
}

export const confirm = async (body: any) => {
  const { data } = await axios.post(routes.auth.confirm, {
    confirmation: body.confirm,
  })
  return data
}
