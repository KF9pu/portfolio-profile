import Layout from "@components/layout/layout";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="Home" hasTabBar>
      <div className="flex">
        <div className="flex">Home</div>
        <div>Home</div>
        <div>Home</div>

        <div className="flex">Home</div>
        <div>Home</div>
      </div>
    </Layout>
  );
}
