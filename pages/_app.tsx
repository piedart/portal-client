import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import DashboardLayout from "../components/DashboardLayout";
import axios from "axios";
import Head from "next/head";

function MyApp({ user, Component, pageProps, router }: any) {
  if (router.pathname.startsWith("/dashboard")) {
    return (
      <div>
        <Head>
          <title>Royal Navy Portal</title>
        </Head>
        <DashboardLayout user={user} component={<Component {...pageProps} user={user} />}></DashboardLayout>
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <title>Royal Navy Portal</title>
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
}

MyApp.getInitialProps = async ({ ctx }: any) => {
  try {
    const user = (
      await axios.get("http://localhost:4000/api/auth/status", {
        withCredentials: true,
        headers: { Cookie: `connect.sid=${ctx.req.cookies["connect.sid"]}` },
      })
    ).data;
    return { user: user };
  } catch (err) {
    if (ctx.asPath === "/") {
    } else {
      ctx.res.writeHead(302, { Location: "/" });
    }
    return { user: null };
  }
};

export default MyApp;
