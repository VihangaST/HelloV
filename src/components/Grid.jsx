import Card from "./Card";
function Grid() {
  const cards = [
    { name: "BD1", images: "B1", category: "Birthday" },
    { name: "BD2", images: "B2", category: "Anniversary" },
    { name: "BD3", images: "B3", category: "Graduation" },
    { name: "BD4", images: "B4", category: "Wedding" },
    { name: "BD5", images: "B5", category: "New Year" },
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
