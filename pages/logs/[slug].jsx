import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Head from "next/head";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "logs",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "logs",
    "fields.slug": params.slug,
  });

  return {
    props: {
      log: items[0],
    },
  };
}

export default function LogsPage({ log }) {
  const richTextOPtions = {
    renderNode: {
      [BLOCKS]: (node, children) => {
        switch (node.type) {
          case "paragraph":
            return <p>{children}</p>;
          case "heading-1":
            return <h1>{children}</h1>;
          case "heading-2":
            return <h2 className="text-3xl">{children}</h2>;
          case "heading-3":
            return <h3>{children}</h3>;
          case "heading-4":
            return <h4>{children}</h4>;
          case "heading-5":
            return <h5>{children}</h5>;
          case "heading-6":
            return <h6>{children}</h6>;
          case "list-item":
            return <li>{children}</li>;
          case "blockquote":
            return <blockquote>{children}</blockquote>;
          case "code":
            return <pre>{children}</pre>;
          case "embedded-entry-block":
            return <div>{children}</div>;
          default:
            return <div>{children}</div>;
        }
      },
    },
  };

  return (
    <div className="container mx-auto max-w-4xl">
      <Head>
        <title>Ganesh Kolavennu | {log.fields.title}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Ganesh portfolio" />
        <meta name="author" content="macklark" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p className="mt-10 text-center md:text-4xl text-2xl font-bold">
        {log.fields.title}
      </p>
      <div className="mt-10 mx-5">
        <div>
          {documentToReactComponents(log.fields.matter, richTextOPtions)}
        </div>
      </div>
    </div>
  );
}
