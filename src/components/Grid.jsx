import Card from "./Card";
function Grid() {
  const cards = [
    { name: "A", images: "B1", category: "Birthday" },
    { name: "B", images: "B2", category: "Anniversary" },
    { name: "C", images: "B3", category: "Graduation" },
    { name: "D", images: "B4", category: "Wedding" },
    { name: "E", images: "B5", category: "New Year" },
  ];

  return (
    <>
      <div className="container text-center">
        <div className="row">
          {cards.map((card, idx) => (
            <div className="col p-2" key={card}>
              <Card carouselId={`carousel-${idx}`} card={card} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Grid;
