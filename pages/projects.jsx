import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import { createClient } from "contentful";
import Head from "next/head";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "projects" });

  return {
    props: {
      projects: res.items,
    },
    revalidate: 100,
  };
}

export default function Skills({ projects }) {
  return (
    <div>
      <Head>
        <title>Ganesh Kolavennu | Projects</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Ganesh portfolio" />
        <meta name="author" content="macklark" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Cards projects={projects} />
    </div>
  );
}
