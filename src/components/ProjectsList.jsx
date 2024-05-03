import { useEffect, useState } from "react";
import Project from "./Project/Project";

const gridStyles = {};

export default function ProjectsList() {
  const [respositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRepos = async function () {
      setIsLoading(true);
      const response = await fetch(
        "https://api.github.com/users/dalo-dev/repos"
      );
      const data = await response.json();
      const webDevRepos = data.filter((repo) =>
        repo.topics.includes("web-dev")
      );
      setRepositories(webDevRepos);
      setIsLoading(false);
    };

    getRepos();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="container">
          <div className="loader"></div>
        </div>
      ) : (
        <ul className="p-0" style={gridStyles}>
          {respositories.map((repo) => (
            <Project key={repo.id} project={repo} />
          ))}
        </ul>
      )}
    </>
  );
}
