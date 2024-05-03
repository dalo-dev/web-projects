import { useEffect, useState } from "react";
import Project from "./Project";

export default function ProjectsList() {
  const [respositories, setRepositories] = useState([]);

  useEffect(() => {
    const getRepos = async function () {
      const response = await fetch(
        "https://api.github.com/users/dalo-dev/repos"
      );
      const data = await response.json();
      console.log(data);
      setRepositories(data);
    };
    getRepos();
  }, []);

  return (
    <ul>
      {respositories.map((repo) => (
        <Project key={repo.id} project={repo} />
      ))}
    </ul>
  );
}
