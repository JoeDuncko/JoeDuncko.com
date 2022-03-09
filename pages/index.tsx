import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import { siteTitle } from "../constants";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
}
