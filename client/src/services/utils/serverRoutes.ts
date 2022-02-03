const serverRoutes: ServerRouterType = {
  auth: {
    getCountries: "countries",
    login: "auth/local",
    confirm: "auth/confirm-code",
    google: "connect/google",
  },
  blog: {
    list: "blogs",
    category: "blog-categories",
  },
}

export default serverRoutes
