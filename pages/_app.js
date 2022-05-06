//これはNext.js側で用意しているCSS。とりあえず残しておく。
import '../styles/globals.css'

// 1. import `NextUIProvider` component
import { createTheme, NextUIProvider } from '@nextui-org/react';



function MyApp({ Component, pageProps }) {

  const theme = createTheme({
    type: "dark",
  })

  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;