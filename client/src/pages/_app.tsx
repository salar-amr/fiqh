import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "src/theme"
import "../styles/global.css"
import "../styles/font-style.css"
import MainLayout from "@/components/layout/mainLayout"
import AuthLayout from "@/components/layout/authLayout"
import BlankLayout from "@/components/layout/blankLayout"
import { QueryClient, QueryClientProvider } from "react-query"
import Head from "next/head"

const layouts: any = {
  main: MainLayout,
  auth: AuthLayout,
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component?.layout ? layouts[Component.layout] : BlankLayout
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
