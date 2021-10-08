import Navbar from "../../components/Navbar";
import { createClient } from "contentful";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "logs" });

  return {
    props: {
      logs: res.items,
    },
    revalidate: 100,
  };
}

const Logs = ({ logs }) => {
  return (
    <>
      <Head>
        <title>Ganesh Kolavennu | Logs</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Ganesh portfolio" />
        <meta name="author" content="macklark" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="container mx-auto md:max-w-5xl mt-10 grid grid-cols-1 md:grid-cols-3">
        {logs.map((log) => (
          <div className="col-span-1 m-5 md:m-0" key={log.sys.id}>
            <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <Image
                src={"https:" + log.fields.thumbnail.fields.file.url}
                width={log.fields.thumbnail.fields.file.details.image.width}
                height={log.fields.thumbnail.fields.file.details.image.height}
              />
              <div className="p-4 mb-2">
                <h2 className="text-2xl font-bold">{log.fields.title}</h2>
                <p className="text-gray-700 text-lg mt-5 dark:text-gray-100">
                  {log.fields.description}
                </p>
              </div>
              <Link href={`/logs/${log.fields.slug}`}>
                <a className="p-4 dark:bg-white dark:text-blue-700 bg-blue-400 text-white rounded">
                  Read More
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Logs.displayName = "Logs";

export default Logs;
