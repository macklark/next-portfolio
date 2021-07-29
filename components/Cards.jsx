import Card from "./Card";

export default function Cards({ projects }) {
  return (
    <div className="mb-10">
      {projects.map((project) => (
        <section key={project.sys.id}>
          <Card project={project} />
        </section>
      ))}
    </div>
  );
}
