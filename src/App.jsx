import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectsList from "./components/ProjectsList";

function App() {
  return (
    <>
      <div className="absolute inset-0  h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="p-4 m-auto max-w-5xl h-full z-10 main-container">
          <Header />
          <ProjectsList />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

<div></div>;
