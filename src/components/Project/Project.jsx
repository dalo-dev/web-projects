/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import "./Project.css";

export default function Project({ project }) {
  const projectTechs = project.topics.filter((topic) => topic !== "web-dev");

  return (
    <div className="project-card">
      <img
        className="w-full"
        src="https://raw.githubusercontent.com/dalo-dev/.dotfiles/main/Screenshots/Main.png"
        alt="Project Picture"
      />
      <div className="project-info px-4 py-2 ">
        <h2>
          {" "}
          <a href={project.html_url}>{project.name}</a>
        </h2>
        <p className="text-sm line-clamp-3">
          {project.description || "No description"}
        </p>
        <ul className="flex p-0 list-none gap-3">
          {projectTechs.map((tech) => (
            <li key={`${project.id}-${tech}`}>
              <img
                className="w-7"
                src={`https://cdn.simpleicons.org/${tech}`}
                alt={tech}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
