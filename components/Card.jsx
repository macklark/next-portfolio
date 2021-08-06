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
              <p className="text-black dark:text-white hover:text-blue-500 font-bold dark:hover:text-blue-500">
                Github
              </p>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
