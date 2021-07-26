import Card from "./Card";

export default function Cards({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <section key={project.sys.id}>
          <Card project={project} />
        </section>
      ))}
    </div>
  );
}
