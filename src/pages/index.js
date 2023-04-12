import Continents from "@/components/continents";
import Hero from "@/components/hero";
import Popular from "@/components/popular";
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
        <Popular data={props.popular} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const continents = await fetch("http://localhost:3001/continents");
  const continentsData = await continents.json();
  const popular = await fetch("http://localhost:3001/places?_limit=6");
  const popularData = await popular.json();

  return {
    props: {
      continents: continentsData,
      popular: popularData,
    },
  };
}
