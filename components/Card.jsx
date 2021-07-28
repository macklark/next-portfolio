import Image from "next/image";
import gitHub from "../public/github.png";

export default function Card({ project }) {
  return (
    <section className="flex items-center justify-center px-4 bg-white mt-5 dark:bg-black transition duration-300">
      <div className="max-w-lg w-full rounded-lg shadow-lg p-4 dark:border-2 dark:border-white">
        <h3 className="font-semibold text-lg tracking-wide">
          {project.fields.title}
        </h3>
        <p className="text-gray-500 my-1">{project.fields.description}</p>
        <div className="mt-2">
          {project.fields.doesGithub && (
            <a href={project.fields.link}>
              <Image src={gitHub} alt="github icon" width={25} height={25} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
