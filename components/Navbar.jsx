import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="container p-6 mx-auto ">
        <section className="block text-2xl font-bold text-center text-gray-800 lg:text-3xl hover:text-gray-700">
          <p>Ganesh Kolavennu</p>
        </section>
        <div className="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
          <section className="text-gray-800 border-b-2 border-blue-500 mx-1.5 sm:mx-6 hover:bg-blue-400 hover:border-white p-2 hover:text-white">
            <Link href="/">home</Link>
          </section>
          <section className="text-gray-800 border-b-2 border-blue-500 mx-1.5 sm:mx-6 hover:bg-blue-400 hover:border-white p-2 hover:text-white">
            <Link href="/contact">Contact</Link>
          </section>
          <section className="text-gray-800 border-b-2 border-blue-500 mx-1.5 sm:mx-6 hover:bg-blue-400 hover:border-white p-2 hover:text-white">
            <Link href="/projects">Projects</Link>
          </section>
          <section className="text-gray-800 border-b-2 border-blue-500 mx-1.5 sm:mx-6 hover:bg-blue-400 hover:border-white p-2 hover:text-white">
            <Link href="/skills">Skills</Link>
          </section>
        </div>
      </div>
    </nav>
  );
}
