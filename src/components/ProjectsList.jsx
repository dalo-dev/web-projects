import { useEffect, useState } from "react";
import Project from "./Project";

const gridStyles = {
  overflowY: "scroll",
  scrollbarWidth: "thin",
  display: "grid",
  gap: "1rem",
};

export default function ProjectsList() {
  const [respositories, setRepositories] = useState([]);

  useEffect(() => {
    const getRepos = async function () {
      const response = await fetch(
        "https://api.github.com/users/dalo-dev/repos"
      );
      const data = await response.json();
      const webDevRepos = data.filter((repo) =>
        repo.topics.includes("web-dev")
      );
      console.log(webDevRepos);
      setRepositories(webDevRepos);
    };
    getRepos();
  }, []);

  return (
    <ul className="py-5" style={gridStyles}>
      {respositories.map((repo) => (
        <Project key={repo.id} project={repo} />
      ))}
    </ul>
  );
}
