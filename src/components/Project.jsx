export default function Project({ project }) {
  return (
    <div className="card">
      <img
        src="https://raw.githubusercontent.com/dalo-dev/.dotfiles/main/Screenshots/Main.png"
        alt=""
      />
      <div className="text">
        <p className="h3"> {project.name}</p>
        <p className="p"> 6 Video - 40 min </p>
      </div>
    </div>
  );
}
