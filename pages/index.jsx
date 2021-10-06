import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Home() {
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
      <div className="container mx-auto md:max-w-xl mt-14 md:mt-10">
        <div>
          <h1 className="text-6xl font-medium tracking-wide text-gray-800 lg:text-7xl md:text-6xl dark:text-white text-center md:text-left">
            Hello👋
          </h1>
          <div className="flex items-center mt-5 hidden md:flex">
            <a
              href="https://hsxzrhetghnnifprcnsa.supabase.in/storage/v1/object/sign/link/CV_ganeshKolavennu.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsaW5rL0NWX2dhbmVzaEtvbGF2ZW5udS5wZGYiLCJpYXQiOjE2MzM0ODk4MDgsImV4cCI6MTk0ODg0OTgwOH0.Xuhwqx3OxsDHS0URKUtsGnD8_CcIm9KiqWZFkBUAwNs"
              className="text-2xl mr-2 text-blue-600 "
            >
              Resume
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="dark:text-white fill-current"
            >
              <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
            </svg>
          </div>
          <div className="text-center md:hidden mt-5">
            <a
              href="https://hsxzrhetghnnifprcnsa.supabase.in/storage/v1/object/sign/link/CV_ganeshKolavennu(1).pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsaW5rL0NWX2dhbmVzaEtvbGF2ZW5udSgxKS5wZGYiLCJpYXQiOjE2Mjk2ODk2OTAsImV4cCI6MTk0NTA0OTY5MH0.bxEvPgH9-jh3d8KZa3CxcllyMuy1TH68BMqmkGJhH3Y"
              className="text-2xl mr-2 text-blue-600 "
            >
              Resume
            </a>
          </div>
          <ul className="mt-4 text-gray-600 m-5 md:m-0">
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
              I am Currently working on an e-commerce site and learning Nextjs.
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
