import Navbar from "../components/Navbar";
import Image from "next/image";
import profilePic from "../public/pic.jpeg";
import Head from "next/head";

export default function Home({ router }) {
  return (
    <header className="bg-white dark:bg-black transition duration-300">
      <Head>
        <title>Ganesh Kolavennu | Home</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Ganesh portfolio" />
        <meta name="author" content="macklark" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div className="max-w-lg md:mx-12 md:order-2">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-medium tracking-wide text-gray-800 lg:text-8xl md:text-6xl dark:text-white">
                  Hello👋
                </h1>
                <a
                  href="https://hsxzrhetghnnifprcnsa.supabase.in/storage/v1/object/sign/link/CV_ganeshKolavennu(1).pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsaW5rL0NWX2dhbmVzaEtvbGF2ZW5udSgxKS5wZGYiLCJpYXQiOjE2Mjk2ODk2OTAsImV4cCI6MTk0NTA0OTY5MH0.bxEvPgH9-jh3d8KZa3CxcllyMuy1TH68BMqmkGJhH3Y"
                  className="text-indigo-500 text-2xl md:hidden"
                >
                  Resume
                </a>
              </div>
              <div className="md:hidden">
                <Image
                  src={profilePic}
                  alt="profile pic"
                  width={110}
                  height={148}
                />
              </div>
            </div>
            <a
              href="https://hsxzrhetghnnifprcnsa.supabase.co/storage/v1/object/sign/link/CV_ganeshKolavennu.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsaW5rL0NWX2dhbmVzaEtvbGF2ZW5udS5wZGYiLCJpYXQiOjE2MjczMDI2MzksImV4cCI6MTk0MjY2MjYzOX0.FzVYkvc43tL8EUZ_fTsJn3U7s2JMrZuNKD4y42IfLp8"
              className="text-indigo-500 text-2xl hidden md:block"
            >
              Resume
            </a>
            <ul className="mt-4 text-gray-600">
              <li className="text-lg md:text-2xl mt-10 dark:text-white">
                I am Ganesh Kolavennu.
              </li>
              <li className="text-lg md:text-2xl mt-5 dark:text-white">
                Presently I am a Computer Science student.
              </li>
              <li className="text-lg md:text-2xl mt-5 dark:text-white">
                I Love learning new things, and I am into web development.
              </li>
              <li className="text-lg md:text-2xl mt-5 dark:text-white">
                I also like to explore new fields in computer science.
              </li>
              <li className="text-lg md:text-2xl mt-5 dark:text-white">
                I am Currently working on an e-commerce site and learning
                Nextjs.
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden md:flex md:items-center md:justify-center md:w-1/2">
          <Image
            src={profilePic}
            alt="profile pic"
            width={400}
            height={530}
            className="rounded"
            layout="intrinsic"
          />
        </div>
      </div>
    </header>
  );
}
