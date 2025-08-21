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
    { name: "BD6", images: "T3", category: "Graduation" },
    { name: "BD7", images: "T2", category: "New Year" },
  ];

  const MotherCards = [
    { name: "BM1", images: "BM1", category: "Birthday" },
    { name: "BM2", images: "BM2", category: "Anniversary" },
  ];

  const FatherCards = [
    { name: "BF1", images: "BF1", category: "Birthday" },
    { name: "BF2", images: "BF2", category: "Anniversary" },
  ];

  const LoverCards = [{ name: "BL", images: "BL", category: "Birthday" }];
  const SisterCards = [{ name: "BS1", images: "BS1", category: "Birthday" }];

  const BrotherCards = [{ name: "BB1", images: "BB1", category: "Birthday" }];
  return (
    <>
      <Navbar />

      <section id="cards">
        <Grid cards={NormalCards} name="Normal" title="Normal Cards" />
      </section>
      <section id="mother">
        <Grid cards={MotherCards} name="Mother" title="Mother Cards" />
      </section>
      <section id="father">
        <Grid cards={FatherCards} name="Father" title="Father Cards" />
      </section>
      <section id="lover">
        <Grid cards={LoverCards} name="Lover" title="Lover Cards" />
      </section>
      <section id="sister">
        <Grid cards={SisterCards} name="Sister" title="Sister Cards" />
      </section>
      <section id="brother">
        <Grid cards={BrotherCards} name="Brother" title="Brother Cards" />
      </section>

      <Footer />
    </>
  );
}

export default App;
