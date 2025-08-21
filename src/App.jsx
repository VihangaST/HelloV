import Settings from "./Pages/Settings";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const NormalCards = [
    { name: "BD1", images: "B1", category: "Birthday" },
    { name: "BD2", images: "B2", category: "Anniversary" },
    { name: "BD3", images: "B3", category: "Graduation" },
    { name: "BD4", images: "B4", category: "Wedding" },
    { name: "BD5", images: "B5", category: "New Year" },
  ];

  const MotherCards = [
    { name: "BM1", images: "BM1", category: "Birthday" },
    { name: "BM2", images: "BM2", category: "Anniversary" },
  ];

  const FatherCards = [
    { name: "BF1", images: "BF1", category: "Birthday" },
    { name: "BF2", images: "BF2", category: "Anniversary" },
  ];
  return (
    <>
      <Navbar />

      <section id="features">
        <Grid cards={NormalCards} title="Normal Cards" />
      </section>
      <section id="mother">
        <Grid cards={MotherCards} title="Mother Cards" />
      </section>
      <section id="father">
        <Grid cards={FatherCards} title="Father Cards" />
      </section>

      <Footer />
    </>
  );
}

export default App;
