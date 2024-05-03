import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className="p-4 max-w-4xl m-auto">
          <Header />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
