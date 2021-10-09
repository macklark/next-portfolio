import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Head from "next/head";
// import Image from "next/image";

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

const richTextOptions = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="text-4xl font-bold mb-10">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3 className="text-3xl font-medium mb-5">{children}</h3>;
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node.content[0].marks[0] === undefined) {
        return <p className="text-lg mb-10">{children}</p>;
      }

      if (node.content[0].marks[0].type === "code") {
        return (
          <pre className="py-5 px-4 mb-5 bg-gray-200 dark:bg-gray-800 rounded border-l-8">
            {children}
          </pre>
        );
      }
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return <ul className="list-disc pl-5">{children}</ul>;
    },
  },
};

export default function LogsPage({ log }) {
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
          {documentToReactComponents(log.fields.matter, richTextOptions)}
        </div>
      </div>
    </div>
  );
}
