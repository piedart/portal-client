import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import DashboardLayout from "../components/DashboardLayout";
import axios from "axios";

function MyApp({ user, Component, pageProps, router }: any) {
  if (router.pathname.startsWith("/dashboard")) {
    return <DashboardLayout user={user} component={<Component {...pageProps} user={user} />}></DashboardLayout>;
  } else {
    return <Component {...pageProps} />;
  }
}

MyApp.getInitialProps = async ({ ctx }: any) => {
  try {
    const user = (
      await axios.get("http://api.britsov.uk/api/auth/status", {
        withCredentials: true,
        headers: { Cookie: `connect.sid=${ctx.req.cookies["connect.sid"]}` },
      })
    ).data;

    return { user: user };
  } catch (err) {
    console.log("1");
    if (ctx.asPath === "/") {
      console.log("3");
    } else {
      console.log("2");
      ctx.res.writeHead(302, { Location: "/" });
    }
    return { user: null };
  }
};

export default MyApp;
