import Navbar from "../components/Navbar";
import Image from "next/image";
import gitHub from "../public/whitegit.png";
import mail from "../public/mail.png";
import phone from "../public/phone.png";
import discord from "../public/discord.png";
import Head from "next/head";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Ganesh Kolavennu | Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <section className="flex justify-center">
        <div className="grid grid-cols-2 gap-4 mt-20">
          <div className="bg-black p-10 rounded hover:bg-gray-900">
            <a href="https://github.com/macklark">
              <Image src={gitHub} alt="github icon" width={100} height={100} />
            </a>
          </div>
          <div className="bg-red-600 p-10 rounded hover:bg-red-500">
            <a href="mailto:kolavennu.sriganesh18@st.niituniversity.in">
              <Image src={mail} alt="mail icon" width={100} height={100} />
            </a>
          </div>
          <div className="bg-blue-500 p-10 rounded">
            <Image src={phone} alt="phone icon" width={100} height={100} />
            <p className="text-center mt-5 text-white font-bold">6302767350</p>
          </div>
          <div className="bg-purple-800 p-10 rounded">
            <Image src={discord} alt="discord icon" width={100} height={100} />
            <p className="text-center mt-5 text-white font-bold">Ralph#8024</p>
          </div>
        </div>
      </section>
    </div>
  );
}
