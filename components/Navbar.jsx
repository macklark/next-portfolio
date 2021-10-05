import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import sun from "../public/sun.png";
import Image from "next/image";
import moon from "../public/moon.png";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeHandler = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <nav className="bg-white dark:bg-black transition duration-300">
      <div className="container p-6 mx-auto">
        <section className="block text-2xl font-bold text-center text-gray-800 lg:text-3xl hover:text-gray-700">
          <p className="dark:text-white hover:text-blue-500">
            Ganesh Kolavennu
          </p>
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
          <section className="text-gray-800 border-b-2 border-blue-500 mx-1.5 sm:mx-6 hover:bg-blue-400 hover:border-white p-2 hover:text-white dark:text-white dark:border-green-500 dark:hover:bg-green-500">
            {theme === "light" ? (
              <button onClick={themeHandler}>
                <Image src={moon} alt="moon" width={20} height={20} />
              </button>
            ) : (
              <button onClick={themeHandler}>
                <Image src={sun} alt="sun" width={20} height={20} />
              </button>
            )}
          </section>
        </div>
      </div>
    </nav>
  );
}
