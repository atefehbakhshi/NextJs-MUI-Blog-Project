import Continents from "@/components/continents";
import Hero from "@/components/hero";
import Head from "next/head";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Traveling To</title>
      </Head>
      <main>
        <Hero />
        <Continents data={props.continents} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/continents");
  const data = await res.json();

  return {
    props: {
      continents: data,
    },
  };
}
