import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactComponentElement } from "react";

const getDefaultLayout = (page: React.ReactNode) => <>{page}</>;

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component?.getLayout || getDefaultLayout;
  return (
    <>
      <Navbar />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
