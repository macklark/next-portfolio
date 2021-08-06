import Navbar from "../components/Navbar";
import Image from "next/image";
import gitHub from "../public/whitegit.png";
import mail from "../public/mail.png";
import discord from "../public/discord.png";
import twitter from "../public/twitter.png";
import Head from "next/head";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Ganesh Kolavennu | Contact</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Ganesh portfolio" />
        <meta name="author" content="macklark" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <section className="flex justify-center">
        <div className="grid grid-cols-2 gap-4 mt-20">
          <a href="https://github.com/macklark">
            <div className="bg-black p-10 rounded hover:bg-gray-900 dark:border-2 dark:border-white">
              <Image src={gitHub} alt="github icon" width={100} height={100} />
            </div>
          </a>
          <a href="mailto:kolavennu.sriganesh18@st.niituniversity.in">
            <div className="bg-red-600 p-10 rounded hover:bg-red-500">
              <Image src={mail} alt="mail icon" width={100} height={100} />
            </div>
          </a>
          <a href="https://twitter.com/GKolavennu">
            <div className="bg-blue-500 p-10 rounded hover:bg-blue-400">
              <Image
                src={twitter}
                alt="twitter icon"
                width={100}
                height={100}
              />
              <p className="text-center mt-5 text-white font-bold">
                GKolavennu
              </p>
            </div>
          </a>
          <div className="bg-purple-800 p-10 rounded">
            <Image src={discord} alt="discord icon" width={100} height={100} />
            <p className="text-center mt-5 text-white font-bold">Ralph#8024</p>
          </div>
        </div>
      </section>
    </div>
  );
}
