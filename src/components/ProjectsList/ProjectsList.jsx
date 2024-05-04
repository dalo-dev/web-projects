import { useEffect, useState } from "react";
import Project from "../Project/Project";

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
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto gap-4 p-2">
          {respositories.map((repo) => (
            <Project key={repo.id} project={repo} />
          ))}
        </div>
      )}
    </>
  );
}
