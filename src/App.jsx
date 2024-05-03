import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectsList from "./components/ProjectsList";

function App() {
  return (
    <>
      <div className="absolute top-0 h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className="p-4 m-auto max-w-4xl h-full z-10 main-container">
          <Header />
          <ProjectsList />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
