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

function Logs({ logs }) {
  return (
    <>
      <Head>
        <title>Ganesh Kolavennu | Logs</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Ganesh portfolio" />
        <meta name="author" content="macklark" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="container mx-auto md:max-w-5xl mt-10 grid grid-cols-1 md:grid-cols-3 md:gap-6">
        {logs.map((log) => (
          <div className="col-span-1 m-5 md:m-0" key={log.sys.id}>
            <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <Image
                src={"https:" + log.fields.thumbnail.fields.file.url}
                width={log.fields.thumbnail.fields.file.details.image.width}
                height={log.fields.thumbnail.fields.file.details.image.height}
                alt={log.fields.slug}
              />
              <div className="p-4 mb-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">{log.fields.title}</h2>
                  <a href={log.fields.link}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
                    </svg>
                  </a>
                </div>
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
}

export default Logs;
