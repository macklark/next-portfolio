import Navbar from "../components/Navbar";
import List from "../components/List";
import Head from "next/head";

export default function Skills() {
  const initData = [
    { title: "Frontend", sub: ["Vue js", "React js", "Next js"], id: 1 },
    { title: "Backend", sub: ["Django"], id: 2 },
    { title: "API", sub: ["REST"], id: 3 },
    {
      title: "Databases",
      sub: ["PostgresSQL", "Firestore", "Supabase"],
      id: 4,
    },
    { title: "Programming Languages", sub: ["Python", "Javascript"], id: 5 },
    { title: "Dev Ops", sub: ["Git", "GitHub"], id: 6 },
  ];
  return (
    <div>
      <Head>
        <title>Ganesh Kolavennu | Skills</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Ganesh portfolio" />
        <meta name="author" content="macklark" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="md:container md:mx-auto">
        {initData.map((item) => {
          return (
            <div key={item.id}>
              <List instance={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
