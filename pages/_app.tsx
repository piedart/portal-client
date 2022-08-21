import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import DashboardLayout from "../components/DashboardLayout";
import axios from "axios";
import Head from "next/head";
import SidebarTop from "../components/SidebarTop";
import Sidebar from "../components/Sidebar";
import styles from "../styles/DashboardLayout.module.css";

function MyApp({ user, Component, pageProps, router }: any) {
  console.log(user);
  return (
    <div>
      <Head>
        <title>Royal Navy Portal</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
