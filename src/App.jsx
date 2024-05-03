import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectsList from "./components/ProjectsList";

function App() {
  return (
    <>
      <div className="h-[100vh] w-[100vw]">
        <div className="m-auto max-w-5xl h-full z-10 main-container">
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
