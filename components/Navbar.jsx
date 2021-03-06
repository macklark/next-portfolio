// Next JS imports
import Link from "next/link";

// React JS imports
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setMounted] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeHandler = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <>
      <nav className="bg-white dark:bg-black transition duration-300 hidden md:block">
        <div className="container p-6 mx-auto">
          <section className="block text-2xl font-bold text-center text-gray-800 lg:text-3xl hover:text-gray-700">
            <p className="dark:text-white">Ganesh Kolavennu</p>
          </section>
          <div className="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
            <Link href="/">
              <a className="rounded dark:hover:bg-green-300 dark:text-white mx-1.5 sm:mx-6 hover:bg-blue-400 hover:text-white p-2 hover:transform hover:scale-125 transition duration-400">
                home
              </a>
            </Link>
            <Link href="/contact">
              <a className="rounded dark:hover:bg-green-300 dark:text-white mx-1.5 sm:mx-6 hover:bg-blue-400 hover:text-white p-2 hover:transform hover:scale-125 transition duration-400">
                Contact
              </a>
            </Link>
            <Link href="/projects">
              <a className="rounded dark:hover:bg-green-300 dark:text-white mx-1.5 sm:mx-6 hover:bg-blue-400 hover:text-white p-2 hover:transform hover:scale-125 transition duration-400">
                Projects
              </a>
            </Link>
            <Link href="/skills">
              <a className="rounded dark:hover:bg-green-300 dark:text-white mx-1.5 sm:mx-6 hover:bg-blue-400 hover:text-white p-2 hover:transform hover:scale-125 transition duration-400">
                Skills
              </a>
            </Link>
            <Link href="/logs">
              <a className="rounded dark:hover:bg-green-300 dark:text-white mx-1.5 sm:mx-6 hover:bg-blue-400 hover:text-white p-2 hover:transform hover:scale-125 transition duration-400">
                Logs
              </a>
            </Link>
            <section
              className="text-gray-900 mx-1.5 sm:mx-6 p-2 dark:bg-gray-800 rounded-md border-2 dark:border-gray-700 dark:hover:bg-gray-600 cursor-pointer hover:bg-gray-100"
              onClick={themeHandler}
            >
              {theme === "light" ? (
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z" />
                  </svg>
                </button>
              ) : (
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="text-black dark:text-white fill-current"
                  >
                    <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z" />
                  </svg>
                </button>
              )}
            </section>
          </div>
        </div>
      </nav>
      <nav className="block md:hidden mx-5 my-6 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Ganesh Kolavennu</h1>
        </div>
        <div className="flex">
          {theme === "light" ? (
            <button onClick={themeHandler} className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z" />
              </svg>
            </button>
          ) : (
            <button onClick={themeHandler} className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-black dark:text-white fill-current"
              >
                <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z" />
              </svg>
            </button>
          )}
          {mobileNavbar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              onClick={() => setMobileNavbar(!mobileNavbar)}
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              onClick={() => setMobileNavbar(!mobileNavbar)}
            >
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </svg>
          )}
        </div>
      </nav>
      {mobileNavbar && (
        <ul className="min-w-full left-0 w-full block md:hidden mx-5">
          <li className="my-2">
            <Link href="/">
              <a className="text-lg">Home</a>
            </Link>
          </li>
          <li className="my-2">
            <Link href="/contact">
              <a className="text-lg">Contact</a>
            </Link>
          </li>
          <li className="my-2">
            <Link href="/projects">
              <a className="text-lg">Projects</a>
            </Link>
          </li>
          <li className="my-2">
            <Link href="/skills">
              <a className="text-lg">Skills</a>
            </Link>
          </li>
          <li>
            <Link href="/logs">
              <a className="text-lg">Logs</a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
