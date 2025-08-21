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
    { name: "BD8", images: "B6", category: "Graduation" },
  ];

  const MotherCards = [
    { name: "BM1", images: "BM1", category: "Birthday" },
    { name: "BM2", images: "BM2", category: "Anniversary" },
    { name: "BM3", images: "BM3", category: "Graduation" },
    { name: "BM4", images: "BM4", category: "Graduation" },
  ];

  const FatherCards = [
    { name: "BF1", images: "BF1", category: "Birthday" },
    { name: "BF2", images: "BF2", category: "Anniversary" },
    { name: "BF3", images: "BF3", category: "Anniversary" },
  ];

  const LoverCards = [{ name: "BL", images: "BL", category: "Birthday" }];
  const SisterCards = [{ name: "BS1", images: "BS1", category: "Birthday" }];

  const BrotherCards = [
    { name: "BB1", images: "BB1", category: "Birthday" },
    { name: "BB2", images: "BB2", category: "Birthday" },
  ];

  const TeacherCards = [{ name: "TR", images: "TR", category: "Retirement" }];

  const WeddingAnniversary = [
    { name: "WA1", images: "WA1", category: "Retirement" },
    { name: "WA2", images: "WA2", category: "Retirement" },
  ];
  return (
    <>
      <Navbar />

      <section id="cards">
        <Grid cards={NormalCards} name="Normal" title="Normal Cards" />
        <Grid cards={MotherCards} name="Mother" title="Mother Cards" />
        <Grid cards={FatherCards} name="Father" title="Father Cards" />
        <Grid cards={LoverCards} name="Lover" title="Lover Cards" />
        <Grid cards={SisterCards} name="Sister" title="Sister Cards" />
        <Grid cards={BrotherCards} name="Brother" title="Brother Cards" />
        <Grid cards={TeacherCards} name="Teacher" title="Teacher Cards" />
      </section>
      <section id="weddingAnniversary">
        <Grid
          cards={WeddingAnniversary}
          name="WeddingAnniversary"
          title="Wedding Anniversary Cards"
        />
      </section>
      <section id="father"></section>
      <section id="lover"></section>
      <section id="sister"></section>
      <section id="brother"></section>

      <Footer />
    </>
  );
}

export default App;
