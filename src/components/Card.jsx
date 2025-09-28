function Card({ carouselId, card }) {
  // alert(carouselId);
  return (
    <>
      <div
        className="card border border-2 rounded-3"
        style={{ width: "300px" }}
      >
        <div id={carouselId} className="carousel slide">
          {/* <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
              style={{ backgroundColor: "black" }}
            ></button>
            <button
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide-to="1"
              aria-label="Slide 2"
              style={{ backgroundColor: "black" }}
            ></button>
          </div> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={`/public/assets/BD/${card.images}-1.jpg`}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={`public/assets/BD/${card.images}-2.jpg`}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="card-body">
          <h6 className="card-title">{card.name}</h6>
          <button className="btn btn-primary btn-sm btn-success m-1">
            {card.category}
          </button>
          <button className="btn btn-primary btn-sm btn-secondary">
            {card.subCategory}
          </button>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </>
  );
}

export default Card;
