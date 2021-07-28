import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

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
    <nav className="bg-white dark:bg-black">
      <div className="container p-6 mx-auto">
        <section className="block text-2xl font-bold text-center text-gray-800 lg:text-3xl hover:text-gray-700">
          <p className="dark:text-white">Ganesh Kolavennu</p>
        </section>
        <div className="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
          <section className="text-gray-800 border-b-2 border-blue-500 dark:border-green-500 dark:hover:bg-green-500 dark:text-white mx-1.5 sm:mx-6 hover:bg-blue-400 hover:border-white p-2 hover:text-white">
            <Link href="/">home</Link>
          </section>
          <section className="text-gray-800 border-b-2 border-blue-500 dark:border-green-500 dark:hover:bg-green-500 dark:text-white mx-1.5 sm:mx-6 hover:bg-blue-400 hover:border-white p-2 hover:text-white">
            <Link href="/contact">Contact</Link>
          </section>
          <section className="text-gray-800 border-b-2 border-blue-500 dark:border-green-500 dark:hover:bg-green-500 dark:text-white mx-1.5 sm:mx-6 hover:bg-blue-400 hover:border-white p-2 hover:text-white">
            <Link href="/projects">Projects</Link>
          </section>
          <section className="text-gray-800 border-b-2 border-blue-500 dark:border-green-500 dark:hover:bg-green-500 dark:text-white mx-1.5 sm:mx-6 hover:bg-blue-400 hover:border-white p-2 hover:text-white">
            <Link href="/skills">Skills</Link>
          </section>
          <section className="text-gray-800 border-b-2 border-blue-500 mx-1.5 sm:mx-6 hover:bg-blue-400 hover:border-white p-2 hover:text-white dark:text-white dark:border-green-500 dark:hover:bg-green-500">
            {theme === "light" ? (
              <button onClick={themeHandler}>Dark</button>
            ) : (
              <button onClick={themeHandler}>Light</button>
            )}
          </section>
        </div>
      </div>
    </nav>
  );
}
