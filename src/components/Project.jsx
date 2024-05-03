export default function Project({ project }) {
  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description || "No description"}</p>
    </div>
  );
}
