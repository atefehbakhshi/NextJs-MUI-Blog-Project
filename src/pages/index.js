import Hero from "@/components/hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Traveling To</title>
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
}
